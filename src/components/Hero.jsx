import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono mb-6">
                        v1.0 Now Available
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        <span className="text-white">Self-Healing</span> <br />
                        <span className="text-gradient">Crash Runtime</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Intercept crashes, classify faults with AI, and apply live binary patches to resume execution — <span className="text-white font-semibold">zero source code changes required.</span>
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="#download"
                            className="group relative px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-lg font-bold text-lg flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                        >
                            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>Download DMG</span>
                            <div className="absolute inset-0 rounded-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
                        </a>

                        <a
                            href="#architecture"
                            className="px-8 py-4 bg-surface hover:bg-white/5 border border-white/10 text-gray-300 rounded-lg font-medium flex items-center gap-2 transition-all hover:text-white"
                        >
                            How it works <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-3 bg-blue-500 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
