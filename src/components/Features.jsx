import { motion } from 'framer-motion';
import { Shield, Cpu, Activity, Zap, FileCode, Terminal } from 'lucide-react';

const features = [
    {
        icon: <Activity className="w-8 h-8 text-blue-400" />,
        title: "Mach Exception Interception",
        description: "Low-level crash handling using Mach exceptions to catch SIGSEGV, SIGFPE, and more before the kernel kills the process."
    },
    {
        icon: <Cpu className="w-8 h-8 text-cyan-400" />,
        title: "AI-Driven Classification",
        description: "Real-time analysis of register states and memory access patterns to classify faults using a lightweight ML pipeline."
    },
    {
        icon: <Zap className="w-8 h-8 text-violet-400" />,
        title: "Live Binary Patching",
        description: "Injects machine code patches (NOP slides, jump corrections) directly into memory to bypass faulty instructions."
    },
    {
        icon: <Shield className="w-8 h-8 text-emerald-400" />,
        title: "Rust Safety Guard",
        description: "Core logic implemented in Rust ensures memory safety within the handler itself, preventing recursive crashes."
    },
    {
        icon: <Terminal className="w-8 h-8 text-amber-400" />,
        title: "Loop Detection",
        description: "Heuristic analysis prevents infinite sustain loops if a patch fails to resolve the underlying logic error."
    },
    {
        icon: <FileCode className="w-8 h-8 text-rose-400" />,
        title: "Zero Code Changes",
        description: "Works on compiled binaries. No source code access, recompilation, or symbol tables required."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A revolutionary approach to application stability on macOS.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-colors border border-white/5 group"
                        >
                            <div className="bg-white/5 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
