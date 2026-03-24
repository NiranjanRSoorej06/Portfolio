import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Timeline from "./components/Timeline";
import Projects from "./Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <Timeline />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;