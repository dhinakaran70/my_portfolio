import { motion } from "framer-motion";

const SpeechBubble = ({ children, direction = "right", delay = 0 }) => {
    const isRight = direction === "right";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.7, x: isRight ? -20 : 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: "backOut" }}
            className={`relative inline-block max-w-md ${isRight ? "ml-4" : "mr-4"}`}
        >
            <div className="bg-light-navy/80 backdrop-blur-sm border border-lightest-navy/50 rounded-2xl px-6 py-4 text-slate text-base leading-relaxed shadow-lg">
                {children}
            </div>
            {/* Arrow */}
            <div
                className={`absolute top-6 w-0 h-0 ${
                    isRight
                        ? "-left-3 border-t-[8px] border-t-transparent border-r-[12px] border-r-light-navy/80 border-b-[8px] border-b-transparent"
                        : "-right-3 border-t-[8px] border-t-transparent border-l-[12px] border-l-light-navy/80 border-b-[8px] border-b-transparent"
                }`}
            />
        </motion.div>
    );
};

export default SpeechBubble;
