import { motion } from "framer-motion";
import Character from "./Character";
import SpeechBubble from "./SpeechBubble";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 relative">
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-green/30 rounded-full"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                {/* Character side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-shrink-0 relative"
                >
                    {/* Glow behind character */}
                    <div className="absolute inset-0 bg-green/10 rounded-full blur-[60px] scale-150" />
                    <Character pose="wave" size={180} />
                </motion.div>

                {/* Story content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-2xl"
                >
                    <motion.div variants={itemVariants}>
                        <SpeechBubble direction="right" delay={0.8}>
                            <span className="text-green font-mono text-sm">
                                Hey there! Welcome to my story...
                            </span>
                        </SpeechBubble>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-green font-mono mb-4 ml-1 mt-6 text-sm">
                        ~ Prologue ~
                    </motion.p>
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-heading font-bold text-lightest-slate mb-2"
                    >
                        Dhinakaran D V.
                    </motion.h1>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-heading font-bold text-slate mb-6"
                    >
                        I build things for the web.
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg text-slate max-w-xl mb-10">
                        I&apos;m an aspiring software engineer specializing in building (and occasionally
                        designing) exceptional digital experiences. Scroll down to explore my journey...
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex items-center gap-4">
                        <a
                            href="#about"
                            className="inline-block px-7 py-4 border border-green text-green font-mono text-sm rounded hover:bg-green-tint transition-all"
                        >
                            Begin the Story
                        </a>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-green text-2xl"
                        >
                            &#8595;
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator line */}
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-green/50 to-transparent origin-top"
            />
        </section>
    );
};

export default Hero;
