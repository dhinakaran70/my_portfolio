import { motion } from "framer-motion";

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
        <section id="about" className="py-24 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-heading"
            >
                <span className="text-green font-mono text-xl mr-2 font-normal">01.</span>
                About Me
            </motion.h2>

            <div className="grid md:grid-cols-5 gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-3 text-lg space-y-4"
                >
                    <p>
                        Hello! My name is Dhinakaran and I enjoy creating things that live on the
                        internet. My interest in web development started back when I was exploring
                        how different digital experiences are built, which led me down the path of
                        learning robust backend and dynamic frontend technologies.
                    </p>
                    <p>
                        Fast-forward to today, and I’ve had the privilege of working on diverse
                        projects, from AI-powered tracking systems to comprehensive e-commerce
                        backends. My main focus these days is building scalable, inclusive
                        applications for a variety of clients and learning new paradigms.
                    </p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm text-slate">
                        {skills.map((skill, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <span className="text-green text-xs">▹</span> {skill}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-2 relative group"
                >
                    <div className="relative w-full max-w-[300px] h-[300px] mx-auto md:mx-0">
                        <div className="absolute inset-0 rounded bg-green mix-blend-multiply opacity-50 transition-all duration-300 group-hover:opacity-0 z-10"></div>
                        <img
                            src="/images/Dhinakaran_DV.jpg"
                            alt="Dhinakaran D V."
                            className="absolute inset-0 w-full h-full object-cover rounded grayscale group-hover:grayscale-0 transition-all duration-300 z-0"
                        />
                        <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2 -z-10"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
