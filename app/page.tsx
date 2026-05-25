import { Navbar } from '@/components/sections/navbar';
import { AnimatedBackground } from '@/components/animated-background';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { Portfolio } from '@/components/sections/portfolio';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
