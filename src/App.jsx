import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Timeline from "./components/Timeline";
import Projects from "./Projects";
import ParticlesBg from "./components/ParticlesBg";  

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">

      {/* Particles layer */}
      <ParticlesBg />

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Timeline />
        <Projects />
      </div>

    </div>
  );
}

export default App;