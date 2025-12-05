'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import { Users, Heart, Sprout, Globe } from 'lucide-react';

const values = [
    {
        icon: Users,
        title: "Farmer First",
        description: "We believe in empowering farmers with technology to reclaim their profits and dignity."
    },
    {
        icon: Heart,
        title: "Transparent Trust",
        description: "Building a supply chain where every transaction is visible, fair, and honest."
    },
    {
        icon: Sprout,
        title: "Sustainable Growth",
        description: "Creating a system that reduces wastage and ensures food security for generations."
    },
    {
        icon: Globe,
        title: "Community Impact",
        description: "Connecting rural producers with urban consumers to foster a stronger community."
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background-light overflow-hidden">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-green/10 rounded-full blur-[120px] animate-blob-bounce" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary-orange/10 rounded-full blur-[100px] animate-blob-bounce" style={{ animationDelay: '2s' }} />
                </div>

                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-display text-neutral-gray mb-6">
                            Revolutionizing <br />
                            <span className="text-gradient">Agriculture</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            CropFresh is on a mission to eliminate food wastage and ensure fair prices for farmers through AI-driven direct market access.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story / Mission */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-green/20 to-transparent mix-blend-overlay" />
                                {/* Placeholder for a team or farm image */}
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                    <Sprout size={64} />
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-orange/20 rounded-full blur-2xl -z-10" />
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-green/20 rounded-full blur-2xl -z-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold font-display text-neutral-gray mb-6">
                                Bridging the Gap
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                For decades, the agricultural supply chain has been plagued by inefficiencies, resulting in massive food wastage and unfair losses for farmers. Middlemen took the lion&apos;s share, while producers struggled to survive.
                            </p>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                We built CropFresh to change this narrative. By leveraging cutting-edge AI and a robust logistics network, we connect farmers directly with buyers, ensuring transparency, speed, and fair value for everyone involved.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold font-display text-neutral-gray mb-4">Our Core Values</h2>
                        <p className="text-gray-600">The principles that drive every decision we make.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 rounded-2xl border border-white/60 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary-green/10 flex items-center justify-center text-primary-green mb-6 group-hover:scale-110 transition-transform">
                                    <value.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-gray mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
