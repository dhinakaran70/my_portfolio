import { motion, useScroll, useSpring } from "framer-motion";

const storyChapters = [
    { id: "hero", label: "Prologue", color: "#64ffda" },
    { id: "about", label: "Chapter 1", color: "#57cbff" },
    { id: "experience", label: "Chapter 2", color: "#f57dff" },
    { id: "projects", label: "Chapter 3", color: "#64ffda" },
    { id: "contact", label: "Epilogue", color: "#57cbff" },
];

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <>
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 w-1 h-full bg-green/20 z-50 hidden md:block"
            >
                <motion.div
                    className="w-full bg-green origin-top"
                    style={{ scaleY, height: "100%" }}
                />
            </motion.div>

            {/* Chapter dots */}
            <div className="fixed left-3 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
                {storyChapters.map((chapter) => (
                    <a
                        key={chapter.id}
                        href={`#${chapter.id}`}
                        className="group flex items-center gap-3"
                    >
                        <div
                            className="w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:scale-150"
                            style={{ borderColor: chapter.color }}
                        />
                        <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lightest-slate whitespace-nowrap">
                            {chapter.label}
                        </span>
                    </a>
                ))}
            </div>
        </>
    );
};

export default ScrollProgress;
