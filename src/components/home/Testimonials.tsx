'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Tomato Farmer",
        location: "Kolar, Karnataka",
        avatar: "RK",
        rating: 5,
        text: "Before CropFresh, I used to wait 30-45 days for payment from mandis. Now I get money in my account within seconds of delivery. The AI grading is fair and I'm earning 30% more per quintal.",
        category: "farmer"
    },
    {
        name: "Priya Devi",
        role: "Vegetable Grower",
        location: "Hassan, Karnataka",
        avatar: "PD",
        rating: 5,
        text: "The voice-based app is amazing! I can list my produce in Kannada without typing. CropFresh connected me to hotels in Bangalore who buy my premium vegetables at fair prices.",
        category: "farmer"
    },
    {
        name: "Suresh Patil",
        role: "Onion Farmer",
        location: "Nashik, Maharashtra",
        avatar: "SP",
        rating: 5,
        text: "I used to lose 20% of my crop due to wastage and rejections. With CropFresh's Digital Twin verification, buyers trust the quality and I sell every grade—even B and C grade go to processors.",
        category: "farmer"
    },
    {
        name: "Arjun Menon",
        role: "Procurement Head",
        location: "Fresh Basket Supermarket Chain",
        avatar: "AM",
        rating: 5,
        text: "CropFresh has transformed our sourcing. We get verified Grade A produce with full traceability. Our wastage dropped from 18% to just 3%. The all-inclusive pricing makes budgeting so much easier.",
        category: "buyer"
    },
    {
        name: "Meera Sharma",
        role: "Operations Manager",
        location: "Green Leaf Hotels",
        avatar: "MS",
        rating: 5,
        text: "Consistency was our biggest problem. CropFresh delivers exactly what we order, every time. The Digital Twin photos help us verify quality before delivery. It's like having a direct farm connection.",
        category: "buyer"
    },
    {
        name: "Vikram Singh",
        role: "Logistics Partner",
        location: "Bangalore",
        avatar: "VS",
        rating: 5,
        text: "I used to make 2-3 trips per day with 40% empty returns. CropFresh's multi-pickup routing keeps my truck loaded both ways. My earnings increased by 35% and I get paid instantly after delivery.",
        category: "hauler"
    },
    {
        name: "Deepak Reddy",
        role: "Transport Operator",
        location: "Kolar-Bangalore Route",
        avatar: "DR",
        rating: 5,
        text: "The app shows me nearby loads and exact routes. No more waiting at mandis or dealing with agents. I can plan my day, earn more, and get home on time. Best platform for haulers!",
        category: "hauler"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-display text-neutral-gray mb-6"
                    >
                        Trusted by <span className="text-primary-green">Thousands</span> Across India
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Real stories from farmers, buyers, and haulers transforming agriculture together.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-primary-green/20">
                                <Quote size={48} fill="currentColor" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="#FFB800" stroke="#FFB800" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                                &quot;{testimonial.text}&quot;
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-green to-primary-orange flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-neutral-gray">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                                </div>
                            </div>

                            {/* Category Badge */}
                            <div className={`absolute top-6 left-6 px-3 py-1 rounded-full text-xs font-bold ${testimonial.category === 'farmer' ? 'bg-green-100 text-primary-green' :
                                    testimonial.category === 'buyer' ? 'bg-orange-100 text-primary-orange' :
                                        'bg-blue-100 text-blue-600'
                                }`}>
                                {testimonial.category.charAt(0).toUpperCase() + testimonial.category.slice(1)}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-600 mb-4">
                        Join thousands who are already benefiting from CropFresh
                    </p>
                    <a
                        href="#early-access"
                        className="inline-block bg-primary-green text-white px-8 py-4 rounded-full font-bold hover:bg-primary-green/90 transition-colors shadow-lg hover:shadow-xl"
                    >
                        Get Early Access
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
