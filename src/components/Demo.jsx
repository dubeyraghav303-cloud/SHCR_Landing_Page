import { motion } from 'framer-motion';
import demoSvg from '../assets/demo.svg';

const Demo = () => {
    return (
        <section id="demo" className="py-24 relative">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">See It In Action</h2>
                    <p className="text-gray-400">Watch SHCR recover a crashing application in real-time.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10"
                >
                    <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-2 text-xs text-gray-500 font-mono">user@macos: ~/shcr-demo</span>
                    </div>
                    {/* Using SVG as the visual representation of the demo */}
                    <img src={demoSvg} alt="Terminal Demo" className="w-full h-auto bg-black" />
                </motion.div>
            </div>
        </section>
    );
};

export default Demo;
