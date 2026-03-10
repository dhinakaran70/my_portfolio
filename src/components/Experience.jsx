import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Character from "./Character";
import SpeechBubble from "./SpeechBubble";
import StoryScene from "./StoryScene";

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const jobs = [
        {
            company: "Q-SPIDERS",
            title: "Trainee",
            date: "Training cum induction programme",
            pose: "code",
            bubble: "This is where I sharpened my full-stack skills through intense training!",
            details: [
                "Improved my skills in full-stack development.",
                "Gained both knowledge and hands-on practice with projects and assessments.",
            ],
        },
        {
            company: "Greentech Megawatt",
            title: "Data Analyst Intern",
            date: "Internship",
            pose: "present",
            bubble: "Working with real SCADA systems was an incredible learning experience.",
            details: [
                "Gained hands-on experience with SCADA systems used for real-time turbine data monitoring.",
                "Assisted in analyzing system alerts and supported basic maintenance operations.",
            ],
        },
        {
            company: "Cisco",
            title: "Computer Networking Intern",
            date: "Remote",
            pose: "sit",
            bubble: "Cisco taught me the backbone of the internet — networking fundamentals!",
            details: [
                "Learned about Networking and simulating the network.",
                "Acquired proficiency in Cisco Packet Tracer.",
            ],
        },
    ];

    const currentJob = jobs[activeTab];

    return (
        <StoryScene
            id="experience"
            bgElement={
                <>
                    <div className="absolute top-10 left-20 w-72 h-72 rounded-full bg-pink/5 blur-[80px]" />
                    <div className="absolute bottom-10 right-20 w-56 h-56 rounded-full bg-green/5 blur-[60px]" />
                </>
            }
        >
            <div className="max-w-4xl mx-auto">
                {/* Chapter header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-pink font-mono text-sm mb-2">~ Chapter 2 ~</p>
                    <h2 className="section-heading">
                        <span className="text-green font-mono text-xl mr-2 font-normal">02.</span>
                        The Journey So Far
                    </h2>
                </motion.div>

                {/* Timeline narrative */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Timeline tabs */}
                    <div className="flex md:flex-col overflow-x-auto md:overflow-visible relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-lightest-navy" />

                        {jobs.map((job, idx) => (
                            <motion.button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className={`relative px-6 py-4 text-sm font-mono whitespace-nowrap text-left transition-all duration-300 md:w-48 hover:bg-light-navy/50 rounded-r ${
                                    activeTab === idx
                                        ? "text-green bg-light-navy/50"
                                        : "text-slate"
                                }`}
                            >
                                {/* Timeline dot */}
                                <div
                                    className={`hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                                        activeTab === idx
                                            ? "bg-green border-green scale-125"
                                            : "bg-navy border-lightest-navy"
                                    }`}
                                />
                                {job.company}
                            </motion.button>
                        ))}
                    </div>

                    {/* Content area with character */}
                    <div className="flex-1 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                {/* Character scene for this experience */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 relative">
                                        <div className="absolute inset-0 bg-pink/10 rounded-full blur-[40px] scale-150" />
                                        <Character
                                            pose={currentJob.pose}
                                            size={120}
                                        />
                                    </div>
                                    <SpeechBubble direction="right" delay={0.2}>
                                        <p className="text-sm italic">{currentJob.bubble}</p>
                                    </SpeechBubble>
                                </div>

                                {/* Job details card */}
                                <div className="story-card">
                                    <h3 className="text-xl md:text-2xl font-semibold text-lightest-slate mb-1">
                                        {currentJob.title}{" "}
                                        <span className="text-green">@ {currentJob.company}</span>
                                    </h3>
                                    <p className="font-mono text-light-slate text-sm mb-6">
                                        {currentJob.date}
                                    </p>
                                    <ul className="space-y-4">
                                        {currentJob.details.map((detail, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + idx * 0.15 }}
                                                className="flex gap-4"
                                            >
                                                <span className="text-green text-sm mt-1">&#9655;</span>
                                                <span className="text-slate">{detail}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </StoryScene>
    );
};

export default Experience;
