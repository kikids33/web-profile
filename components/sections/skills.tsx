'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Node.js', level: 85 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'Framer Motion', level: 85 },
  { name: 'GraphQL', level: 75 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Skills &amp; Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-blue-400 font-bold">{skill.level}%</span>
              </div>
              
              {/* Skill bar with animation */}
              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Frontend',
              tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            },
            {
              title: 'Backend',
              tech: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
            },
            {
              title: 'Tools &amp; DevOps',
              tech: ['Git', 'Docker', 'Vercel', 'GitHub', 'VS Code'],
            },
          ].map((category) => (
            <motion.div
              key={category.title}
              className="p-6 glass-effect rounded-xl"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category.title}</h3>
              <ul className="space-y-2">
                {category.tech.map((t) => (
                  <li key={t} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
