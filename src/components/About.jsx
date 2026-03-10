import { motion } from "framer-motion";
import Character from "./Character";
import SpeechBubble from "./SpeechBubble";
import StoryScene from "./StoryScene";

const About = () => {
    const skills = [
        "Java",
        "MySQL",
        "Tailwind CSS",
        "Docker",
        "React",
        "Node.js",
    ];

    return (
        <StoryScene
            id="about"
            bgElement={
                <>
                    <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue/5 blur-[80px]" />
                    <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-green/5 blur-[60px]" />
                </>
            }
        >
            <div className="max-w-5xl mx-auto">
                {/* Chapter header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-green font-mono text-sm mb-2">~ Chapter 1 ~</p>
                    <h2 className="section-heading">
                        <span className="text-green font-mono text-xl mr-2 font-normal">01.</span>
                        The Origin Story
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Character + speech */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center md:items-start gap-6"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue/10 rounded-full blur-[50px] scale-150" />
                            <Character pose="code" size={160} />
                        </div>

                        <SpeechBubble direction="right" delay={0.4}>
                            <p className="text-sm">
                                <span className="text-green font-mono">$ whoami</span>
                                <br />
                                Let me tell you how it all started...
                            </p>
                        </SpeechBubble>
                    </motion.div>

                    {/* Story content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Story cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="story-card"
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0" />
                                <p className="text-lg text-light-slate">
                                    Hello! My name is <span className="text-lightest-slate font-semibold">Dhinakaran</span> and
                                    I enjoy creating things that live on the internet. My interest in
                                    web development started when I was exploring how different digital
                                    experiences are built.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="story-card"
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                                <p className="text-lg text-light-slate">
                                    Fast-forward to today — I&apos;ve worked on diverse projects, from
                                    AI-powered tracking systems to comprehensive e-commerce backends.
                                    My focus is building <span className="text-green">scalable, inclusive applications</span>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Skills with animated reveal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <p className="text-light-slate mb-4 font-mono text-sm text-green">
                                {'>'} Skills unlocked along the way:
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {skills.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 + i * 0.1 }}
                                        className="flex items-center gap-2 font-mono text-sm text-slate skill-tag"
                                    >
                                        <span className="text-green text-xs">&#9655;</span> {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Photo section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 flex justify-center"
                >
                    <div className="relative group w-[280px] h-[280px]">
                        <div className="absolute inset-0 rounded-lg bg-green mix-blend-multiply opacity-40 transition-all duration-300 group-hover:opacity-0 z-10" />
                        <img
                            src="/images/Dhinakaran_DV.jpg"
                            alt="Dhinakaran D V."
                            className="absolute inset-0 w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300 z-0"
                        />
                        <div className="absolute inset-0 border-2 border-green rounded-lg translate-x-4 translate-y-4 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2 -z-10" />
                    </div>
                </motion.div>
            </div>
        </StoryScene>
    );
};

export default About;
