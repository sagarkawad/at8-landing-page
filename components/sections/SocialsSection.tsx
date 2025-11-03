"use client";

import { Instagram, Youtube, Linkedin } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "#",
    color: "hover:text-pink-500",
    glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "#",
    color: "hover:text-red-500",
    glow: "hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "#",
    color: "hover:text-blue-500",
    glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]",
  },
  {
    name: "X",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    url: "#",
    color: "hover:text-white",
    glow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]",
  },
];

export default function SocialsSection() {
  return (
    <section id="socials" className="relative py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Follow Our <span className="text-gradient-blue">Journey</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          See our creative magic in action
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color} ${social.glow}`}
                aria-label={social.name}
              >
                <Icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-16 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#00BFFF]/20 to-[#1E90FF]/20 border border-[#00BFFF]/30">
          <p className="text-[#00BFFF] font-medium">
            Join 10K+ followers staying inspired
          </p>
        </div>
      </div>
    </section>
  );
}
