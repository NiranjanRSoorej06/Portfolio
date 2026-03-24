import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Timeline from "./components/Timeline";
import Projects from "./Projects";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <Timeline />
        <Projects />
    </div>
  );
}

export default App;