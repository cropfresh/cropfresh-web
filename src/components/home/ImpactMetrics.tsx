'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    TrendingUp,
    Clock,
    Wallet,
    Globe,
    Sprout,
    Percent,
    CheckCircle2,
    Truck,
    BarChart3,
    Zap
} from 'lucide-react';

const metrics = {
    farmers: [
        {
            title: "Increase in Farmer Income",
            target: "+20–40%",
            suffix: "increase in earnings",
            description: "Measures the difference between mandi net income vs. CropFresh net income. Driven by zero commission, verified quality, and direct buyer matching.",
            icon: TrendingUp,
            color: "bg-green-100 text-primary-green"
        },
        {
            title: "Reduction in Payment Delays",
            target: "100%",
            suffix: "payments made T+0",
            description: "Instant UPI escrow ensures farmers receive money in seconds, not 15–45 days.",
            icon: Zap,
            color: "bg-orange-100 text-primary-orange"
        },
        {
            title: "Price Realization",
            target: "15–25%",
            suffix: "higher than mandi price",
            description: "Tracks how much additional value the farmer actually receives after deductions.",
            icon: Wallet,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Access to New Buyer Markets",
            target: "3+",
            suffix: "new buyer categories",
            description: "Connecting farmers to hotels, retailers, Q-commerce, and exporters for increased demand and stability.",
            icon: Globe,
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Reduction in Post-Harvest Loss",
            target: "<5%",
            suffix: "wastage (down from 15-20%)",
            description: "Enabled by AI grading, fast logistics, and accurate matching.",
            icon: Sprout,
            color: "bg-red-100 text-red-600"
        }
    ],
    buyers: [
        {
            title: "Cost Savings on Procurement",
            target: "10–25%",
            suffix: "reduction in landed cost",
            description: "Verified quality means less sorting waste and fewer rejects.",
            icon: Percent,
            color: "bg-green-100 text-primary-green"
        },
        {
            title: "Quality Consistency Score",
            target: "95%",
            suffix: "orders match promised grade",
            description: "Each batch comes with a Digital Twin + Agent verification.",
            icon: CheckCircle2,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Fill Rate / Order Completion",
            target: ">90%",
            suffix: "fulfilment on demanded SKUs",
            description: "Ensures predictable supply for retailers, Q-commerce, and hotels.",
            icon: BarChart3,
            color: "bg-orange-100 text-primary-orange"
        },
        {
            title: "Delivery Timeliness",
            target: "90%",
            suffix: "deliveries within time slot",
            description: "Tracks reliability of last-mile delivery and hauler network.",
            icon: Clock,
            color: "bg-purple-100 text-purple-600"
        }
    ],
    haulers: [
        {
            title: "Increase in Daily Earnings",
            target: "+25–40%",
            suffix: "higher earnings",
            description: "Achieved via multi-pickup routing, continuous loads, and instant payout.",
            icon: Wallet,
            color: "bg-green-100 text-primary-green"
        },
        {
            title: "Vehicle Utilization Rate",
            target: "70–85%",
            suffix: "capacity utilization",
            description: "The logistics engine minimizes empty return trips.",
            icon: Truck,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Payment Speed",
            target: "120s",
            suffix: "payout time after delivery",
            description: "Eliminates cash-based delays and middlemen deductions.",
            icon: Zap,
            color: "bg-orange-100 text-primary-orange"
        },
        {
            title: "Trip Density per Day",
            target: "2–3",
            suffix: "successful trips per day",
            description: "Higher density means higher earning potential per hauler.",
            icon: TrendingUp,
            color: "bg-purple-100 text-purple-600"
        }
    ]
};

export default function ImpactMetrics() {
    const [activeTab, setActiveTab] = useState<'farmers' | 'buyers' | 'haulers'>('farmers');

    return (
        <section className="py-24 bg-neutral-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-neutral-gray mb-6">
                        How We Measure <span className="text-primary-green">Real Change</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        CropFresh is built to create meaningful, measurable impact across the entire agricultural ecosystem.
                    </p>

                    {/* Tabs */}
                    <div className="inline-flex bg-white p-1.5 rounded-full shadow-sm border border-gray-200 relative">
                        {(['farmers', 'buyers', 'haulers'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative z-10 px-6 md:px-10 py-3 rounded-full font-bold text-sm md:text-base capitalize transition-all duration-300 ${activeTab === tab
                                        ? 'bg-neutral-gray text-white shadow-md'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {tab} Impact
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                    >
                        {metrics[activeTab].map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${metric.color}`}>
                                        <metric.icon size={24} />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl md:text-3xl font-bold font-display text-neutral-gray">
                                            {metric.target}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-neutral-gray mb-2">
                                    {metric.title}
                                </h3>
                                <div className="text-sm font-semibold text-primary-green mb-3">
                                    {metric.suffix}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {metric.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
