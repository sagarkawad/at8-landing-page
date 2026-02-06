"use client";

import {
  Video,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
  Target,
  Camera,
  Edit3,
  Globe,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: <Video className="h-8 w-8 text-[#00BFFF]" />,
      title: "Creative Video Edit",
      description:
        "Engaging reels, shorts, and long-form videos that creates a brand identity and drive action",
      features: [
        "15-60 seconds + long-form videos",
        "Platform optimization",
        "Viral content strategy",
        "Trending audio integration",
      ],
    },
    {
      icon: <Globe className="h-8 w-8 text-[#00BFFF]" />,
      title: "Web Development / App Development",
      description:
        "Custom fullstack websites / apps or automation scripts that leverages your business",
      features: [
        "Responsive web development",
        "Custom development",
        "SEO optimization",
        "Performance optimization",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We dive deep into your brand, audience, and goals to create a tailored strategy",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Our team develops a comprehensive content plan designed for maximum impact",
    },
    {
      number: "03",
      title: "Creation",
      description:
        "We produce high-quality content that aligns with your brand and resonates with your audience",
    },
    {
      number: "04",
      title: "Optimization",
      description:
        "We continuously analyze performance and refine our approach for better results",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient-blue">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            From concept to execution, we offer comprehensive solutions to
            elevate your brand&apos;s presence and drive real business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00BFFF]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-[#00BFFF]/10 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-[#00BFFF] transition-colors">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:ateightmedia@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-[#00BFFF]/30 text-[#00BFFF] hover:bg-[#00BFFF] hover:text-black transition-all duration-300"
                >
                  Learn More
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-blue">Process</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We follow a proven methodology that ensures every project delivers
              exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#00BFFF] to-[#1E90FF] flex items-center justify-center text-black font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#00BFFF] to-transparent" />
                  )}
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-[#00BFFF] transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-[#00BFFF]/10 to-transparent border border-[#00BFFF]/20 rounded-2xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-gradient-blue">Get Started</span>?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a custom strategy that
            drives real results for your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeSgj3HNE3s1hAOrX4eFmj7L0gIDj8ssz-K0QJVmbB8zqsoCQ/viewform"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-[#00BFFF] hover:bg-[#1E90FF] text-black font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </Button>
            </a>
            {/* <a
              href="https://calendar.app.google/mAjQDgh176jeHbkz6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-black font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                Schedule a Call
              </Button>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
