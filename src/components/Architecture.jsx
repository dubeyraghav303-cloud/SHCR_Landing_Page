import { motion } from 'framer-motion';
import architectureSvg from '../assets/architecture.svg';

const Architecture = () => {
    return (
        <section id="architecture" className="py-24 bg-black/30 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            How <span className="text-blue-500">SHCR</span> Works
                        </h2>
                        <div className="space-y-6 text-gray-300">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0">1</div>
                                <p><strong className="text-white block mb-1">Interception</strong> Catches hardware exceptions (SIGSEGV, etc.) via Mach ports before the OS terminates the process.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-bold shrink-0">2</div>
                                <p><strong className="text-white block mb-1">Analysis</strong> Takes a snapshot of the thread state and registers. AI analyzes the fault type (e.g., null pointer, stack overflow).</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold shrink-0">3</div>
                                <p><strong className="text-white block mb-1">Patch & Resume</strong> Writes safe instructions over the faulting code (Live Patcher) and updates the instruction pointer to resume execution.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative rounded-2xl overflow-hidden glass-panel p-2 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                            <img src={architectureSvg} alt="Architecture Diagram" className="w-full h-auto rounded-xl bg-black/40" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Architecture;
