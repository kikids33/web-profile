'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const education = [
  {
    institution: 'Universitas Insan Pembangunan Indonesia',
    degree: 'software engineering',
    year: '2023 - 2027',
    details: ' Focus on Web Development and Software Engineering',
  },
  {
    institution: 'Smk Muhammadiyah 2 Ajibarang',
    degree: 'Teknik Pemesinan',
    year: '2019 - 2022',
    details: 'mempelajari teknik pemesinan, termasuk penggunaan mesin CNC dan pemrograman G-code',
  },
  {
    institution: 'Smp negri 1 Pekuncen',
    year: '2016 - 2019',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function Education() {
  return (
    <section className="py-20 relative overflow-hidden">
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
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              className="p-6 glass-effect rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Award size={24} className="text-white" />
                  </motion.div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-blue-400 font-semibold">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                  <p className="text-muted-foreground leading-relaxed">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
