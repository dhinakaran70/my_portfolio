import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", to: "about" },
        { name: "Experience", to: "experience" },
        { name: "Projects", to: "projects" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "h-20 bg-navy/80 backdrop-blur-md shadow-lg"
                    : "h-24 bg-transparent"
                }`}
        >
            <nav className="flex justify-between items-center h-full px-6 md:px-12">
                <div className="text-green font-heading text-2xl font-bold tracking-tighter">
                    <Link to="hero" smooth={true} duration={500} className="cursor-pointer flex items-center gap-2">
                        {/* Hexagon Logo */}
                        <div className="relative w-10 h-10 flex items-center justify-center border-2 border-green rounded pt-0.5 group hover:bg-green-tint transition-all">
                            D
                        </div>
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-8 font-mono text-sm">
                    <ol className="flex gap-6">
                        {navLinks.map((link, i) => (
                            <li key={i} className="group">
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    className="cursor-pointer flex items-center text-lightest-slate hover:text-green transition-colors"
                                >
                                    <span className="text-green mr-1.5 opacity-70 group-hover:opacity-100">
                                        0{i + 1}.
                                    </span>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ol>

                    <a
                        href="/resume/Dhinakaran_DV_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-green text-green rounded hover:bg-green-tint transition-all font-mono"
                        download
                    >
                        Resume
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
