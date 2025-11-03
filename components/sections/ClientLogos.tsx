"use client";

import {
  Zap,
  ShoppingBag,
  Smartphone,
  Heart,
  Coffee,
  Sparkles,
} from "lucide-react";

const clients = [
  // { name: 'TechCo', icon: Zap, color: 'text-blue-400' },
  // { name: 'StyleHub', icon: ShoppingBag, color: 'text-pink-400' },
  // { name: 'AppWave', icon: Smartphone, color: 'text-green-400' },
  { name: "Aabha Productions", icon: Zap, color: "text-blue-400" },
  { name: "Belyno Cycles", icon: Heart, color: "text-red-400" },
  // { name: "BrewMaster", icon: Coffee, color: "text-amber-400" },
  // { name: "LuxeBrand", icon: Sparkles, color: "text-purple-400" },
];

export default function ClientLogos() {
  return (
    <section className="relative py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Brands{" "}
            <span className="text-gradient-blue">That Lead</span>
          </h2>
          <p className="text-xl text-gray-400">
            We partner with industry leaders to create exceptional content
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={client.name}
                className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00BFFF]/50 transition-all duration-300 hover:scale-110 hover:glow-blue cursor-pointer w-48"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon
                  className={`w-12 h-12 mb-4 ${client.color} group-hover:scale-110 transition-transform duration-300`}
                />
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {client.name}
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00BFFF]/0 to-[#00BFFF]/0 group-hover:from-[#00BFFF]/10 group-hover:to-[#1E90FF]/10 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10">
            <div className="flex -space-x-2">
              {[
                { emoji: "🚀", bg: "from-blue-500 to-purple-600" },
                { emoji: "🎨", bg: "from-pink-500 to-red-500" },
                { emoji: "⚡", bg: "from-yellow-500 to-orange-500" },
                { emoji: "🎯", bg: "from-green-500 to-teal-500" },
              ].map((client, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${client.bg} border-2 border-black flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                >
                  {client.emoji}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">2+ Happy Clients</p>
              <p className="text-gray-400 text-sm">And counting...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
