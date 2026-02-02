import { Github } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/10 bg-black/40 relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="SHCR Logo" className="w-8 h-8 grayscale opacity-70" />
                        <span className="text-gray-400 font-semibold tracking-wide">SHCR</span>
                    </div>

                    <div className="text-gray-500 text-sm text-center md:text-right">
                        <p>© 2024 Self-Healing Crash Runtime.</p>
                        <p className="mt-1">Built for Hackathon Demo Purposes.</p>
                    </div>

                    <div>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
