'use client';

import { motion } from 'framer-motion';
import {
    TrendingUp,
    AlertCircle,
    Zap,
    Target,
    Users,
    DollarSign,
    BarChart3,
    Smartphone,
    Sparkles,
    Building2,
    ShoppingCart,
    Utensils,
    Package,
    Globe
} from 'lucide-react';

const marketStats = [
    { label: "Annual Production Value", value: "$250B+", icon: DollarSign },
    { label: "Metric Tons Yearly", value: "900M+", icon: BarChart3 },
    { label: "Farmers in Network", value: "120M+", icon: Users },
    { label: "B2B Market Size", value: "$120B", icon: Building2 }
];

const opportunityGaps = [
    { title: "Price Volatility", description: "Prices swing 50–200% daily due to fragmented supply and no forecasting", icon: TrendingUp },
    { title: "20-30% Wastage", description: "Poor logistics, slow movement, and no cold-chain integration", icon: AlertCircle },
    { title: "Manual Grading", description: "Disputes and manipulation with no proof-of-quality", icon: Target },
    { title: "Payment Delays", description: "15–45 day credit cycles force farmers into debt traps", icon: DollarSign },
    { title: "Quality Issues", description: "Buyers face unpredictable supply with no traceability", icon: Package },
    { title: "Broken Logistics", description: "Empty return trucks and no coordination create massive inefficiency", icon: AlertCircle }
];

const timingAdvantages = [
    { title: "UPI & India Stack", description: "Instant payments now possible — revolutionary for farmers", icon: Zap },
    { title: "400M+ Rural Smartphones", description: "Voice-first AI marketplace adoption is exploding", icon: Smartphone },
    { title: "Affordable AI", description: "Computer vision grading and predictive models are now real-time", icon: Sparkles },
    { title: "Post-COVID Demand", description: "Buyers want traceable, verified quality and digital procurement", icon: ShoppingCart }
];

const targetSegments = [
    { name: "Retail Chains", value: "₹40K Cr", icon: ShoppingCart, color: "bg-green-100 text-primary-green" },
    { name: "Q-Commerce", value: "₹30K Cr", icon: Zap, color: "bg-orange-100 text-primary-orange" },
    { name: "HoReCa", value: "₹50K Cr", icon: Utensils, color: "bg-blue-100 text-blue-600" },
    { name: "Food Processing", value: "₹70K Cr", icon: Package, color: "bg-purple-100 text-purple-600" },
    { name: "Export Market", value: "₹20K Cr", icon: Globe, color: "bg-red-100 text-red-600" }
];

export default function MarketOpportunity() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-display text-neutral-gray mb-6"
                    >
                        A <span className="text-primary-green">$400B+</span> Market Opportunity
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600"
                    >
                        India&apos;s agricultural supply chain is massive, fragmented, and ready for AI-driven transformation.
                    </motion.p>
                </div>

                {/* Section 1: Market Size */}
                <div className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold font-display text-neutral-gray mb-8 text-center"
                    >
                        The Size of the Opportunity
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {marketStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                            >
                                <div className="w-14 h-14 rounded-full bg-green-100 text-primary-green mx-auto mb-4 flex items-center justify-center">
                                    <stat.icon size={28} />
                                </div>
                                <div className="text-3xl font-bold font-display text-primary-green mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Opportunity Gaps */}
                <div className="mb-24 bg-white rounded-3xl p-8 md:p-12 shadow-sm">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold font-display text-neutral-gray mb-8 text-center"
                    >
                        The Opportunity Gap
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {opportunityGaps.map((gap, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex gap-4"
                            >
                                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                                    <gap.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-gray mb-1">{gap.title}</h4>
                                    <p className="text-sm text-gray-600">{gap.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Why Now */}
                <div className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold font-display text-neutral-gray mb-8 text-center"
                    >
                        Why This Moment is Perfect
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {timingAdvantages.map((advantage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-primary-green/5 to-primary-green/10 rounded-2xl p-6 border border-primary-green/20"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-green text-white flex items-center justify-center flex-shrink-0">
                                        <advantage.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-neutral-gray mb-2">{advantage.title}</h4>
                                        <p className="text-gray-600">{advantage.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 4: Strategic Position */}
                <div className="mb-24 bg-neutral-gray rounded-3xl p-8 md:p-12 text-white">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold font-display mb-8 text-center"
                    >
                        CropFresh&apos;s Strategic Position
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                                <Users size={36} className="text-primary-green" />
                            </div>
                            <div className="text-4xl font-bold font-display mb-2">120M+</div>
                            <div className="text-lg font-semibold mb-2">Farmers</div>
                            <p className="text-white/80 text-sm">85% small/marginal farmers need better prices and faster payments</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                                <Building2 size={36} className="text-primary-orange" />
                            </div>
                            <div className="text-4xl font-bold font-display mb-2">12M+</div>
                            <div className="text-lg font-semibold mb-2">B2B Buyers</div>
                            <p className="text-white/80 text-sm">Hotels, retailers, Q-commerce need standardized, reliable supply</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                                <Package size={36} className="text-blue-400" />
                            </div>
                            <div className="text-4xl font-bold font-display mb-2">5M+</div>
                            <div className="text-lg font-semibold mb-2">Haulers</div>
                            <p className="text-white/80 text-sm">Logistics operators need better load optimization and earnings</p>
                        </motion.div>
                    </div>
                </div>

                {/* Section 5: Target Segments */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold font-display text-neutral-gray mb-8 text-center"
                    >
                        High-Growth Target Segments
                    </motion.h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                        {targetSegments.map((segment, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all hover:-translate-y-1"
                            >
                                <div className={`w-14 h-14 rounded-full ${segment.color} mx-auto mb-3 flex items-center justify-center`}>
                                    <segment.icon size={24} />
                                </div>
                                <div className="text-xl font-bold font-display text-neutral-gray mb-1">
                                    {segment.value}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    {segment.name}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
