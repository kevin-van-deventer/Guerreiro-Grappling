import React from 'react';
import AboutClient from './AboutClient';
import Reviews from '@/components/Reviews';

// This is the native Next.js Server Component Entry Point for the About route.
// It securely delegates interactions to the client and wraps the asynchronous Reviews logic underneath.
export default function AboutPageServer() {
  return (
    <>
      <AboutClient />
      <Reviews />
    </>
  );
}
