"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function SplineScene() {
  return (
    <main style={{ width: '100%', height: '100vh' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="/scene.splinecode" />
      </Suspense>
    </main>
  );
}
