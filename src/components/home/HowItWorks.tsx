'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mic,
    Truck,
    ScanLine,
    Banknote,
    ShoppingBag,
    MapPin,
    Navigation,
    CheckCircle2,
    Wallet,
    ArrowRight
} from 'lucide-react';

const steps = {
    farmers: [
        {
            title: "List Your Crop",
            subtitle: "Voice or Photo",
            icon: Mic,
            description: "Simply tap the mic and say: \"Tomato 200 kg, ₹15 per kg\". Or upload photos. AI instantly creates your listing with estimated earnings.",
            color: "from-green-400 to-emerald-600",
            bg: "bg-green-50",
            accent: "text-emerald-600"
        },
        {
            title: "Quality Verification",
            subtitle: "AI + Field Agent",
            icon: ScanLine,
            description: "Get an instant AI pre-grade. A field agent visits to verify quality using our Digital Twin tech, ensuring you get the fair price you deserve.",
            color: "from-blue-400 to-indigo-600",
            bg: "bg-blue-50",
            accent: "text-blue-600"
        },
        {
            title: "Pickup & Payment",
            subtitle: "Instant & Secure",
            icon: Banknote,
            description: "We pick up from your farm. Digital weighing ensures accuracy. Payment is credited to your bank account instantly via UPI upon handover.",
            color: "from-orange-400 to-red-500",
            bg: "bg-orange-50",
            accent: "text-orange-600"
        }
    ],
    buyers: [
        {
            title: "Browse Verified Stock",
            subtitle: "Real-time Inventory",
            icon: ShoppingBag,
            description: "Access a live marketplace of verified produce. View Digital Twins with detailed quality metrics, photos, and shelf-life predictions.",
            color: "from-purple-400 to-violet-600",
            bg: "bg-purple-50",
            accent: "text-purple-600"
        },
        {
            title: "All-Inclusive Price",
            subtitle: "No Hidden Costs",
            icon: Wallet,
            description: "See the final delivered price instantly. Includes produce, grading, transport, and insurance. Save 15-25% compared to traditional procurement.",
            color: "from-emerald-400 to-teal-600",
            bg: "bg-emerald-50",
            accent: "text-emerald-600"
        },
        {
            title: "Trusted Delivery",
            subtitle: "Live Tracking",
            icon: Truck,
            description: "Choose doorstep delivery or hub pickup. Track your shipment in real-time. Verify quality upon arrival with our dispute-free guarantee.",
            color: "from-blue-400 to-cyan-600",
            bg: "bg-cyan-50",
            accent: "text-cyan-600"
        }
    ],
    haulers: [
        {
            title: "Find Nearby Jobs",
            subtitle: "Smart Matching",
            icon: MapPin,
            description: "View available loads in your vicinity. See transparent per-km rates and total earnings before you accept. No idle waiting.",
            color: "from-orange-400 to-amber-500",
            bg: "bg-amber-50",
            accent: "text-amber-600"
        },
        {
            title: "Efficient Pickup",
            subtitle: "Optimized Routes",
            icon: Navigation,
            description: "Get turn-by-turn navigation to farm or hub. QR-tagged crates make loading fast and error-free. Maximize your daily trips.",
            color: "from-indigo-400 to-blue-600",
            bg: "bg-indigo-50",
            accent: "text-indigo-600"
        },
        {
            title: "Instant Earnings",
            subtitle: "Zero Delays",
            icon: CheckCircle2,
            description: "Complete the delivery, scan the drop-off QR, and get paid instantly. No weekly settlements or chasing payments.",
            color: "from-green-400 to-lime-600",
            bg: "bg-lime-50",
            accent: "text-lime-600"
        }
    ]
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.95,
        transition: {
            duration: 0.2
        }
    }
};

export default function HowItWorks() {
    const [activeTab, setActiveTab] = useState<'farmers' | 'buyers' | 'haulers'>('farmers');

    return (
        <section id="how-it-works" className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary-green/10 text-primary-green text-sm font-bold mb-4 tracking-wide uppercase">
                            Simple Process
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold font-display text-neutral-gray mb-6 tracking-tight">
                            How <span className="text-primary-green relative">
                                CropFresh
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-green/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span> Works
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Experience a seamless supply chain designed for transparency, speed, and trust.
                        </p>

                        {/* Animated Tabs */}
                        <div className="inline-flex bg-white p-2 rounded-full shadow-xl shadow-gray-200/50 border border-gray-100 relative">
                            {(['farmers', 'buyers', 'haulers'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative z-10 px-8 py-3 rounded-full font-bold text-base transition-colors duration-300 capitalize ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-800'
                                        }`}
                                >
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-neutral-gray rounded-full shadow-lg"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">For {tab}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
                        >
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10 overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary-green via-primary-orange to-primary-green w-full"
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '100%' }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </div>

                            {steps[activeTab].map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative group"
                                >
                                    <div className="h-full bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:shadow-primary-green/10 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden">

                                        {/* Hover Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                        {/* Step Number Badge */}
                                        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center font-bold text-gray-400 group-hover:bg-white group-hover:text-primary-green group-hover:shadow-md transition-all duration-300">
                                            {index + 1}
                                        </div>

                                        {/* Icon Container */}
                                        <div className={`w-24 h-24 rounded-3xl ${step.bg} ${step.accent} flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-500`}>
                                            <step.icon size={40} strokeWidth={1.5} />
                                            {/* Pulse Effect */}
                                            <div className={`absolute inset-0 rounded-3xl ${step.bg} opacity-50 animate-ping group-hover:animate-none`} style={{ animationDuration: '3s' }} />
                                        </div>

                                        <h3 className="text-2xl font-bold font-display text-neutral-gray mb-2 group-hover:text-primary-green transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <span className={`text-sm font-semibold ${step.accent} mb-4 block uppercase tracking-wider`}>
                                            {step.subtitle}
                                        </span>

                                        <p className="text-gray-600 leading-relaxed relative z-10">
                                            {step.description}
                                        </p>

                                        {/* Bottom Decoration */}
                                        <div className={`h-1.5 w-12 rounded-full mt-8 bg-gradient-to-r ${step.color} opacity-30 group-hover:w-24 group-hover:opacity-100 transition-all duration-500`} />
                                    </div>

                                    {/* Mobile Connector Arrow */}
                                    {index < 2 && (
                                        <div className="md:hidden flex justify-center py-4 text-gray-300">
                                            <ArrowRight className="transform rotate-90" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
