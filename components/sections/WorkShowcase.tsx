"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Instagram, Youtube } from "lucide-react";

const works = [
  {
    id: 1,
    title: "Market it!",
    brand: "At8",
    tags: ["Social Media", "Marketing"],
    thumbnail:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    platform: "instagram",
    videoId: "DQYikc9AY2Y",
    views: "600+",
    originalUrl: "https://www.instagram.com/p/DQYikc9AY2Y/",
  },
  {
    id: 2,
    title: "Misal ad",
    brand: "Katakirrr",
    tags: ["Food & Beverage", "Local Business"],
    thumbnail:
      "https://imgs.search.brave.com/HyefZUzHfQFgnuvpZN9lmJvvij8xFz91aObpLc3L80c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/cHVuZS9jOS8wMjBw/eHgyMC54eDIwLjE3/MDExMzAwMDQxOC51/N2M5L2NhdGFsb2d1/ZS9rYXRhLWtpcnIt/ZXJhbmR3YW5lLXB1/bmUtcmVzdGF1cmFu/dHMtMTFhdnE2OS5q/cGc_dz0zODQwJnE9/NzU",
    platform: "instagram",
    videoId: "DQjvb8ID_Lj",
    views: "600+",
    originalUrl: "https://www.instagram.com/p/DQjvb8ID_Lj/",
  },
  {
    id: 3,
    title: "Find your wild!",
    brand: "Wild Stone",
    tags: ["Product Ads", "Beauty & Personal Care", "Brand Campaign"],
    thumbnail:
      "https://imgs.search.brave.com/JMsVqb5eKOAKFvuLzd3gm0WfE__GKS4jXkgxo6C9mLM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lsZHN0b25lLmlu/L2Nkbi9zaG9wL2Zp/bGVzL0FydGJvYXJk/XzVfNGM1NTJjZmQt/ZTAwZC00MDQ4LTk5/MzQtY2E3YjM4NTEz/M2M2XzE0NDV4Lmpw/Zz92PTE3MjMxMDE3/MzA",
    platform: "instagram",
    videoId: "DQb0YwKjK6Y",
    views: "500+",
    originalUrl: "https://www.instagram.com/p/DQb0YwKjK6Y/",
  },
  // {
  //   id: 4,
  //   title: "Food Brand Story",
  //   brand: "TasteWave",
  //   category: "Brand Films",
  //   thumbnail:
  //     "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   platform: "youtube",
  //   videoId: "M7lc1UVf-VE",
  //   views: "3.2M",
  //   originalUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
  // },
  // {
  //   id: 5,
  //   title: "Fitness App Promo",
  //   brand: "FitLife",
  //   category: "Reels",
  //   thumbnail:
  //     "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   platform: "instagram",
  //   videoId: "C9876543210",
  //   views: "1.5M",
  //   originalUrl: "https://www.instagram.com/reel/C9876543210/",
  // },
  // {
  //   id: 6,
  //   title: "Luxury Watch Ad",
  //   brand: "TimeElite",
  //   category: "Product Ads",
  //   thumbnail:
  //     "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   platform: "youtube",
  //   videoId: "JGwWNGJdvx8",
  //   views: "2.1M",
  //   originalUrl: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
  // },
];

// Get all unique tags from works and create categories
const getAllTags = () => {
  const allTags = works.flatMap((work) => work.tags);
  const uniqueTags = Array.from(new Set(allTags));
  return ["All", ...uniqueTags.sort()];
};

const categories = getAllTags();

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.tags.includes(activeCategory));

  const handleVideoPlay = (workId: number) => {
    setPlayingVideo(playingVideo === workId ? null : workId);
  };

  const renderVideoPlayer = (work: any) => {
    if (playingVideo !== work.id) {
      return (
        <div
          className="relative aspect-[9/16] overflow-hidden cursor-pointer"
          onClick={() => handleVideoPlay(work.id)}
        >
          <Image
            src={work.thumbnail}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#00BFFF] flex items-center justify-center glow-blue">
              {work.platform === "youtube" ? (
                <Youtube className="w-8 h-8 text-black fill-black" />
              ) : (
                <Instagram className="w-8 h-8 text-black fill-black" />
              )}
            </div>
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#00BFFF]/90 text-black text-xs font-semibold">
            {work.views} views
          </div>
        </div>
      );
    }

    // Render embedded player when playing
    if (work.platform === "youtube") {
      return (
        <div className="relative aspect-[9/16] overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${work.videoId}?autoplay=1&mute=1&controls=1`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 z-10"
          >
            ×
          </button>
          <div className="absolute top-4 right-12 px-3 py-1 rounded-full bg-[#00BFFF]/90 text-black text-xs font-semibold">
            {work.views} views
          </div>
        </div>
      );
    }

    if (work.platform === "instagram") {
      return (
        <div className="relative aspect-[9/16] overflow-hidden">
          <iframe
            src={`https://www.instagram.com/p/${work.videoId}/embed/`}
            className="w-full h-full"
            allowFullScreen
          />
          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 z-10"
          >
            ×
          </button>
          <div className="absolute top-4 right-12 px-3 py-1 rounded-full bg-[#00BFFF]/90 text-black text-xs font-semibold">
            {work.views} views
          </div>
        </div>
      );
    }
  };

  return (
    <section id="work" className="relative py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-gradient-blue">Creative Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Scroll-stopping content that drives views and conversions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#00BFFF] text-black glow-blue"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <div
              key={work.id}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#00BFFF]/50 transition-all duration-300 hover:scale-105 hover:glow-blue"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {renderVideoPlayer(work)}

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{work.brand}</p>
                  </div>
                  <a
                    href={work.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 group-hover:text-[#00BFFF] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-3 mb-3">
                  <a
                    href={work.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs font-medium hover:scale-105 transition-transform ${
                      work.platform === "youtube"
                        ? "bg-red-600"
                        : "bg-gradient-to-r from-purple-500 to-pink-500"
                    }`}
                  >
                    {work.platform === "youtube" ? (
                      <>
                        <Youtube className="w-3 h-3" />
                        YouTube
                      </>
                    ) : (
                      <>
                        <Instagram className="w-3 h-3" />
                        Instagram
                      </>
                    )}
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10 hover:bg-[#00BFFF]/10 hover:border-[#00BFFF]/30 hover:text-[#00BFFF] transition-all duration-200 cursor-pointer"
                      onClick={() => setActiveCategory(tag)}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#1E90FF] text-black font-semibold hover:scale-105 transition-all duration-300 glow-blue"
            onClick={() => {
              document.getElementById("socials")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
