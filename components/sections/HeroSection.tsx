"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden pt-16"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 191, 255, 0.08), transparent 40%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center flex-1 flex flex-col justify-center">
        <div className="mb-8 mt-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight">
            We Create{" "}
            <span className="relative inline-block">
              <span className="text-gradient-blue">Scroll-Stopping</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00BFFF] to-[#1E90FF] blur-sm" />
            </span>
            <br />
            Short-Form Ads
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto  leading-relaxed">
            At8 helps brands go viral with high-conversion reels, shorts, and
            content ads that captivate audiences and drive results
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://calendar.app.google/mAjQDgh176jeHbkz6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#00BFFF] hover:bg-[#1E90FF] text-black font-semibold px-8 py-6 text-lg rounded-full glow-blue transition-all duration-300 hover:scale-105 group"
            >
              Book a call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          <Button
            size="lg"
            variant="outline"
            className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-black font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 group"
            onClick={() => {
              document.getElementById("work")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View Our Work
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: "🎬",
              title: "High-Converting Ads",
              description: "Reels & Shorts that drive sales",
            },
            {
              icon: "📱",
              title: "Social Media Magic",
              description: "Content & management done right",
            },
            {
              icon: "🚀",
              title: "Viral Growth",
              description: "Campaigns that scale brands",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00BFFF]/50 transition-all duration-300 hover:scale-105 hover:glow-blue"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[#00BFFF] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex justify-center animate-bounce">
          <ChevronDown className="h-5 w-5 text-[#00BFFF]" />
        </div>
      </div>
    </section>
  );
}
