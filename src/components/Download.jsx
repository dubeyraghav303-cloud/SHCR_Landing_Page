import { motion } from 'framer-motion';
import { Download as DownloadIcon, AlertTriangle } from 'lucide-react';

const Download = () => {
    return (
        <section id="download" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto glass-panel p-12 rounded-2xl border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.15)]"
                >
                    <h2 className="text-4xl font-bold mb-6">Ready to Test SHCR?</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Experience the world's first self-healing crash runtime for macOS.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <a
                            href="https://github.com/dubeyraghav303-cloud/SHCR/releases/download/v1.0/SHCR_Installer.dmg"
                            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg transform hover:scale-105 transition-all"
                        >
                            <DownloadIcon className="w-6 h-6" />
                            Download Installer (.dmg)
                        </a>

                        <div className="text-sm text-gray-400 space-y-2">
                            <div className="flex items-center justify-center gap-2 text-yellow-500/80">
                                <AlertTriangle className="w-4 h-4" />
                                <span>Hackathon Build – No Code Signing/Notarization</span>
                            </div>
                            <p>Compatible with macOS 13+ (Ventura/Sonoma). Apple Silicon Supported.</p>
                            <p className="text-xs text-gray-500">
                                You may need to right-click &gt; Open to bypass Gatekeeper.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Download;
