'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const experiences = [
  {
    company: 'PT Cipta Perdana Lancar Tbk',
    role: 'Machining Engineer',
    period: '2024 - Present',
    description: 'pembuatan program mesin cnc dan mengoprasikan mesin cnc, miling,bor,tapping untuk memproduksi komponen presisi tinggi. Bekerja sama dengan tim produksi untuk meningkatkan efisiensi dan kualitas produk.',
    highlights: ['Pemrograman CNC', 'Pengoperasian Mesin', 'Peningkatan Proses', 'Kolaborasi Tim'],
  },
  {
    company: 'PT Cometa Can',
    role: 'workshop',
    period: '2022 - 2024',
    description: 'Supporting produksi.',
    highlights: ['Pemeliharaan Mesin', 'Pengawasan Kualitas', 'Peningkatan Proses', 'Kerja Tim'],
  },

];

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

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -translate-x-8 border-4 border-background" />
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-16 w-0.5 h-32 bg-gradient-to-b from-blue-500/50 to-purple-500/50 -translate-x-7" />
              )}

              {/* Content */}
              <motion.div
                className="p-6 glass-effect rounded-xl hover:bg-white/15 transition-all"
                whileHover={{ x: 10 }}
              >
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-blue-400 font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <motion.div
                      key={highlight}
                      className="flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full text-sm text-blue-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      <CheckCircle size={14} />
                      {highlight}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
