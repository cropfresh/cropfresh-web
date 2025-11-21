'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, ShieldCheck, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-green/10 rounded-full blur-[100px] animate-float" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary-orange/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-[80px] animate-pulse" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/60 backdrop-blur-sm text-primary-green text-sm font-semibold mb-8 shadow-sm"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-green"></span>
                            </span>
                            Revolutionizing Agriculture
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold font-display text-neutral-gray leading-[1.1] mb-6 tracking-tight">
                            The Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-orange">
                                Fresh Produce
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                            Connecting farmers directly to retailers with data-driven logistics, fair pricing, and unmatched transparency.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="#early-access">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-orange to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary-orange/25 hover:shadow-primary-orange/40 transition-all"
                                >
                                    Get Early Access <ArrowRight size={20} />
                                </motion.button>
                            </Link>
                            <Link href="#how-it-works">
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.8)' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm text-neutral-gray border border-white/60 px-8 py-4 rounded-full font-bold text-lg hover:text-primary-green transition-all shadow-sm"
                                >
                                    How it Works
                                </motion.button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-6 border-t border-gray-200/60 pt-8">
                            {[
                                { icon: TrendingUp, label: "Data-Driven", color: "text-blue-600" },
                                { icon: ShieldCheck, label: "Fair Pricing", color: "text-primary-green" },
                                { icon: Leaf, label: "Sustainable", color: "text-primary-orange" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + (i * 0.1) }}
                                    className="flex flex-col gap-2"
                                >
                                    <div className={`p-2 rounded-lg bg-white/50 w-fit ${item.color}`}>
                                        <item.icon size={24} />
                                    </div>
                                    <span className="font-semibold text-gray-700 text-sm">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 glass-card rounded-3xl p-6 border border-white/40 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl -z-10" />

                            {/* Mock Dashboard UI */}
                            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-inner">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 animate-pulse" />
                                        <div className="space-y-2">
                                            <div className="w-24 h-3 bg-gray-100 rounded animate-pulse" />
                                            <div className="w-16 h-2 bg-gray-100 rounded animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-50" />
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 rounded-xl bg-green-50/50 border border-green-100">
                                        <div className="text-xs text-green-600 font-medium mb-1">Total Revenue</div>
                                        <div className="text-2xl font-bold text-gray-800">$124.5k</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                                        <div className="text-xs text-orange-600 font-medium mb-1">Active Orders</div>
                                        <div className="text-2xl font-bold text-gray-800">1,284</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded bg-white shadow-sm" />
                                                <div className="w-20 h-2 bg-gray-200 rounded" />
                                            </div>
                                            <div className="w-12 h-2 bg-gray-200 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-8 glass-panel p-4 rounded-2xl shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Growth</div>
                                    <div className="text-lg font-bold text-gray-800">+24.5%</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 glass-panel p-4 rounded-2xl shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Trust Score</div>
                                    <div className="text-lg font-bold text-gray-800">98/100</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
