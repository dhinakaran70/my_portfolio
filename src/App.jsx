import { useEffect } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Simple custom cursor effect
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const updateCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-green-tint selection:text-green">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 z-[-1] bg-navy h-full w-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink/10 blur-[120px]"></div>
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-green/5 blur-[120px]"></div>
      </div>

      <div
        id="custom-cursor"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-green pointer-events-none z-[100] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-screen"
      ></div>
      <div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-green pointer-events-none z-[100] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ transform: `translate(var(--x), var(--y))` }}
      ></div>

      <Header />

      <main className="px-6 md:px-24 lg:px-36 max-w-[1600px] mx-auto">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
