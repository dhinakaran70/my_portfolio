import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-32 max-w-2xl mx-auto text-center">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-green text-sm mb-4"
            >
                04. What’s Next?
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-heading font-bold text-lightest-slate mb-6"
            >
                Get In Touch
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate text-lg mb-12"
            >
                Although I’m not currently looking for any new opportunities, my inbox is
                always open. Whether you have a question or just want to say hi, I’ll try my
                best to get back to you!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <a
                    href="mailto:dhinakarandv7@gmail.com"
                    className="inline-block px-8 py-4 border border-green text-green font-mono rounded hover:bg-green-tint transition-all"
                >
                    Say Hello
                </a>
            </motion.div>

            <div className="mt-40">
                <div className="flex justify-center gap-6 mb-8 text-light-slate">
                    <a
                        href="https://github.com/dhinakaran70"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-green hover:-translate-y-1 transition-all"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dhinakaran-d-v-1a5398267/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-green hover:-translate-y-1 transition-all"
                    >
                        <Linkedin size={24} />
                    </a>
                </div>
                <p className="font-mono text-xs text-slate pb-8 hover:text-green transition-colors cursor-pointer">
                    <a href="https://github.com/dhinakaran70">
                        Designed & Built by Dhinakaran D V.
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
