"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does At8 offer?",
    answer:
      "At8 specializes in creating high-conversion short-form video content including Instagram Reels, YouTube Shorts, TikTok videos, and paid ad campaigns. We also offer full social media management, content scheduling, and ad campaign optimization across all major platforms.",
  },
  {
    question: "Do you only create short-form videos?",
    answer:
      "We currently only create short-form content or static posts but we are open to new formats and their execution.",
  },
  {
    question: "Do you handle posting and ad campaigns?",
    answer:
      "Absolutely! We offer end-to-end social media management including content creation, scheduling, posting, community engagement, and running paid advertising campaigns across Instagram, Facebook, TikTok, YouTube, and LinkedIn.",
  },
  {
    question: "How much do you charge per video/ad?",
    answer:
      "Our pricing varies based on project scope, video length, complexity, and deliverables. We offer custom packages starting from single videos to monthly retainers for ongoing content. Contact us for a personalized quote tailored to your needs.",
  },
  {
    question: "How can I work with At8?",
    answer:
      "Getting started is easy! Simply reach out by booking a call, email, or social media. We'll understand about your brand, goals, and vision. From there, we'll create a custom proposal and timeline for your project.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-blue">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about working with At8
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/10 rounded-2xl px-6 bg-white/5 hover:bg-white/10 hover:border-[#00BFFF]/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#00BFFF] transition-colors hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-[#00BFFF]/10 to-[#1E90FF]/10 border border-[#00BFFF]/30">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-6">
            We're here to help! Get in touch with our team.
          </p>
          <a href="mailto:ateightmedia@gmail.com" className="inline-block">
            <button className="px-8 py-4 rounded-full bg-[#00BFFF] text-black font-semibold hover:bg-[#1E90FF] transition-all duration-300 hover:scale-105 glow-blue">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
