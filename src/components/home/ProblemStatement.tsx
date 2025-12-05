'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock, ArrowRight, UserX, ShoppingBag, XCircle } from 'lucide-react';

const mainProblems = [
    {
        icon: AlertTriangle,
        stat: "₹92,000 Cr",
        title: "Annual Wastage",
        description: "Produce rots before reaching consumers due to fragmented logistics.",
        color: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-100"
    },
    {
        icon: TrendingDown,
        stat: "40-60%",
        title: "Value Lost",
        description: "Farmers lose over half their crop value to middlemen exploitation.",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-100"
    },
    {
        icon: Clock,
        stat: "45 Days",
        title: "Payment Delays",
        description: "Long waiting periods push farmers into severe debt cycles.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100"
    }
];

const farmerProblems = [
    "Distress sales due to no pre-harvest buyers",
    "Zero reliable access to logistics",
    "No information on market demand",
    "Exploitative middleman commissions"
];

const buyerProblems = [
    "Inconsistent supply chains",
    "Quality fluctuations & lack of grading",
    "15–20% procurement cost lost",
    "No real-time visibility of stock"
];

export default function ProblemStatement() {
    return (
        <section id="problems" className="py-32 bg-[#FFFBF0] relative overflow-hidden">
            {/* Organic Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-orange-200/20 rounded-full blur-[120px] animate-blob-bounce" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-red-200/20 rounded-full blur-[100px] animate-blob-bounce" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 font-medium text-sm mb-8 shadow-sm"
                    >
                        <AlertTriangle size={16} />
                        <span>The Broken System</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold font-display text-neutral-gray mb-8 leading-tight"
                    >
                        Agriculture is in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Crisis</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                        The current supply chain is failing both the people who grow our food and the businesses that sell it.
                    </motion.p>
                </div>

                {/* Bento Grid Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {mainProblems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            whileHover={{ y: -8 }}
                            className={`bg-white p-8 rounded-[2rem] border ${item.border} shadow-xl shadow-orange-900/5 relative overflow-hidden group h-full flex flex-col`}
                        >
                            <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 shadow-sm`}>
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-5xl font-bold font-display text-neutral-gray mb-3 tracking-tight">
                                    {item.stat}
                                </h3>
                                <h4 className={`text-xl font-bold ${item.color} mb-4`}>{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Split Problem View */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Farmers Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-orange-100 shadow-2xl shadow-orange-900/5 relative overflow-hidden h-full"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[80px] -mr-16 -mt-16 opacity-60" />

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-primary-orange shadow-sm">
                                <UserX size={28} />
                            </div>
                            <h3 className="text-3xl font-bold font-display text-neutral-gray">Farmers Face Losses</h3>
                        </div>

                        <ul className="space-y-6 relative z-10">
                            {farmerProblems.map((problem, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-600 group">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                                        <XCircle size={16} className="text-red-500" />
                                    </div>
                                    <span className="text-lg font-medium">{problem}</span>
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
                        className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-blue-100 shadow-2xl shadow-blue-900/5 relative overflow-hidden h-full"
                    >
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -ml-16 -mb-16 opacity-60" />

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shadow-sm">
                                <ShoppingBag size={28} />
                            </div>
                            <h3 className="text-3xl font-bold font-display text-neutral-gray">Buyers Lack Reliability</h3>
                        </div>

                        <ul className="space-y-6 relative z-10">
                            {buyerProblems.map((problem, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-600 group">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                                        <XCircle size={16} className="text-red-500" />
                                    </div>
                                    <span className="text-lg font-medium">{problem}</span>
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
                        className="inline-flex items-center gap-3 text-white font-bold text-lg hover:shadow-lg hover:shadow-primary-green/30 transition-all group px-10 py-5 rounded-full bg-gradient-to-r from-primary-green to-green-600 transform hover:-translate-y-1"
                    >
                        See How We Solve This
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
