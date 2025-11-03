"use client";

import { CheckCircle, Users, Target, Zap } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { number: "500+", label: "Campaigns Created" },
    { number: "50M+", label: "Views Generated" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3x", label: "Average ROI Increase" },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-[#00BFFF]" />,
      title: "Results-Driven",
      description: "Every campaign is designed with conversion and engagement in mind",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#00BFFF]" />,
      title: "Lightning Fast",
      description: "Quick turnaround times without compromising on quality",
    },
    {
      icon: <Users className="h-8 w-8 text-[#00BFFF]" />,
      title: "Expert Team",
      description: "Seasoned creators who understand viral content and brand messaging",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#00BFFF]" />,
      title: "Proven Process",
      description: "Our systematic approach ensures consistent, high-quality results",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About{" "}
            <span className="text-gradient-blue">At8</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We're a team of creative strategists, content creators, and marketing experts 
            who specialize in crafting scroll-stopping short-form content that drives real results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00BFFF]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient-blue">Story</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Founded by a team of digital marketing veterans and creative minds, At8 was born 
              from the frustration of seeing brands struggle with short-form content that just 
              doesn't convert.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              We realized that creating viral content isn't just about being creative—it's about 
              understanding psychology, platform algorithms, and most importantly, your audience's 
              deepest desires and pain points.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Today, we've helped hundreds of brands transform their social media presence and 
              achieve unprecedented growth through strategic, data-driven short-form content.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#00BFFF]/20 to-[#1E90FF]/10 border border-[#00BFFF]/30 flex items-center justify-center">
              <div className="text-6xl md:text-8xl font-bold text-gradient-blue opacity-50">
                At8
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-gradient-blue">At8</span>?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00BFFF]/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-[#00BFFF] transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
