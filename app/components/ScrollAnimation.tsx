'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fade-in' | 'slide-left' | 'slide-right' | 'scale'
  threshold?: number
  className?: string
  delay?: number
}

const ScrollAnimation = ({
  children,
  animation = 'fade-in',
  threshold = 0.1,
  className = '',
  delay = 0
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, delay)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, delay])

  return (
    <div
      ref={elementRef}
      className={`scroll-${animation} ${className}`}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation