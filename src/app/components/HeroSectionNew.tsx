import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Herovideo from '../Video/VIDEO-2026-02-10-00-45-16.mp4';

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src={Herovideo}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Center Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e31daeaa5f8bb2610a36a/52864ce5c_event-rules-high-resolution-logo-transparent.png"
          alt="Event Rules Logo"
          className="w-72 md:w-96 object-contain brightness-0 invert opacity-90"
        />
      </div>

      {/* Bottom content */}
      
    </section>
  );
}