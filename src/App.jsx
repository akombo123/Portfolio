import { Hero } from "@/sections/Hero";
import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Expirience } from "@/sections/Expirience";
import { Testimonials } from "@/sections/Testimonials";
import { Contacts } from "@/sections/Contacts";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Expirience />
        <Testimonials />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
