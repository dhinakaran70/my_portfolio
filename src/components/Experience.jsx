import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const jobs = [
        {
            company: "Q-SPIDERS",
            title: "Trainee",
            date: "Training cum induction programme",
            details: [
                "Improved my skills in the full-stack development.",
                "Gained both knowledge and hands-on practice with projects and assessments.",
            ],
        },
        {
            company: "Greentech Megawatt",
            title: "Data Analyst Intern",
            date: "Internship",
            details: [
                "Gained hands-on experience with SCADA systems used for real-time turbine data monitoring.",
                "Assisted in analyzing system alerts and supported basic maintenance operations.",
            ],
        },
        {
            company: "Cisco",
            title: "Computer Networking Intern",
            date: "Remote",
            details: [
                "Learned about Networking and simulating the network.",
                "Acquired proficiency in Cisco Packet Tracer.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-24 max-w-3xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-heading"
            >
                <span className="text-green font-mono text-xl mr-2 font-normal">02.</span>
                Where I've Worked
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-8 mt-12">
                <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-lightest-navy relative">
                    <motion.div
                        className="absolute bottom-0 md:bottom-auto md:left-0 h-[2px] md:h-10 w-32 md:w-[2px] bg-green transition-transform duration-300 z-10"
                        style={{
                            transform: `translate(${activeTab * 100}%, 0)`,
                            // In md screen, it's translateY instead of translateX
                        }}
                    />
                    {jobs.map((job, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`px-5 py-3 md:py-3 text-sm font-mono whitespace-nowrap text-left transition-colors duration-300 md:w-40 hover:bg-light-navy hover:text-green ${activeTab === idx ? "text-green bg-light-navy/50" : "text-slate"
                                }`}
                        >
                            {job.company}
                        </button>
                    ))}
                </div>

                <div className="md:ml-4 w-full min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-lightest-slate mb-1">
                                {jobs[activeTab].title}{" "}
                                <span className="text-green">@ {jobs[activeTab].company}</span>
                            </h3>
                            <p className="font-mono text-light-slate text-sm mb-6">
                                {jobs[activeTab].date}
                            </p>
                            <ul className="space-y-4">
                                {jobs[activeTab].details.map((detail, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <span className="text-green text-sm mt-1">▹</span>
                                        <span className="text-slate">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Experience;
