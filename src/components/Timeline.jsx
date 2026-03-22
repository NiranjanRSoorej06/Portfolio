import { motion } from "framer-motion";
import { useState } from "react";

const timelineData = [
  {
    id: 1,
    title: "Start",
    description: "Android + Kotlin",
    details: "Explored mobile development",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 2,
    title: "Shift",
    description: "Switched to Web",
    details: "UI clones (React)",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 3,
    title: "Core Growth",
    description: "Competitive Coding",
    details: "DSA focus",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: 4,
    title: "Expansion",
    description: "Backend Dev",
    details: "Node · Express · Mongo",
    color: "from-red-500 to-red-600",
  },
  {
    id: 5,
    title: "Exploration",
    description: "Blockchain",
    details: "Basics + smart contracts",
    color: "from-green-500 to-green-600",
  },
  {
    id: 6,
    title: "Build Mode",
    description: "Hackathons",
    details: "Rapid prototyping",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 7,
    title: "Highlight",
    description: "SIH 2025",
    details: "Frontend solution",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: 8,
    title: "Now",
    description: "Full Stack + DSA",
    details: "Ongoing, very awesome",
    color: "from-gray-700 to-gray-800",
  },
];

export default function Timeline() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative py-20 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-lg"
          >
            Evolution from mobile to full stack development
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 opacity-30"></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex gap-4 items-start">
                    {/* Circle */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg cursor-pointer`}
                    />

                    {/* Content */}
                    <motion.div
                      className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10 flex-grow"
                      whileHover={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        borderColor: "rgba(255,255,255,0.2)",
                      }}
                    >
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-purple-400 font-semibold">{item.description}</p>
                      <p className="text-gray-400 text-sm mt-1">{item.details}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center">
                  {/* Left Content (alternating) */}
                  {index % 2 === 0 && (
                    <>
                      <motion.div
                        className="w-5/12 text-right pr-8"
                        whileHover={{ x: -10 }}
                      >
                        <motion.div
                          className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10"
                          whileHover={{
                            backgroundColor:
                              hoveredId === item.id
                                ? "rgba(255,255,255,0.15)"
                                : "rgba(255,255,255,0.05)",
                            borderColor:
                              hoveredId === item.id
                                ? "rgba(255,255,255,0.3)"
                                : "rgba(255,255,255,0.1)",
                          }}
                        >
                          <h3 className="text-2xl font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold text-lg mt-2">
                            {item.description}
                          </p>
                          <p className="text-gray-400 text-sm mt-2">
                            {item.details}
                          </p>
                        </motion.div>
                      </motion.div>

                      {/* Center Circle */}
                      <div className="w-2/12 flex justify-center">
                        <motion.div
                          whileHover={{ scale: 1.3 }}
                          className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-pointer relative z-10 border-4 border-black`}
                        />
                      </div>

                      {/* Right Empty */}
                      <div className="w-5/12"></div>
                    </>
                  )}

                  {/* Right Content (alternating) */}
                  {index % 2 === 1 && (
                    <>
                      {/* Left Empty */}
                      <div className="w-5/12"></div>

                      {/* Center Circle */}
                      <div className="w-2/12 flex justify-center">
                        <motion.div
                          whileHover={{ scale: 1.3 }}
                          className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-pointer relative z-10 border-4 border-black`}
                        />
                      </div>

                      {/* Right Content */}
                      <motion.div
                        className="w-5/12 text-left pl-8"
                        whileHover={{ x: 10 }}
                      >
                        <motion.div
                          className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10"
                          whileHover={{
                            backgroundColor:
                              hoveredId === item.id
                                ? "rgba(255,255,255,0.15)"
                                : "rgba(255,255,255,0.05)",
                            borderColor:
                              hoveredId === item.id
                                ? "rgba(255,255,255,0.3)"
                                : "rgba(255,255,255,0.1)",
                          }}
                        >
                          <h3 className="text-2xl font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold text-lg mt-2">
                            {item.description}
                          </p>
                          <p className="text-gray-400 text-sm mt-2">
                            {item.details}
                          </p>
                        </motion.div>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
