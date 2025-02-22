"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Banner: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 text-center flex flex-col items-center">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to <span className="text-blue-600 dark:text-blue-400">Book-Club</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mt-3 max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Discover your next favorite book and explore a world of knowledge.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Button className="px-6 py-6 text-lg font-semibold" variant="destructive">
          Browse Books
        </Button>
      </motion.div>
    </div>
  );
};

export default Banner;
