import { motion } from "framer-motion";
import { Folder, ExternalLink, Github } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Global price tracker",
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
        <section id="projects" className="py-24 max-w-5xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-heading mb-16"
            >
                <span className="text-green font-mono text-xl mr-2 font-normal">03.</span>
                Some Things I've Built
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative cursor-pointer"
                        onClick={() => window.open(project.link, "_blank")}
                    >
                        <div className="h-full bg-light-navy/50 backdrop-blur-sm p-8 rounded border border-lightest-navy hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between hover:border-green/30 hover:shadow-[0_10px_30px_rgba(2,12,27,0.7)] group-hover:bg-light-navy">
                            <div>
                                <header className="flex justify-between items-center mb-8">
                                    <div className="text-green">
                                        <Folder size={40} strokeWidth={1} />
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
                                <p className="text-sm text-light-slate">
                                    {project.desc}
                                </p>
                            </div>

                            <footer className="mt-8 relative z-10">
                                <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate">
                                    {project.tech.map((t, i) => (
                                        <li key={i}>{t}</li>
                                    ))}
                                </ul>
                            </footer>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
