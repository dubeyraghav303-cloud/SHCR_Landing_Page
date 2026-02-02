import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Features', href: '#features' },
        { title: 'Architecture', href: '#architecture' },
        { title: 'Demo', href: '#demo' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <img src={logo} alt="SHCR Logo" className="w-10 h-10 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all" />
                    <span className="text-xl font-bold tracking-wider text-white">SHCR</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.title}
                        </a>
                    ))}
                    <a
                        href="#download"
                        className="px-5 py-2 bg-primary/20 hover:bg-primary/40 border border-primary/50 rounded-full text-blue-400 hover:text-white transition-all text-sm font-semibold shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    >
                        Download
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 p-6 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </a>
                            ))}
                            <a
                                href="#download"
                                className="mt-4 px-8 py-3 bg-primary text-white rounded-lg font-bold w-full text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Download
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
