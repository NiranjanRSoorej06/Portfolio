import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-16 -translate-x-1/2 h-56 w-56 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Let’s <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Connect</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Open to collaborations, cool ideas, and building something meaningful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-3 text-white/95">Contact Details</h3>
            <p className="text-gray-300/85 leading-relaxed mb-6">
              Have an idea or opportunity? Reach out and I’ll get back to you.
            </p>

            <div className="space-y-4 text-sm md:text-base">
              <a
                href="mailto:yourmail@example.com"
                className="block rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                <span className="text-gray-400">Email:</span> yourmail@example.com
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                <span className="text-gray-400">GitHub:</span> github.com/yourusername
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                <span className="text-gray-400">LinkedIn:</span> linkedin.com/in/yourusername
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold text-white/95">Send a Message</h3>

            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-purple-400/60"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-purple-400/60"
            />
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-purple-400/60 resize-none"
            />

            <button
              type="button"
              className="w-full md:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:brightness-110 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
