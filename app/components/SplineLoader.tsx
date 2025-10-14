"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function SplineLoader() {
  return (
    <div style={{ width: 100, height: 100 }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="/scene.splinecode" style={{ background: 'transparent' }} />
      </Suspense>
    </div>
  );
}
