import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
            Niranjan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg text-gray-400 max-w-xl"
        >
          I build modern, interactive web experiences with clean UI and smooth animations.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
        >
          View My Work
        </motion.button>

      </section>

    </div>
  );
}

export default App;