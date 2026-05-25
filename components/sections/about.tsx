'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Zap } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing scalable, maintainable code with best practices and modern design patterns.',
    },
    {
      icon: Palette,
      title: 'Design Focused',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency, ensuring lightning-fast user experiences.',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Perkenalkan, saya Mohammad Rizki Dwi Saputra, lulusan Universitas Insan Pembangunan Indonesia jurusan Software Engineering,
              yang ingin menjadi seorang full-stack developer yang bersemangat dalam menciptakan solusi digital yang inovatif dan berdampak.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Membangun pengalaman digital yang modern, elegan, dan fungsional adalah passion saya. 
              Saya memiliki ketertarikan besar dalam pengembangan website serta desain antarmuka yang bersih, interaktif, dan berorientasi pada pengalaman pengguna.
              Dengan kombinasi kreativitas dan teknologi, saya terus berusaha menghadirkan karya yang tidak hanya indah dipandang,
              tetapi juga memiliki nilai dan fungsi yang maksimal.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Saya percaya bahwa teknologi memiliki kekuatan untuk mengubah dunia, dan saya berkomitmen untuk terus belajar dan berkembang dalam bidang ini.
            </motion.p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="p-6 glass-effect rounded-xl hover:bg-white/15 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <Icon className="w-8 h-8 mb-3 text-blue-400" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
