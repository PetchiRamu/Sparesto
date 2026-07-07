'use client';

import React from 'react';
import Header from '../components/header';

export default function EAuctionPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFA] text-[#102227]">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="rounded-[2rem] border border-[#D8F0EE] bg-white p-12 shadow-sm">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">E-Auction Services</h1>
          <p className="text-slate-600 text-lg leading-8">
            Discover our E-Auction platform for sourcing and selling industrial equipment and spare parts.
          </p>
        </div>
      </main>
    </div>
  );
}
