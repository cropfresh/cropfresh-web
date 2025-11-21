'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Banknote,
    ScanLine,
    Users,
    Truck,
    ShieldCheck,
    CheckCircle2,
    Leaf,
    LayoutDashboard,
    CreditCard,
    ChevronRight
} from 'lucide-react';

const farmerSolutions = [
    {
        category: "Pricing & Payments",
        icon: Banknote,
        color: "bg-green-100 text-primary-green",
        items: [
            { title: "Fair, Transparent Pricing", description: "AI-powered price visibility before listing with zero middlemen and no hidden cuts—farmers set their own selling price" },
            { title: "Zero Commission", description: "100% of the selling price goes to farmers; platform charges only buyers" },
            { title: "Instant UPI Payments", description: "Money released instantly on delivery confirmation with automated escrow—no 15–45 day delays" }
        ]
    },
    {
        category: "Quality & Verification",
        icon: ScanLine,
        color: "bg-blue-100 text-blue-600",
        items: [
            { title: "Verified Digital Grading", description: "AI + field agent verification prevents unfair downgrades; photo-based \"Digital Twin\" proof protects farmers from disputes" },
            { title: "Packaging & Quality Support", description: "CropFresh crate bank with Pour & Score method for accurate quality assessment and standardized crates to prevent damage" },
            { title: "No Fraud in Weighing", description: "Digital weighing with auto-billing; verified crate weights logged in the app" }
        ]
    },
    {
        category: "Market Access",
        icon: Users,
        color: "bg-purple-100 text-purple-600",
        items: [
            { title: "Guaranteed Buyers & Orders", description: "Sell directly to retailers, hotels, and processors with automatic matching to high-demand buyers—no dependency on local mandi demand" },
            { title: "Sell Every Grade (Zero Wastage)", description: "Grade A to retail/hotels, Grade B to processors, Grade C to pulp/puree/dehydration buyers" },
            { title: "Future Harvest Booking", description: "Pre-sell crops 5–10 days before harvest with price protection and guaranteed buyers" }
        ]
    },
    {
        category: "Logistics & Convenience",
        icon: Truck,
        color: "bg-orange-100 text-primary-orange",
        items: [
            { title: "Low-Cost, Hassle-Free Logistics", description: "Farm-gate pickup for large loads, village drop points for small loads, and shared routing to reduce per-kg transport cost" },
            { title: "Reduce Waiting Time", description: "Scheduled pickups with digitally coordinated shipments—no mandi queues" },
            { title: "Voice-First App", description: "List crops using simple voice commands in any regional language—no typing or digital literacy required" }
        ]
    },
    {
        category: "Protection & Planning",
        icon: ShieldCheck,
        color: "bg-red-100 text-red-600",
        items: [
            { title: "Strong Dispute Protection", description: "AI comparison of before/after delivery photos, quick resolution, and platform risk buffer for minor losses" },
            { title: "Better Income Stability", description: "Fair-Play Contracts with price floors + upside share, AI crop planning recommendations, and market intelligence" }
        ]
    }
];

const buyerSolutions = [
    {
        category: "Quality Assurance",
        icon: CheckCircle2,
        color: "bg-green-100 text-primary-green",
        items: [
            { title: "Consistent, Verified Quality", description: "AI + agent-verified grading with shelf-life prediction ensures only high-quality produce is delivered" },
            { title: "Reduced Wastage", description: "2–3% wastage vs 15–20% in mandis through clean, sorted, uniform produce with verified crate-level quality" },
            { title: "Transparent Documentation", description: "QR-coded Digital Twin for every crate with full farm-to-delivery traceability and GST-ready invoices" }
        ]
    },
    {
        category: "Pricing & Supply",
        icon: Banknote,
        color: "bg-orange-100 text-primary-orange",
        items: [
            { title: "Stable, Predictable Prices", description: "All-Inclusive Sourcing Price (AISP) with fixed landed costs and optional monthly contract pricing" },
            { title: "Assured Supply", description: "Real-time farm inventory, pre-booking of future harvests, and multi-farm aggregation for large orders" },
            { title: "Better Business Planning", description: "Visibility into upcoming harvest availability, AI demand insights, and preferred buyer priority programs" }
        ]
    },
    {
        category: "Operations & Logistics",
        icon: Truck,
        color: "bg-blue-100 text-blue-600",
        items: [
            { title: "Fast, Reliable Logistics", description: "AI-assigned haulers with route optimization for on-time delivery" },
            { title: "Easy Platform Ordering", description: "Mobile + web dashboard with bulk ordering and multi-item sourcing capabilities" },
            { title: "Custom Delivery Modes", description: "Support for buyer fleet/self-logistics, discounts for ex-hub pickup, or full-service delivery options" }
        ]
    },
    {
        category: "Financial & Compliance",
        icon: CreditCard,
        color: "bg-purple-100 text-purple-600",
        items: [
            { title: "Seamless Credit Options (Phase-2)", description: "NBFC-powered invoice financing with 7–30 day credit terms while farmers receive instant payment" },
            { title: "Advanced Dispute Handling", description: "Photo/video proof from dispatch to delivery with AI damage detection for instant resolution" },
            { title: "Export-Ready Supply", description: "Residue tracking, field-agent verified compliance, and packhouse-ready produce" }
        ]
    }
];

export default function Features() {
    const [activeTab, setActiveTab] = useState<'farmers' | 'buyers'>('farmers');

    return (
        <section id="solutions" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-background-light" />
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-green/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-neutral-gray mb-6">
                            Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-orange">Everyone</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-10">
                            Whether you grow produce or sell it, CropFresh builds the bridge that makes your business thrive.
                        </p>

                        {/* Tabs */}
                        <div className="inline-flex bg-white/50 backdrop-blur-sm p-1.5 rounded-full shadow-lg border border-white/60 relative">
                            <button
                                onClick={() => setActiveTab('farmers')}
                                className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${activeTab === 'farmers'
                                    ? 'bg-primary-green text-white shadow-md scale-105'
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                                    }`}
                            >
                                <Leaf size={18} />
                                For Farmers
                            </button>
                            <button
                                onClick={() => setActiveTab('buyers')}
                                className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${activeTab === 'buyers'
                                    ? 'bg-primary-orange text-white shadow-md scale-105'
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                                    }`}
                            >
                                <LayoutDashboard size={18} />
                                For Buyers
                            </button>
                        </div>
                    </motion.div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
                    >
                        {(activeTab === 'farmers' ? farmerSolutions : buyerSolutions).map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                                className="glass-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group border border-white/60"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${category.color} transition-transform group-hover:scale-110 duration-300 shadow-sm`}>
                                        <category.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-display text-neutral-gray">
                                        {category.category}
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    {category.items.map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${activeTab === 'farmers' ? 'bg-green-50 text-primary-green' : 'bg-orange-50 text-primary-orange'
                                                }`}>
                                                <ChevronRight size={14} strokeWidth={3} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-neutral-gray mb-1 text-lg">{item.title}</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
