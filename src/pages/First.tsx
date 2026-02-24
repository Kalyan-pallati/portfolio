"use client";
import { motion } from "framer-motion";
import { Typewriter } from "../components/Typewriter";
const First = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            <div>
              <span className="px-1 mt-4 mb-4 inline-block text-sm font-medium tracking-wide text-[var(--text-tertiary)]">
                 <motion.span
                      className="block"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      VAS
                    </motion.span>
              </span>

              <h1 className="text-[clamp(3rem,4vw,3.75rem)] font-semibold tracking-tight leading-[1.1]">
                <span className="inline-block">
                    <Typewriter
                      staticText="Streamline"
                      words={["operations", "payments", "business"]}
                      typingSpeed={120}
                      deletingSpeed={80}
                      pauseTime={500}
                    />
                </span>
                <motion.span
                    className="block"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: "easeOut",
                    }}
                >
                    Achieve more with value-added services.
                </motion.span>
                </h1>
              <p className="mt-6 max-w-xl text-lg text-[var(--text-secondary)]">
                <motion.span className="block"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}>
                    From managed settlements to tailored billing, our value-added services streamline operations and boost business profitability.
                </motion.span> 
              </p>
              <br />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <motion.button
                  className="rounded-full bg-blue-600 px-8 py-4 font-medium text-white shadow-md shadow-blue-500/50"
                  whileHover={{ scale: 1.02, y: -4, opacity: 0.9 }}
                  whileTap={{ scale: 0.95, y: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Started Today
                </motion.button>
              </motion.div>
            </div>

            <div className="relative">
              <div
                className="
                  h-[360px]
                  w-full
                  rounded-3xl
                  bg-[var(--bg-secondary)]
                  shadow-[var(--shadow-lg)]
                "
              >
                {/* Image is to be added here later after the content is given*/}
              </div>
            </div>
          </div>
        </section>
    )
}
export default First;