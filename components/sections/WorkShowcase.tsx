"use client";

import { useState, useRef } from "react";
import { Play, Pause, ExternalLink, Instagram, Youtube } from "lucide-react";

const categories = ["All", "Reels", "Product Ads", "Corporate", "Brand Films"];

const works = [
  {
    id: 1,
    title: "Tech Product Launch",
    brand: "TechCo",
    category: "Product Ads",
    thumbnail:
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    views: "2.5M",
    instagramUrl: "https://www.instagram.com/p/tech-product-launch/",
    youtubeUrl: "https://www.youtube.com/watch?v=tech-product-demo",
  },
  {
    id: 2,
    title: "Fashion Brand Reel",
    brand: "StyleHub",
    category: "Reels",
    thumbnail:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    views: "1.8M",
    instagramUrl: "https://www.instagram.com/reel/fashion-brand-reel/",
    youtubeUrl: "https://www.youtube.com/shorts/fashion-short",
  },
  {
    id: 3,
    title: "Corporate Culture",
    brand: "InnovateCorp",
    category: "Corporate",
    thumbnail:
      "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    views: "890K",
    youtubeUrl: "https://www.youtube.com/watch?v=corporate-culture",
  },
  {
    id: 4,
    title: "Food Brand Story",
    brand: "TasteWave",
    category: "Brand Films",
    thumbnail:
      "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    views: "3.2M",
    instagramUrl: "https://www.instagram.com/p/food-brand-story/",
    youtubeUrl: "https://www.youtube.com/watch?v=food-brand-film",
  },
  {
    id: 5,
    title: "Fitness App Promo",
    brand: "FitLife",
    category: "Reels",
    thumbnail:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    views: "1.5M",
    instagramUrl: "https://www.instagram.com/reel/fitness-app-promo/",
  },
  {
    id: 6,
    title: "Luxury Watch Ad",
    brand: "TimeElite",
    category: "Product Ads",
    thumbnail:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    views: "2.1M",
    youtubeUrl: "https://www.youtube.com/watch?v=luxury-watch-ad",
  },
];

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  const handleVideoPlay = (workId: number) => {
    // Pause all other videos
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (video && parseInt(id) !== workId) {
        video.pause();
      }
    });

    const video = videoRefs.current[workId];
    if (video) {
      if (playingVideo === workId) {
        video.pause();
        setPlayingVideo(null);
      } else {
        video.play();
        setPlayingVideo(workId);
      }
    }
  };

  const handleVideoEnd = (workId: number) => {
    setPlayingVideo(null);
  };

  return (
    <section id="work" className="relative py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-gradient-blue">Creative Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Scroll-stopping content that drives millions of views and
            conversions
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
              <div className="relative aspect-[9/16] overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[work.id] = el)}
                  src={work.videoUrl}
                  poster={work.thumbnail}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loop
                  playsInline
                  onEnded={() => handleVideoEnd(work.id)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300"
                  onClick={() => handleVideoPlay(work.id)}
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-[#00BFFF] flex items-center justify-center glow-blue transition-opacity duration-300 ${
                      playingVideo === work.id
                        ? "opacity-0"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {playingVideo === work.id ? (
                      <Pause className="w-8 h-8 text-black fill-black" />
                    ) : (
                      <Play className="w-8 h-8 text-black fill-black" />
                    )}
                  </div>
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#00BFFF]/90 text-black text-xs font-semibold">
                  {work.views} views
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-[#00BFFF] transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{work.brand}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#00BFFF] transition-colors" />
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-3 mb-3">
                  {work.instagramUrl && (
                    <a
                      href={work.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium hover:scale-105 transition-transform"
                    >
                      <Instagram className="w-3 h-3" />
                      Instagram
                    </a>
                  )}
                  {work.youtubeUrl && (
                    <a
                      href={work.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-medium hover:scale-105 transition-transform"
                    >
                      <Youtube className="w-3 h-3" />
                      YouTube
                    </a>
                  )}
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10">
                  {work.category}
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
