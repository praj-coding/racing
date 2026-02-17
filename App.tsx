
import React, { useState, useEffect, useRef } from 'react';
import { ThemeType } from './types';
import { PROJECTS, SKILLS } from './constants';
import ThemeSwitcher from './components/ThemeSwitcher';
import MatrixRain from './components/MatrixRain';
import ProjectCard from './components/ProjectCard';
import GeminiChat from './components/GeminiChat';
import { Github, Mail, Cpu, Zap, Trophy, Shield } from 'lucide-react';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.HACKER);
  const [isScrolled, setIsScrolled] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const getThemeBaseStyles = () => {
    switch (theme) {
      case ThemeType.HACKER: return "bg-black text-green-500 selection:bg-green-500 selection:text-black";
      case ThemeType.LAMBO: return "bg-zinc-950 text-yellow-500 selection:bg-yellow-500 selection:text-black";
      case ThemeType.BATMAN: return "bg-stone-950 text-yellow-400 selection:bg-yellow-400 selection:text-black";
      default: return "bg-black text-white";
    }
  };

  const getFont = () => {
    switch (theme) {
      case ThemeType.HACKER: return "font-courier";
      case ThemeType.LAMBO: return "font-orbitron";
      case ThemeType.BATMAN: return "font-bebas";
      default: return "font-inter";
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${getThemeBaseStyles()} ${getFont()}`}>
      {/* Hacker Theme Overlays */}
      {theme === ThemeType.HACKER && (
        <>
          <MatrixRain />
          <div className="fixed inset-0 pointer-events-none z-50 bg-static" />
          <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_4px,3px_100%]" />
        </>
      )}

      {/* Lambo Theme Overlays */}
      {theme === ThemeType.LAMBO && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="speed-line" 
              style={{ 
                top: `${20 + i * 15}%`, 
                left: '-10%', 
                animationDelay: `${i * 0.4}s`,
                color: '#eab308'
              }} 
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent" />
        </div>
      )}

      {/* Batman Theme Overlays */}
      {theme === ThemeType.BATMAN && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-yellow-400/5 rounded-full blur-[120px] signal-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>
      )}

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${theme === ThemeType.LAMBO ? 'bg-yellow-500 text-black' : 'bg-current text-black'}`}>
              P
            </div>
            <span className={theme === ThemeType.HACKER ? 'glitch-effect' : ''}>PRAJ.CODING</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest opacity-80">
            <a href="#projects" className="hover:opacity-100 hover:scale-105 transition-all">Projects</a>
            <a href="#skills" className="hover:opacity-100 hover:scale-105 transition-all">Skills</a>
            <a href="#ai" className="hover:opacity-100 hover:scale-105 transition-all">AI Assistant</a>
            <a href="#contact" className="hover:opacity-100 hover:scale-105 transition-all">Connect</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="relative z-10 text-center space-y-8 max-w-4xl">
          <div className="space-y-4">
            <h2 className={`text-xl md:text-2xl font-medium tracking-[0.5em] opacity-60`}>
              {theme === ThemeType.HACKER ? '> SYSTEM_INITIALIZED' : theme === ThemeType.LAMBO ? 'PEAK PERFORMANCE' : 'THE DARK KNIGHT OF CODE'}
            </h2>
            <h1 className={`text-6xl md:text-9xl font-black tracking-tighter transition-all duration-500 ${theme === ThemeType.HACKER ? 'glitch-effect' : ''}`}>
              PRATYUSH RAJ
            </h1>
            <p className="text-lg md:text-2xl opacity-80 max-w-2xl mx-auto font-light leading-relaxed">
              12-year-old coding prodigy, founder of <span className="font-bold underline decoration-current decoration-2 underline-offset-4">PRAJ Coding</span>, and visionary developer shaping the future.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className={`px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
              theme === ThemeType.LAMBO ? 'bg-yellow-500 text-black hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]' : 'bg-current text-black hover:scale-105'
            }`}>
              View Dossier <Zap size={18} />
            </button>
            <div className="flex gap-4 items-center px-4">
              <a href="https://github.com/prajasus2308" target="_blank" rel="noopener noreferrer" className="p-3 hover:bg-white/5 rounded-full transition-all hover:-translate-y-1"><Github size={24} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className={`text-4xl md:text-6xl font-black uppercase ${theme === ThemeType.BATMAN ? 'tracking-widest' : ''}`}>
              Engineering
            </h2>
            <div className="h-1 w-24 bg-current" />
          </div>
          <p className="max-w-md opacity-60 text-sm md:text-base">
            Exploring the boundaries of software engineering through high-performance applications, AI models, and immersive digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} theme={theme} />
          ))}
        </div>
      </section>

      {/* Stats & AI Section */}
      <section id="skills" ref={skillsRef} className="py-24 px-6 bg-white/5 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-black uppercase">Technical Mastery</h2>
              <p className="opacity-60">Quantifying skills through years of dedicated experimentation and production-grade deployments.</p>
            </div>
            
            <div className="space-y-8">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold uppercase tracking-wider">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-current transition-all duration-[2000ms] ease-out"
                      style={{ 
                        width: skillsVisible ? `${skill.level}%` : '0%', 
                        boxShadow: skillsVisible ? `0 0 10px ${theme === ThemeType.HACKER ? '#22c55e' : theme === ThemeType.LAMBO ? '#eab308' : '#facc15'}` : 'none' 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="p-6 border border-white/10 rounded-2xl text-center space-y-2 bg-black/20 backdrop-blur-sm">
                <Trophy className="mx-auto" />
                <div className="text-2xl font-black">50+</div>
                <div className="text-[10px] uppercase opacity-60">Repos</div>
              </div>
              <div className="p-6 border border-white/10 rounded-2xl text-center space-y-2 bg-black/20 backdrop-blur-sm">
                <Cpu className="mx-auto" />
                <div className="text-2xl font-black">12k+</div>
                <div className="text-[10px] uppercase opacity-60">Commits</div>
              </div>
              <div className="p-6 border border-white/10 rounded-2xl text-center space-y-2 bg-black/20 backdrop-blur-sm">
                <Shield className="mx-auto" />
                <div className="text-2xl font-black">99%</div>
                <div className="text-[10px] uppercase opacity-60">Uptime</div>
              </div>
            </div>
          </div>

          <div id="ai" className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 uppercase flex items-center gap-3">
              <Zap className="text-current" /> Ask My Neural Core
            </h3>
            <GeminiChat theme={theme} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 px-6 text-center space-y-12 relative z-10">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase">Ready to Build?</h2>
          <p className="opacity-60">Currently available for visionary collaborations and high-impact engineering challenges.</p>
          <a 
            href="mailto:prajasus2308@gmail.com"
            className="inline-flex items-center gap-4 text-2xl md:text-3xl font-bold hover:scale-105 transition-all group"
          >
            <Mail className="group-hover:rotate-12 transition-transform" /> prajasus2308@gmail.com
          </a>
        </div>
        
        <div className="pt-24 border-t border-white/5 opacity-40 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 PRATYUSH RAJ // PRAJ.CODING. ALL SYSTEMS NOMINAL.</p>
          <div className="flex gap-8 uppercase font-bold tracking-widest text-[10px]">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Security Specs</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Manifesto</a>
          </div>
        </div>
      </footer>

      <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
