'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'memories moment',
    description: 'A full-featured e-commerce platform with real-time inventory management and payment integration.',
    technologies: ['Next.js', 'React', , 'Stripe'],
    link: 'https://memories-moment.vercel.app/',
    github: 'https://github.com/memories-moment',
    image: 'bg-gradient-to-br from-blue-600 to-cyan-600',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    technologies: ['React', 'Firebase', 'Tailwind', 'Framer Motion'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-purple-600 to-pink-600',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with interactive charts and real-time data updates.',
    technologies: ['Next.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-green-600 to-blue-600',
  },
  {
    title: 'Social Media Clone',
    description: 'Full-featured social media platform with user authentication and real-time messaging.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-orange-600 to-red-600',
  },
  {
    title: 'AI Chat Application',
    description: 'AI-powered chatbot with natural language processing and context awareness.',
    technologies: ['Next.js', 'OpenAI API', 'Tailwind', 'TypeScript'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-indigo-600 to-purple-600',
  },
  {
    title: 'Portfolio Website',
    description: 'This beautiful portfolio website built with modern technologies and animations.',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'Vercel'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-cyan-600 to-blue-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              variants={itemVariants}
            >
              {/* Card Container */}
              <motion.div
                className="relative h-full rounded-xl overflow-hidden glass-effect p-6 flex flex-col hover:bg-white/20 transition-all"
                whileHover={{ y: -10 }}
              >
                {/* Project Image Placeholder */}
                <motion.div
                  className={`w-full h-40 rounded-lg mb-4 ${project.image} opacity-30 group-hover:opacity-50 transition-opacity`}
                  whileHover={{ scale: 1.05 }}
                />

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-blue-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <motion.a
                    href={project.link}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/40 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Visit
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-purple-600/20 text-purple-400 hover:bg-purple-600/40 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
