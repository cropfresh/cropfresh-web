'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight, CheckCircle, ShieldCheck, Leaf, Database, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { MouseEvent } from 'react';

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect - Subtle */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(21, 128, 61, 0.08),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Background Image - High Definition & Visible */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Sustainable Agriculture"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                {/* Minimal Overlay for Text Readability Only */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/90" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center"
                    >
                        {/* Premium Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-white/60 backdrop-blur-md text-primary-green text-sm font-bold mb-8 shadow-sm hover:shadow-md transition-all cursor-default group"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-green"></span>
                            </span>
                            <span className="tracking-wide uppercase text-xs font-bold text-neutral-gray/80 group-hover:text-primary-green transition-colors">
                                AI-Powered Agri-Intelligence
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-neutral-gray leading-[1.1] mb-8 tracking-tight drop-shadow-sm">
                            Rebuilding India&apos;s <br />
                            <span className="text-gradient-premium relative inline-block">
                                Agri Supply Chain
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-green opacity-40" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 53.6522 1.99999 100.002 2.00002C146.352 2.00005 198.002 7.00002 198.002 7.00002" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-gray mb-10 leading-relaxed max-w-3xl font-medium mx-auto drop-shadow-sm">
                            Connecting farmers directly to retailers with <span className="text-primary-orange font-semibold">data-driven logistics</span>, fair pricing, and unmatched transparency.
                        </p>

                        {/* Magnetic CTAs */}
                        <div className="flex flex-col sm:flex-row gap-5 mb-16 justify-center w-full items-center">
                            <Link href="#early-access">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-gradient-to-r from-primary-orange to-orange-600 text-white rounded-full font-bold text-lg shadow-xl shadow-primary-orange/20 overflow-hidden"
                                >
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                    <span className="relative flex items-center gap-2">
                                        Get Early Access <ArrowRight size={20} />
                                    </span>
                                </motion.button>
                            </Link>
                            <Link href="#how-it-works">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white/60 backdrop-blur-sm border border-white/60 text-neutral-gray rounded-full font-bold text-lg hover:bg-white/90 hover:text-primary-green transition-all shadow-sm hover:shadow-md"
                                >
                                    How it Works
                                </motion.button>
                            </Link>
                        </div>

                        {/* Floating Trust Cards */}
                        <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl">
                            {[
                                { icon: Database, label: "Data Driven", color: "text-blue-700", bg: "bg-blue-50" },
                                { icon: ShieldCheck, label: "Fair Pricing", color: "text-primary-green", bg: "bg-green-50" },
                                { icon: Zap, label: "Efficiency", color: "text-yellow-700", bg: "bg-yellow-50" },
                                { icon: Leaf, label: "Sustainable", color: "text-primary-orange", bg: "bg-orange-50" },
                                { icon: CheckCircle, label: "Trust", color: "text-teal-700", bg: "bg-teal-50" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + (i * 0.1) }}
                                    className="glass-premium glass-card-hover flex items-center gap-3 px-5 py-3 rounded-2xl cursor-default"
                                >
                                    <div className={`p-2 rounded-xl ${item.bg} ${item.color}`}>
                                        <item.icon size={18} />
                                    </div>
                                    <span className="font-bold text-neutral-gray text-sm">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
