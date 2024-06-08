'use client';
import Link from 'next/link';
import React from 'react';

const GotoSignout = () => {
  return (
    <Link href="/api/auth/signout">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign out
      </button>
    </Link>
  );
};

export default GotoSignout;
