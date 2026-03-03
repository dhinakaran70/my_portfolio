import { motion } from "framer-motion";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center pt-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-3xl"
            >
                <motion.p variants={itemVariants} className="text-green font-mono mb-5 ml-1">
                    Hi, my name is
                </motion.p>
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-heading font-bold text-lightest-slate mb-2"
                >
                    Dhinakaran D V.
                </motion.h1>
                <motion.h2
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-heading font-bold text-slate mb-6"
                >
                    I build things for the web.
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate max-w-xl mb-12">
                    I’m an aspiring software engineer specializing in building (and occasionally
                    designing) exceptional digital experiences. Currently, I’m focused on
                    building accessible, human-centered products.
                </motion.p>
                <motion.div variants={itemVariants}>
                    <a
                        href="#projects"
                        className="inline-block px-7 py-4 border border-green text-green font-mono text-sm rounded hover:bg-green-tint transition-all"
                    >
                        Check out my projects!
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
