import { useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern animated portfolio using React & Tailwind.",
    tech: "React, Tailwind",
    github: "#",
    live: "#",
  },
  {
    title: "Blockchain App",
    desc: "Decentralized app with smart contract integration.",
    tech: "Solidity, Web3",
    github: "#",
    live: "#",
  },
  {
    title: "DSA Visualizer",
    desc: "Interactive visualization of algorithms.",
    tech: "JS, D3",
    github: "#",
    live: "#",
  },
];

//Card Function
function Card({ p, onClick }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * 10;
    const rotateY = ((midX - x) / midX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
      }}
      className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg transition-transform duration-200  cursor-pointer"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-20 blur-xl transition"></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
        <p className="text-gray-400 mb-4">{p.desc}</p>
        <p className="text-sm text-purple-400 mb-6">{p.tech}</p>

        <div className="flex gap-4">
          <a href={p.github} className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">
            GitHub
          </a>
          <a href={p.live} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

//Project function
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen px-6 py-20 bg-black text-white">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <Card key={i} p={p} onClick={() => setSelected(p)} />
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="bg-zinc-900 p-8 rounded-2xl max-w-lg w-full relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 text-xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-4">{selected.title}</h2>

            <p className="text-gray-400 mb-4">{selected.desc}</p>

            <p className="text-purple-400 mb-6">{selected.tech}</p>

            <div className="flex gap-4">
              <a href={selected.github} className="px-4 py-2 bg-white/10 rounded-lg">
                GitHub
              </a>

              <a href={selected.live} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                Live
              </a>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}