'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const Dragon = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const positionXRef = useRef(0)
  const directionRef = useRef(1)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    scene.background = null

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.offsetWidth / mountRef.current.offsetHeight,
      0.1,
      1000
    )
    camera.position.set(0, 1, 10)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mountRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enablePan = true
    controls.enableZoom = true
    controls.autoRotate = false

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.2)
    directionalLight1.position.set(5, 10, 7)
    scene.add(directionalLight1)

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight2.position.set(-5, 10, -7)
    scene.add(directionalLight2)

    let mixer: THREE.AnimationMixer | null = null
    let dragonModel: THREE.Group | null = null

    const loader = new GLTFLoader()
    loader.load(
      '/model_Animation_Walking_withSkin.glb',
      (gltf) => {
        dragonModel = gltf.scene
        dragonModel.scale.set(1000, 1000, 1000)
        scene.add(dragonModel)

        // Center the model using bounding box
        const box = new THREE.Box3().setFromObject(dragonModel)
        const center = box.getCenter(new THREE.Vector3())
        dragonModel.position.sub(center) // Move to origin

        // No custom rotation, model uses default
        // Camera fit for viewport
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const fov = camera.fov * (Math.PI / 180)
        let cameraZ = Math.abs(maxDim / (2 * Math.tan(fov / 2))) * 1.2
        camera.position.set(0, 2, cameraZ)
        camera.lookAt(0, 0, 0)

        mixer = new THREE.AnimationMixer(dragonModel)
        if (gltf.animations.length) {
          const action = mixer.clipAction(gltf.animations[0])
          action.play()
        }
      },
      undefined,
      (error) => {
        console.error('An error happened while loading the model:', error)
      }
    )

    const clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)
      const deltaTime = clock.getDelta()
      if (mixer) mixer.update(deltaTime)

      if (dragonModel) {
        positionXRef.current += directionRef.current * 2 * deltaTime
        if (positionXRef.current >= 3) directionRef.current = -1
        if (positionXRef.current <= -3) directionRef.current = 1
        dragonModel.position.x = positionXRef.current

        dragonModel.rotation.y += directionRef.current * 0.2 * deltaTime

        const targetRotY = pointer.current.x * 0.2
        const targetRotX = pointer.current.y * 0.1
        dragonModel.rotation.y += (targetRotY - dragonModel.rotation.y) * 0.1
        dragonModel.rotation.x += (targetRotX - dragonModel.rotation.x) * 0.1
      }
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    const onPointerMove = (event: MouseEvent) => {
      if (!mountRef.current) return
      const rect = mountRef.current.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
      pointer.current.x = THREE.MathUtils.clamp(x, -1, 1)
      pointer.current.y = THREE.MathUtils.clamp(y, -1, 1)
    }
    mountRef.current.addEventListener('pointermove', onPointerMove)

    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = mountRef.current.offsetWidth / mountRef.current.offsetHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        mountRef.current.removeEventListener('pointermove', onPointerMove)
        mountRef.current.removeChild(renderer.domElement)
      }
      controls.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="w-full h-[80vh] max-h-[900px] min-h-[500px] relative lg:opacity-100 opacity-30 transition-opacity duration-500"
    />
  )
}

export default Dragon
