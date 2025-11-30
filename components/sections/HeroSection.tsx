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
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight text-center">
            <div className="whitespace-normal md:whitespace-nowrap">
              We create
            </div>
            <div className="relative inline-block mt-2">
              <span className="text-gradient-blue whitespace-normal md:whitespace-nowrap">
                visuals and tech
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00BFFF] to-[#1E90FF] blur-sm" />
            </div>
            <div className="whitespace-normal md:whitespace-nowrap mt-2">
              that your business needs!
            </div>
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto  leading-relaxed">
            {/* From logo design to websites, mobile apps, and content creation
            (static posts, reels, shorts, long-form videos etc.) — we do it all.
            And not just that — we also run ad campaigns to help you grow. */}
            We do video creation and websites that creates brand identity!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeSgj3HNE3s1hAOrX4eFmj7L0gIDj8ssz-K0QJVmbB8zqsoCQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#00BFFF] hover:bg-[#1E90FF] text-black font-semibold px-8 py-6 text-lg rounded-full glow-blue transition-all duration-300 hover:scale-105 group"
            >
              Contact Us
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: "🎬",
              title: "High-Converting Videos",
              description: "Visuals that create brand identity.",
            },
            {
              icon: "📱",
              title: "Website Magic",
              description: "Websites that work their magic.",
            },
            {
              icon: "🚀",
              title: "Tech that Scales",
              description: "High quality tech that your business needs.",
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
