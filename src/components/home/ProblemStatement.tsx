'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock, ArrowDown, UserX, ShoppingBag } from 'lucide-react';

const mainProblems = [
    {
        icon: AlertTriangle,
        stat: "₹92,000 Cr",
        title: "Annual Wastage",
        description: "40% of produce rots before reaching consumers due to fragmented logistics and zero pre-harvest planning."
    },
    {
        icon: TrendingDown,
        stat: "40-60%",
        title: "Value Lost",
        description: "Farmers lose over half their crop value to middlemen exploitation and distress sales."
    },
    {
        icon: Clock,
        stat: "30-45 Days",
        title: "Payment Delays",
        description: "Long waiting periods for payments push farmers into severe debt cycles and financial instability."
    }
];

const farmerProblems = [
    "Distress sales due to no pre-harvest buyers",
    "40–60% loss of crop value because of middlemen",
    "Payment delays of 30–45 days push farmers into debt cycles",
    "Zero reliable access to logistics",
    "No information on market demand, prices, or overproduction risks",
    "Wastage and spoilage of nearly ₹92,000 crore per year"
];

const buyerProblems = [
    "Inconsistent supply chains disrupting operations",
    "Unpredictable pricing due to market volatility",
    "Quality fluctuations and lack of standardization",
    "No standardized grading or certification",
    "15–20% procurement cost lost to intermediaries",
    "No real-time visibility into nearby farmers"
];

export default function ProblemStatement() {
    return (
        <section className="py-24 bg-neutral-gray text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-400 font-medium text-sm mb-6 border border-red-500/20"
                    >
                        The Broken System
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-display mb-6"
                    >
                        Agriculture is in <span className="text-red-500">Crisis</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        The current supply chain is failing both the people who grow our food and the businesses that sell it.
                    </motion.p>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {mainProblems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
                        >
                            <div className="mb-6 relative inline-block">
                                <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full animate-pulse"></div>
                                <item.icon size={40} className="text-red-500 relative z-10" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold font-display text-white mb-2 group-hover:text-red-400 transition-colors">
                                {item.stat}
                            </h3>
                            <h4 className="text-xl font-bold text-gray-200 mb-3">{item.title}</h4>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Problems Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Farmers Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-primary-orange">
                                <UserX size={24} />
                            </div>
                            <h3 className="text-2xl font-bold font-display">Farmers Face Severe Losses</h3>
                        </div>
                        <ul className="space-y-4">
                            {farmerProblems.map((problem, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                                    <span>{problem}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Buyers Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <ShoppingBag size={24} />
                            </div>
                            <h3 className="text-2xl font-bold font-display">Buyers Struggle with Reliability</h3>
                        </div>
                        <ul className="space-y-4">
                            {buyerProblems.map((problem, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                                    <span>{problem}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-20"
                >
                    <a
                        href="#solutions"
                        className="inline-flex items-center gap-2 text-primary-green font-bold hover:text-white transition-colors group"
                    >
                        See How We Solve This
                        <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
