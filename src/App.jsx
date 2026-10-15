import { Hero } from "@/sections/Hero";
import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Expirience } from "@/sections/Expirience";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Expirience />
      </main>
    </div>
  );
}

export default App;
