'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, ShieldCheck, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-green/20 rounded-full blur-[120px] animate-blob-bounce" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary-orange/20 rounded-full blur-[120px] animate-blob-bounce" style={{ animationDelay: '2s', animationDirection: 'reverse' }} />
                <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-md text-primary-green text-sm font-bold mb-8 shadow-sm hover:bg-white/50 transition-colors cursor-default"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-green"></span>
                            </span>
                            Revolutionizing Agriculture
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold font-display text-neutral-gray leading-[1.1] mb-6 tracking-tight">
                            The Future of <br />
                            <span className="text-gradient relative">
                                Fresh Produce
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-orange opacity-40" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7509 2.83622 83.8253 -1.51399 198.006 5.99998" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-medium">
                            Connecting farmers directly to retailers with data-driven logistics, fair pricing, and unmatched transparency.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="#early-access">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-orange to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary-orange/25 hover:shadow-primary-orange/40 transition-all relative overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center gap-2">Get Early Access <ArrowRight size={20} /></span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-primary-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.button>
                            </Link>
                            <Link href="#how-it-works">
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.8)' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/40 backdrop-blur-sm text-neutral-gray border border-white/60 px-8 py-4 rounded-full font-bold text-lg hover:text-primary-green transition-all shadow-sm hover:shadow-md"
                                >
                                    How it Works
                                </motion.button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-6 border-t border-gray-200/60 pt-8">
                            {[
                                { icon: TrendingUp, label: "Data-Driven", color: "text-blue-600", bg: "bg-blue-50" },
                                { icon: ShieldCheck, label: "Fair Pricing", color: "text-primary-green", bg: "bg-green-50" },
                                { icon: Leaf, label: "Sustainable", color: "text-primary-orange", bg: "bg-orange-50" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + (i * 0.1) }}
                                    className="flex flex-col gap-3 group cursor-default"
                                >
                                    <div className={`p-3 rounded-2xl w-fit ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon size={24} />
                                    </div>
                                    <span className="font-bold text-gray-700 text-sm">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:block perspective-1000"
                    >
                        <div className="relative z-10 glass-card rounded-[2.5rem] p-8 border border-white/60 shadow-2xl transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-700 ease-out">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 rounded-[2.5rem] -z-10" />

                            {/* Mock Dashboard UI */}
                            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-inner border border-white/50">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 animate-pulse" />
                                        <div className="space-y-2">
                                            <div className="w-32 h-4 bg-gray-100 rounded-full animate-pulse" />
                                            <div className="w-20 h-3 bg-gray-100 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100" />
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="p-5 rounded-2xl bg-green-50/80 border border-green-100/50 hover:scale-[1.02] transition-transform">
                                        <div className="text-xs text-green-700 font-bold uppercase tracking-wider mb-2">Total Revenue</div>
                                        <div className="text-3xl font-bold text-gray-800">$124.5k</div>
                                        <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                                            <TrendingUp size={12} /> +12% vs last month
                                        </div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-orange-50/80 border border-orange-100/50 hover:scale-[1.02] transition-transform">
                                        <div className="text-xs text-orange-700 font-bold uppercase tracking-wider mb-2">Active Orders</div>
                                        <div className="text-3xl font-bold text-gray-800">1,284</div>
                                        <div className="text-xs text-orange-600 mt-1">48 pending delivery</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50/80 border border-gray-100/50 hover:bg-white transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-100" />
                                                <div className="w-24 h-3 bg-gray-200 rounded-full" />
                                            </div>
                                            <div className="w-16 h-3 bg-gray-200 rounded-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-8 glass-panel p-5 rounded-2xl shadow-xl border border-white/60"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-100 rounded-xl text-green-600">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Growth</div>
                                    <div className="text-xl font-bold text-gray-800">+24.5%</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 glass-panel p-5 rounded-2xl shadow-xl border border-white/60"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Trust Score</div>
                                    <div className="text-xl font-bold text-gray-800">98/100</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
