import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
            number: { value: 60 },

            color: { value: "#ffffff" },   // 👈 ADD THIS

            size: { value: 2 },

            move: { enable: true, speed: 1 },

            opacity: { value: 0.5 },

            links: {                      // 👈 OPTIONAL (looks cool)
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.2,
            },
        },
        }}
        className="fixed inset-0 z-0"    
    />
  );
}