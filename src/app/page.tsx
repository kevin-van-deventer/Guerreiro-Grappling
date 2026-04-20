import React from 'react';
import HomeClient from './HomeClient';
import Reviews from '@/components/Reviews';

// This is the native Next.js Server Component Entry Point.
// It securely delegates interactions to the client and server components respectfully.
export default function HomePageServer() {
  return (
    <>
      <HomeClient />
      <Reviews />
    </>
  );
}
