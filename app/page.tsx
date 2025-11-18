import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <div className="h-[500px] bg-red-500"></div>
      {/* Other sections will be added in next steps */}
    </main>
  );
}
