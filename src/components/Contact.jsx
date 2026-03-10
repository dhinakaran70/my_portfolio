import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Character from "./Character";
import SpeechBubble from "./SpeechBubble";
import StoryScene from "./StoryScene";

const Contact = () => {
    return (
        <StoryScene
            id="contact"
            bgElement={
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green/5 blur-[120px]" />
            }
        >
            <div className="max-w-2xl mx-auto text-center py-16">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-mono text-blue text-sm mb-2"
                >
                    ~ Epilogue ~
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-mono text-green text-sm mb-4"
                >
                    04. The story continues...
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-heading font-bold text-lightest-slate mb-8"
                >
                    Let&apos;s Write the Next Chapter Together
                </motion.h2>

                {/* Character celebrating */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center gap-4 mb-8"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-green/10 rounded-full blur-[50px] scale-150" />
                        <Character pose="celebrate" size={150} />
                    </div>
                    <SpeechBubble direction="right" delay={0.4}>
                        <p className="text-sm">
                            Thanks for scrolling through my story! I&apos;d love to hear yours.
                            <br />
                            <span className="text-green font-mono">Let&apos;s connect!</span>
                        </p>
                    </SpeechBubble>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-slate text-lg mb-12"
                >
                    Whether you have a project idea, a collaboration in mind, or just want to
                    say hi — my inbox is always open and I&apos;ll try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <a
                        href="mailto:dhinakarandv7@gmail.com"
                        className="inline-block px-8 py-4 border border-green text-green font-mono rounded hover:bg-green-tint transition-all text-lg"
                    >
                        Say Hello
                    </a>
                </motion.div>

                {/* Social links & footer  */}
                <div className="mt-32">
                    <div className="flex justify-center gap-6 mb-8 text-light-slate">
                        <motion.a
                            href="https://github.com/dhinakaran70"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -3, color: "#64ffda" }}
                            className="transition-all"
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/dhinakaran-d-v-1a5398267/"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -3, color: "#64ffda" }}
                            className="transition-all"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                    </div>
                    <p className="font-mono text-xs text-slate pb-8 hover:text-green transition-colors cursor-pointer">
                        <a href="https://github.com/dhinakaran70">
                            Designed & Built by Dhinakaran D V.
                        </a>
                    </p>
                </div>
            </div>
        </StoryScene>
    );
};

export default Contact;
