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
    Wallet
} from 'lucide-react';

const steps = {
    farmers: [
        {
            title: "List Your Crop (Voice or Photo)",
            icon: Mic,
            description: "Open the app → Tap the mic. Say: \"Tomato 200 kg, ₹15 per kg\" in your language. Upload 2–4 photos. AI instantly shows estimated earnings. No typing. No forms. Zero commission.",
            color: "bg-green-100 text-primary-green"
        },
        {
            title: "Quality Verification (AI + Field Agent)",
            icon: ScanLine,
            description: "AI gives a pre-grade (A/B/C). A field agent verifies quality using the Digital Twin (photo proof). You see final verified price + guaranteed buyer demand. No more unfair downgrades.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Pickup & Instant Payment",
            icon: Banknote,
            description: "A vehicle arrives at your farm or nearby Drop Point. Crates are weighed and tagged. Buyer scans and confirms delivery. Instant UPI Payment is released to you. Money in your bank within seconds.",
            color: "bg-orange-100 text-primary-orange"
        }
    ],
    buyers: [
        {
            title: "Browse Verified Stock",
            icon: ShoppingBag,
            description: "View real-time inventory from farms. Every item has a Digital Twin: Photos, Grade, Weight, Shelf-life prediction, Farm location. You see exactly what you're buying.",
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Get an All-Inclusive Price (AISP)",
            icon: Wallet,
            description: "Platform shows the Delivered Price including Produce, Grading, Transport, Logistics insurance, and Platform margin. No hidden fees. No negotiation games. Save 15–25% compared to mandi landed cost.",
            color: "bg-green-100 text-primary-green"
        },
        {
            title: "Delivery & Trusted Logistics",
            icon: Truck,
            description: "Choose your mode: Delivered, Self-pickup, or Ex-Hub pickup. On delivery: Driver scans QR, you check photos vs. arrival. Any issue → AI resolves instantly.",
            color: "bg-blue-100 text-blue-600"
        }
    ],
    haulers: [
        {
            title: "Accept Jobs Nearby",
            icon: MapPin,
            description: "Haulers see available loads around them. Transparent per-km rate. Route preview + earning estimate before accepting. No waiting. No negotiation with agents.",
            color: "bg-orange-100 text-primary-orange"
        },
        {
            title: "Pickup from Farm or Drop Point",
            icon: Navigation,
            description: "Navigate to the best pickup location. Direct farm pickup for big loads. Village Drop Points for small loads. Crates are sealed with QR tags. Fast loading → more trips → more earnings.",
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Deliver & Get Paid Instantly",
            icon: CheckCircle2,
            description: "Deliver to Buyer or Hub. Scan the QR tag. Confirm drop. UPI payment is released instantly. No weekly settlements. No delayed cash.",
            color: "bg-green-100 text-primary-green"
        }
    ]
};

export default function HowItWorks() {
    const [activeTab, setActiveTab] = useState<'farmers' | 'buyers' | 'haulers'>('farmers');

    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background-light to-white" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-neutral-gray mb-6">
                            How <span className="text-primary-green">CropFresh</span> Works
                        </h2>
                        <p className="text-lg text-gray-600 mb-10">
                            We designed CropFresh to make agriculture simple, transparent, and profitable for everyone.
                        </p>

                        {/* Tabs */}
                        <div className="inline-flex bg-white/50 backdrop-blur-sm p-1.5 rounded-full shadow-lg border border-white/60 relative">
                            {(['farmers', 'buyers', 'haulers'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative z-10 px-6 md:px-10 py-3 rounded-full font-bold text-sm md:text-base capitalize transition-all duration-300 ${activeTab === tab
                                        ? 'bg-white text-primary-green shadow-md scale-105'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                                        }`}
                                >
                                    For {tab}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    >
                        {steps[activeTab].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                {/* Connector Line (Desktop) */}
                                {index < 2 && (
                                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-green/20 to-primary-green/40 -z-10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                                            className="h-full bg-primary-green"
                                        />
                                    </div>
                                )}

                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="glass-card rounded-3xl p-8 border border-white/60 hover:shadow-2xl transition-all duration-300 h-full group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-green to-primary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${step.color} mb-6 text-3xl font-bold relative mx-auto md:mx-0 shadow-inner`}>
                                        <step.icon size={32} />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-neutral-gray text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-white shadow-md">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold font-display text-neutral-gray mb-4 text-center md:text-left">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-center md:text-left text-sm">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
