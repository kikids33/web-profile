'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2xl shadow-blue-500/50 animate-float"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <div className="w-40 h-40 rounded-3xl overflow-hidden border-4 border-blue-500 shadow-[0_0_40px_#3b82f6]">
         <img
         src="/foto-saya.jpg"
         alt="Profile"
         className="w-full h-full object-cover"
  />
</div>
          </motion.div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          className="text-blue-400 font-semibold text-lg mb-4"
          variants={itemVariants}
        >
          Welcome to my portfolio
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Full-Stack Developer
          </span>
          <br />
          <span className="text-foreground">Building the Future</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Saya menciptakan pengalaman web yang indah dan berkinerja tinggi dengan teknologi modern.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="#portfolio"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-lg glass-effect text-foreground font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* CV Download */}
        <motion.div
          className="mt-12"
          variants={itemVariants}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition-colors group"
            whileHover={{ x: 5 }}
          >
            <Download size={20} />
            <span>Download CV</span>
            <motion.span
              className="group-hover:translate-x-1 transition-transform"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
}
