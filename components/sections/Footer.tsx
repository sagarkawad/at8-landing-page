"use client";

import {
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import at8Logo from "@/lib/at8_logo.png";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative pt-20 pb-8 px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src={at8Logo}
                alt="At8 Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              We surely are at our early stage but we are confident enough that
              we are going to get higher. We love what we do and we are going to
              do it whole-heartedly. So it&apos;s not just about the numbers!
            </p>
            <div className="flex gap-4 mt-6">
              {[
                {
                  icon: Instagram,
                  url: "https://www.instagram.com/at8________/",
                  hover: "hover:text-pink-500",
                },
                {
                  icon: Youtube,
                  url: "https://www.youtube.com/@ateightmedia",
                  hover: "hover:text-red-500",
                },
                {
                  icon: Linkedin,
                  url: "https://www.linkedin.com/company/ateight/?viewAsMember=true",
                  hover: "hover:text-blue-500",
                },
                {
                  icon: () => (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  url: "https://x.com/at8________",
                  hover: "hover:text-white",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.hover}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Work", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#00BFFF] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                "Instagram Reels",
                "YouTube Shorts",
                "X Posts",
                "LinkedIn Posts",
                "Social Media Ads",
                "Content Management",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00BFFF] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@at8.agency"
                  className="text-gray-400 hover:text-[#00BFFF] transition-colors"
                >
                  ateightmedia@gmail.com
                </a>
              </li>
              {/* <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00BFFF] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-[#00BFFF] transition-colors"
                >
                  +91 7030458738
                </a>
              </li> */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00BFFF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 At8 Media. All Rights Reserved.
          </p>
          {/* <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-[#00BFFF] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#00BFFF] transition-colors"
            >
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent opacity-50" />
    </footer>
  );
}
