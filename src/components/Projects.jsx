import { motion } from "framer-motion";
import { Folder, ExternalLink, Github } from "lucide-react";
import Character from "./Character";
import SpeechBubble from "./SpeechBubble";
import StoryScene from "./StoryScene";

const Projects = () => {
    const projects = [
        {
            title: "Global Price Tracker",
            desc: "A web application that can track the prices of products in different countries and provide insights based on the data.",
            tech: ["MongoDB", "Node.js", "React.js", "Next.js", "Tailwind CSS"],
            github: "#",
            link: "https://global-price-view.vercel.app/",
        },
        {
            title: "KNOW U - AI Assistant",
            desc: "An AI powered Habit tracker System that tracks users habits and provides insights based on the data.",
            tech: ["Spring Boot", "MySQL", "OpenAI API"],
            github: "https://github.com/dhinakaran70/KNOW_U_V1",
            link: "https://github.com/dhinakaran70/KNOW_U_V1",
        },
        {
            title: "Todo Application",
            desc: "Developed a Todo application using Spring Boot. Built and integrated CRUD operations for task management.",
            tech: ["Spring Boot", "Neon", "Docker"],
            github: "https://github.com/dhinakaran70/Todo_app",
            link: "https://github.com/dhinakaran70/Todo_app",
        },
        {
            title: "Course Registration App",
            desc: "Developed a system to manage course registration and user access. Implemented CRUD operations via RESTful APIs.",
            tech: ["Spring Boot", "MySQL", "Docker"],
            github: "#",
            link: "https://course-registration-system-zdhn.onrender.com/",
        },
        {
            title: "E-Commerce Backend",
            desc: "Developed a simple microservices backend for a basic e-commerce application. Built REST APIs for product and order services.",
            tech: ["Spring Boot", "MySQL", "Eureka"],
            github: "https://github.com/dhinakaran70/E-Commerce_Backend",
            link: "https://github.com/dhinakaran70/E-Commerce_Backend",
        },
    ];

    return (
        <StoryScene
            id="projects"
            bgElement={
                <>
                    <div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-green/5 blur-[100px]" />
                    <div className="absolute bottom-0 left-20 w-60 h-60 rounded-full bg-blue/5 blur-[80px]" />
                </>
            }
        >
            <div className="max-w-5xl mx-auto">
                {/* Chapter header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <p className="text-green font-mono text-sm mb-2">~ Chapter 3 ~</p>
                    <h2 className="section-heading">
                        <span className="text-green font-mono text-xl mr-2 font-normal">03.</span>
                        Things I&apos;ve Built
                    </h2>
                </motion.div>

                {/* Character intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="flex-shrink-0 relative">
                        <div className="absolute inset-0 bg-green/10 rounded-full blur-[40px] scale-150" />
                        <Character pose="present" size={100} />
                    </div>
                    <SpeechBubble direction="right" delay={0.3}>
                        <p className="text-sm">
                            Here are some of my proudest creations! Each one taught me something new.
                        </p>
                    </SpeechBubble>
                </motion.div>

                {/* Project cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative cursor-pointer"
                            onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                        >
                            <div className="project-card h-full bg-light-navy/40 backdrop-blur-sm p-8 rounded-lg border border-lightest-navy/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between hover:border-green/30 hover:shadow-[0_10px_30px_rgba(2,12,27,0.7)] group-hover:bg-light-navy/70">
                                {/* Story number badge */}
                                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-green/10 border border-green/20 flex items-center justify-center">
                                    <span className="text-green font-mono text-xs">{idx + 1}</span>
                                </div>

                                <div>
                                    <header className="flex justify-between items-center mb-6">
                                        <div className="text-green">
                                            <Folder size={36} strokeWidth={1} />
                                        </div>
                                        <div className="flex gap-4 text-light-slate">
                                            {project.github !== "#" && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="hover:text-green transition-colors"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="hover:text-green transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </header>
                                    <h3 className="text-xl font-bold text-lightest-slate mb-3 group-hover:text-green transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-light-slate leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>

                                <footer className="mt-6">
                                    <ul className="flex flex-wrap gap-2 font-mono text-xs text-slate">
                                        {project.tech.map((t, i) => (
                                            <li
                                                key={i}
                                                className="px-2 py-1 rounded bg-navy/50 border border-lightest-navy/30"
                                            >
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </footer>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </StoryScene>
    );
};

export default Projects;
