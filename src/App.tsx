import React, { useState, useEffect } from 'react';
import { useTypewriter } from './useTypewriter';

export default function App() {
  const [copied, setCopied] = useState(false);

  // Parallax tilt tracking cursor movement
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Typewriter effect
  const subHeading = "Hey there, meet ISHAN,\nBridging Spring Boot microservices with generative intelligence";
  const { displayedText } = useTypewriter(subHeading, 35, 300);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@mainframe.co');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Cursor tracking for realistic 3D character tilt & gaze
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const winW = window.innerWidth;
      const winH = window.innerHeight;

      // Calculate smooth tilt angles
      const normX = (mouseX / winW) - 0.5;
      const normY = (mouseY / winH) - 0.5;

      setTilt({
        x: -normY * 9, // pitch up/down towards cursor
        y: normX * 14, // yaw turn left/right towards cursor
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#240506] text-white selection:bg-rose-500 selection:text-white">
      {/* Background Radial Gradient & Vignette */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(180,30,45,0.45)_0%,_rgba(36,5,6,0.95)_60%,_rgba(15,2,3,1)_100%)]" 
      />

      {/* Navigation Bar */}
      <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span>Ishan Singh</span>
          <span className="text-lg"></span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-300 md:flex">
          <a href="#labs" className="transition-colors hover:text-white">Projects</a>
          <a href="#studio" className="transition-colors hover:text-white">Experience</a>
          <a href="#openings" className="transition-colors hover:text-white">Stack</a>
          <a href="#shop" className="transition-colors hover:text-white">Resume</a>
        </nav>

        <div>
          <a
            href="mailto:ishansingh453@gmail.com"
            className="text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero Content Section */}
      <main className="relative z-20 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col justify-center px-6 pb-20 md:px-12">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Subheading / Agent Introduction */}
          <div className="mb-6 min-h-[3rem]">
            <p className="whitespace-pre-line text-sm font-medium leading-relaxed tracking-wide text-neutral-400">
              {displayedText}
              <span className="inline-block animate-pulse font-light text-rose-400">|</span>
            </p>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl font-normal leading-[1.25] tracking-tight sm:text-4xl md:text-5xl">
            Welcome to the interface. Intelligent architecture meets modern design.{' '}
            <span className="block mt-1 font-normal text-white/95">What are we innovating?</span>
          </h1>

          {/* Action Button Pills */}
          <div className="mt-10 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]">
                Pitch us an idea
              </button>
              <button className="rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-150 hover:border-white hover:bg-white/10 active:scale-[0.98]">
                Come work here
              </button>
              <button className="rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-150 hover:border-white hover:bg-white/10 active:scale-[0.98]">
                Send a brief hello
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full border border-white/20 bg-black/30 px-5 py-2.5 text-xs font-medium text-neutral-300 backdrop-blur-md transition hover:border-white/40 hover:text-white">
                See how we operate
              </button>
              <button
                onClick={handleCopyEmail}
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-xs font-medium text-neutral-300 backdrop-blur-md transition hover:border-white/40 hover:text-white active:scale-95"
              >
                <span>Reach us: <span className="underline decoration-white/30 underline-offset-2">ishansingh453@gmail.com</span></span>
                <svg
                  className="h-3.5 w-3.5 text-neutral-400 transition-colors group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                {copied && (
                  <span className="text-emerald-400 font-medium ml-1">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Clay Character Container with 3D Mouse Parallax Movement */}
      <div 
        className="pointer-events-none absolute bottom-0 right-[-5%] z-10 flex h-[78vh] w-[60vw] max-w-[850px] items-end justify-end md:right-[2%] lg:right-[6%] lg:h-[86vh]"
        style={{ perspective: 1200 }}
      >
        <div 
          className="relative flex h-full w-auto items-end justify-end will-change-transform"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformOrigin: 'bottom center',
            transition: 'transform 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {/* Custom Avatar without artificial eye overlays */}
          <img
            src="/my-doll.png"
            alt="Clay Character Avatar"
            className="h-full w-auto select-none object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
          />
        </div>
      </div>
    </div>
  );
}