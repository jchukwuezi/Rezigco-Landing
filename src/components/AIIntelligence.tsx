"use client";

import React from "react";
import { ShinyButton } from "@/registry/magicui/shiny-button";
import { motion } from "framer-motion";

export default function AIIntelligence() {
  return (
    <section className="bg-white py-16 font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-10"
          >
            Ziggy's AI intelligence works as an <span className="text-[#922ea4] whitespace-nowrap">extension of you or your team,</span> learning from your workflow and materials to respond, organize, and retrieve what matters. Your leads, data, and documents <span className="text-[#922ea4] whitespace-nowrap">become smarter,</span> helping you broker more deals and build a <span className="text-[#922ea4] whitespace-nowrap">powerhouse real estate brand.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center items-center mt-8"
          >
            <div className="max-w-[200px] w-full">
              <ShinyButton 
                className="font-bricolage text-base uppercase tracking-wider font-bold"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                onClick={() => window.location.href = '/demo'}
              >
                GET STARTED
              </ShinyButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 