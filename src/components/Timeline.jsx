import { motion } from "framer-motion";
import { useState } from "react";

const lineAccentGlow = "rgba(217, 70, 239, 0.55)";
const connectorGradientStart = "rgba(168, 85, 247, 0.66)";
const connectorGradientMiddle = "rgba(236, 72, 153, 0.72)";
const connectorGradientEnd = "rgba(167, 139, 250, 0.62)";

const timelineData = [
  {
    id: 1,
    title: "Start",
    description: "Android + Kotlin",
    details: "Explored mobile development",
    color: "from-purple-500 to-purple-600",
    glowColor: "rgba(168, 85, 247, 0.6)",
    skills: ["Android", "Kotlin"],
  },
  {
    id: 2,
    title: "Shift",
    description: "Switched to Web",
    details: "UI clones (React)",
    color: "from-blue-500 to-blue-600",
    glowColor: "rgba(59, 130, 246, 0.6)",
    skills: ["React", "JavaScript"],
  },
  {
    id: 3,
    title: "Core Growth",
    description: "Competitive Coding",
    details: "DSA focus",
    color: "from-yellow-500 to-yellow-600",
    glowColor: "rgba(234, 179, 8, 0.6)",
    skills: ["DSA", "C++"],
  },
  {
    id: 4,
    title: "Expansion",
    description: "Backend Dev",
    details: "Node · Express · Mongo",
    color: "from-red-500 to-red-600",
    glowColor: "rgba(239, 68, 68, 0.6)",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 5,
    title: "Exploration",
    description: "Blockchain",
    details: "Basics + smart contracts",
    color: "from-green-500 to-green-600",
    glowColor: "rgba(34, 197, 94, 0.6)",
    skills: ["Solidity", "Web3"],
  },
  {
    id: 6,
    title: "Build Mode",
    description: "Hackathons",
    details: "Rapid prototyping",
    color: "from-orange-500 to-orange-600",
    glowColor: "rgba(249, 115, 22, 0.6)",
    skills: ["MERN", "Rapid Dev"],
  },
  {
    id: 7,
    title: "Highlight",
    description: "SIH 2025",
    details: "Frontend solution",
    color: "from-indigo-500 to-indigo-600",
    glowColor: "rgba(99, 102, 241, 0.6)",
    skills: ["React", "Tailwind"],
  },
  {
    id: 8,
    title: "Now",
    description: "Full Stack + DSA",
    details: "Ongoing, very awesome",
    color: "from-gray-500 to-gray-600",
    glowColor: "rgba(107, 114, 128, 0.6)",
    skills: ["Full Stack", "DSA"],
  },
];

export default function Timeline() {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <section className="relative py-16 px-4 md:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={() => setIsAnimated(true)}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        {/* Section Title */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            My <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-sm md:text-base"
          >
            Evolution through 8 phases
          </motion.p>
        </div>

        {/* Timeline Container */}
        <motion.div
          className="relative h-80 md:h-80 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Line Base */}
          <div 
            className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 rounded-full"
            style={{
              background: "linear-gradient(to right, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.45) 50%, rgba(168,85,247,0.35) 100%)",
              boxShadow: "0 0 20px rgba(236,72,153,0.25), 0 0 40px rgba(168,85,247,0.15)",
            }}
          ></div>

          {/* Animated Drawing Line */}
          <motion.div
            className="absolute top-1/2 left-0 h-0.5 transform -translate-y-1/2"
            style={{
              background: "linear-gradient(to right, rgba(168,85,247,0) 0%, rgba(236,72,153,0.6) 50%, rgba(168,85,247,0.6) 100%)",
              backgroundSize: "200% 100%",
              originX: 0,
            }}
            animate={
              isAnimated
                ? {
                    right: ["100%", "0%", "0%"],
                    backgroundPosition: ["200% 0", "0% 0", "0% 0"],
                  }
                : { right: "100%" }
            }
            transition={{
              duration: 5,
              ease: "easeInOut",
            }}
          />

          {/* Timeline Items */}
          <div className="w-full max-w-7xl mx-auto px-3 md:px-10 relative z-10 flex items-center justify-between">
            {timelineData.map((item, index) => {
              const nodeDelay = index * 0.4;
              const isAbove = index % 2 === 0;
              const cardWidth = 124;
              const cardHeight = 72;
              const cardHalfWidth = cardWidth / 2;
              const connectorJointY = isAbove ? -68 : 74;
              const boxCenterShiftY = isAbove ? -(cardHeight / 2) : cardHeight / 2;
              const cardTargetY = connectorJointY + boxCenterShiftY;
              const cardStartY = cardTargetY + 24;
              const horizontalDirection = isAbove ? 1 : -1;
              
              const branchLength = cardHalfWidth; // EXACT distance to box edge

              const connectorEndX = horizontalDirection * branchLength;

              // Place box so its edge touches the connector
              const boxX = horizontalDirection * branchLength;
              
              const connectorPath = `M 0 0 L 0 ${connectorJointY} L ${connectorEndX} ${connectorJointY}`;

              return (
                <motion.div
                  key={item.id}
                  className="flex flex-col items-center relative flex-shrink-0 w-12 md:w-20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isAnimated
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{
                    delay: nodeDelay,
                    duration: 0.4,
                    ease: "backOut",
                  }}
                >
                  <motion.svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none"
                    width="1"
                    height="1"
                  >
                    <defs>
                      <linearGradient id={`connectorGradient-${item.id}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={connectorGradientStart} />
                        <stop offset="50%" stopColor={connectorGradientMiddle} />
                        <stop offset="100%" stopColor={connectorGradientEnd} />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d={connectorPath}
                      fill="none"
                      stroke={`url(#connectorGradient-${item.id})`}
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isAnimated ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                      transition={{ delay: nodeDelay + 0.14, duration: 0.62, ease: "easeInOut" }}
                    />
                    <motion.path
                      d={connectorPath}
                      fill="none"
                      stroke="rgba(236, 72, 153, 0.34)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      style={{ filter: "blur(2px)" }}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isAnimated ? { pathLength: 1, opacity: 0.62 } : { pathLength: 0, opacity: 0 }}
                      transition={{ delay: nodeDelay + 0.16, duration: 0.66, ease: "easeInOut" }}
                    />

                  </motion.svg>

                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    initial={{ opacity: 0, x: 0, y: cardStartY, scale: 0.8 }}
                    animate={
                      isAnimated
                        ? {
                            opacity: 1,
                            x: boxX,
                            y: cardTargetY,
                            scale: 1,
                          }
                        : { opacity: 0, x: 0, y: cardStartY, scale: 0.8 }
                    }
                    transition={{
                      delay: nodeDelay + 0.22,
                      duration: 0.8,
                      ease: "backOut",
                    }}
                  >
                    <div className="w-[124px] h-[72px] bg-white/10 backdrop-blur-md rounded-lg px-2.5 py-2 border border-white/15 text-center">
                      <p className="text-[10px] md:text-xs font-semibold text-white/90 leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[10px] md:text-xs text-fuchsia-200/85 mt-0.5 leading-tight">
                        {item.description}
                      </p>
                      <p className="text-[9px] md:text-[10px] text-gray-300/75 mt-1 leading-tight">
                        {item.details}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="relative">
                    <motion.div
                      className="absolute inset-0 rounded-full blur-md"
                      style={{ background: lineAccentGlow }}
                      animate={isAnimated ? { scale: 1.35, opacity: 0.34 } : { scale: 0.8, opacity: 0 }}
                      transition={{ delay: nodeDelay + 0.18, duration: 0.5, ease: "easeInOut" }}
                    />

                    <motion.div
                      className="relative w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 shadow-lg border border-fuchsia-200/35 z-10"
                      animate={isAnimated ? { scale: 1 } : { scale: 0.9 }}
                      transition={{ delay: nodeDelay, duration: 0.35, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
