import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const StoryScene = ({ children, className = "", bgElement, id }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

    return (
        <section ref={ref} id={id} className={`relative py-24 overflow-hidden ${className}`}>
            {/* Parallax background decoration */}
            {bgElement && (
                <motion.div
                    style={{ y: bgY }}
                    className="absolute inset-0 pointer-events-none z-0"
                >
                    {bgElement}
                </motion.div>
            )}

            <motion.div style={{ opacity }} className="relative z-10">
                {children}
            </motion.div>
        </section>
    );
};

export default StoryScene;
