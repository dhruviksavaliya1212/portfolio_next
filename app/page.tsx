import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Journey from "@/components/about/Journey";
import TechStack from "@/components/about/TechStack";
import Interests from "@/components/about/Interests";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <TechStack />
      <Interests />
      <Projects />
      <Contact />
      {/* <div className="h-[500px] bg-red-500"></div> */}
      {/* Other sections will be added in next steps */}
    </main>
  );
}
