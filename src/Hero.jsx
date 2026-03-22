import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile1 from "./assets/Profile-pic.jpeg";
import profile2 from "./assets/Profile-pic-2.jpeg";
import profile3 from "./assets/Profile-pic-3.jpeg";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activeSlide, setActiveSlide] = useState(0);
  const profileImages = [profile1, profile2, profile3];

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % profileImages.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [profileImages.length]);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-12 overflow-hidden pt-20 md:pt-0">
      {/* CURSOR GLOW */}
      <div
        className="pointer-events-none fixed w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        style={{
          left: mouse.x - 150,
          top: mouse.y - 150,
        }}
      />

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 z-10 text-center md:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p className="text-purple-400 font-semibold text-lg mb-3">Welcome to my portfolio</p>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              Niranjan
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-gray-300 mb-4 leading-relaxed"
        >
          Full Stack Developer | UI Enthusiast | Problem Solver
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-400 max-w-md text-lg mb-8"
        >
          I transform ideas into beautiful, interactive web experiences with React, Node.js, and modern technologies. Always learning, always building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-4 justify-center md:justify-start"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border-2 border-purple-400 text-purple-300 font-semibold hover:bg-purple-500/10 transition-colors"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-8 mt-12 justify-center md:justify-start"
        >
          <div>
            <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              8+
            </p>
            <p className="text-gray-400 text-sm">Phases of Growth</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              100%
            </p>
            <p className="text-gray-400 text-sm">Passion Driven</p>
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex items-center justify-center"
      >
        {/* GLOW BEHIND */}
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20 rounded-full"></div>

        {/* IMAGE CONTAINER */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={profileImages[activeSlide]}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              <motion.img
                src={profileImages[activeSlide]}
                alt="profile"
                initial={{ opacity: 0, scale: 0.98, y: 8, filter: "blur(2px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.01, y: -8, filter: "blur(2px)" }}
                transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full h-full object-cover rounded-2xl border-4 border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.5)]"
              />

              <motion.div
                className="pointer-events-none absolute inset-0 z-20 rounded-2xl bg-gradient-to-tr from-white/5 via-transparent to-purple-200/10"
                animate={{ opacity: [0.08, 0.16, 0.08] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute z-20 -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {profileImages.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? "w-8 bg-white/90"
                    : "w-3 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Decorative corners */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-purple-500 rounded-tl-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-pink-500 rounded-br-lg"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}