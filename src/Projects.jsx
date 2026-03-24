import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern animated portfolio using React & Tailwind.",
    tech: "React, Tailwind",
    category: "Frontend",
    github: "#",
    live: "#",
  },
  {
    title: "Blockchain App",
    desc: "Decentralized app with smart contract integration.",
    tech: "Solidity, Web3",
    category: "Web3",
    github: "#",
    live: "#",
  },
  {
    title: "DSA Visualizer",
    desc: "Interactive visualization of algorithms.",
    tech: "JS, D3",
    category: "Algorithms",
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
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg transition-transform duration-200 cursor-pointer"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-fuchsia-500/20 to-pink-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="absolute -inset-px rounded-2xl border border-fuchsia-400/0 group-hover:border-fuchsia-300/30 transition duration-300" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] md:text-xs uppercase tracking-wider text-fuchsia-300/90 bg-fuchsia-500/10 border border-fuchsia-400/20 rounded-full px-2.5 py-1">
            {p.category}
          </span>
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white/95">{p.title}</h3>
        <p className="text-gray-300/85 mb-4 leading-relaxed">{p.desc}</p>
        <p className="text-sm text-purple-300 mb-6">{p.tech}</p>

        <div className="flex gap-4">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
          >
            GitHub
          </a>
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:brightness-110 transition"
          >
            Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

//Project function
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative min-h-screen px-6 py-24 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 text-center mb-14 md:mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          My <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Projects</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Crafted to learn fast, ship faster, and keep things visually sharp.
        </p>
      </div>

      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <Card key={i} p={p} onClick={() => setSelected(p)} />
        ))}

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-zinc-900/95 border border-white/10 p-8 rounded-2xl max-w-lg w-full relative"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-xl"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold mb-4 text-white">{selected.title}</h2>

              <p className="text-gray-300 mb-4 leading-relaxed">{selected.desc}</p>

              <p className="text-purple-300 mb-6">{selected.tech}</p>

              <div className="flex gap-4">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
                >
                  GitHub
                </a>

                <a
                  href={selected.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:brightness-110 transition"
                >
                  Live
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}