import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold tracking-wide">
          Niranjan
        </h1>

        <div className="space-x-6 text-sm">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Projects</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>

      </div>
    </motion.nav>
  );
}