'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, MapPin, User } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Tomato Farmer",
        location: "Kolar, Karnataka",
        initials: "RK",
        rating: 5,
        text: "Before CropFresh, I used to wait 30-45 days for payment from mandis. Now I get money in my account within seconds of delivery. The AI grading is fair and I'm earning 30% more per quintal.",
        category: "farmer"
    },
    {
        name: "Priya Devi",
        role: "Vegetable Grower",
        location: "Hassan, Karnataka",
        initials: "PD",
        rating: 5,
        text: "The voice-based app is amazing! I can list my produce in Kannada without typing. CropFresh connected me to hotels in Bangalore who buy my premium vegetables at fair prices.",
        category: "farmer"
    },
    {
        name: "Suresh Patil",
        role: "Onion Farmer",
        location: "Nashik, Maharashtra",
        initials: "SP",
        rating: 5,
        text: "I used to lose 20% of my crop due to wastage and rejections. With CropFresh's Digital Twin verification, buyers trust the quality and I sell every grade—even B and C grade go to processors.",
        category: "farmer"
    },
    {
        name: "Arjun Menon",
        role: "Procurement Head",
        location: "Fresh Basket Supermarket Chain",
        initials: "AM",
        rating: 5,
        text: "CropFresh has transformed our sourcing. We get verified Grade A produce with full traceability. Our wastage dropped from 18% to just 3%. The all-inclusive pricing makes budgeting so much easier.",
        category: "buyer"
    },
    {
        name: "Meera Sharma",
        role: "Operations Manager",
        location: "Green Leaf Hotels",
        initials: "MS",
        rating: 5,
        text: "Consistency was our biggest problem. CropFresh delivers exactly what we order, every time. The Digital Twin photos help us verify quality before delivery. It's like having a direct farm connection.",
        category: "buyer"
    },
    {
        name: "Vikram Singh",
        role: "Logistics Partner",
        location: "Bangalore",
        initials: "VS",
        rating: 5,
        text: "I used to make 2-3 trips per day with 40% empty returns. CropFresh's multi-pickup routing keeps my truck loaded both ways. My earnings increased by 35% and I get paid instantly after delivery.",
        category: "hauler"
    },
    {
        name: "Deepak Reddy",
        role: "Transport Operator",
        location: "Kolar-Bangalore Route",
        initials: "DR",
        rating: 5,
        text: "The app shows me nearby loads and exact routes. No more waiting at mandis or dealing with agents. I can plan my day, earn more, and get home on time. Best platform for haulers!",
        category: "hauler"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setActiveIndex((prev) => {
            let nextIndex = prev + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.9,
            zIndex: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                type: "spring" as const,
                stiffness: 300,
                damping: 30
            }
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5,
                opacity: { duration: 0.2 }
            }
        })
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden min-h-[800px] flex flex-col justify-center">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-green/5 via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-orange/5 via-transparent to-transparent opacity-50" />

            {/* Decorative Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl -translate-x-1/2" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-green/10 text-primary-green text-sm font-semibold mb-4"
                    >
                        <User size={16} />
                        <span>Community Stories</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-display text-neutral-gray mb-6 leading-tight"
                    >
                        Trusted by <span className="text-gradient-premium">Thousands</span> Across India
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
                    >
                        Real stories from farmers, buyers, and haulers who are transforming their livelihoods with CropFresh&apos;s AI-powered platform.
                    </motion.p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-5xl mx-auto flex items-center justify-center gap-4 md:gap-12">

                    {/* Left Arrow */}
                    <button
                        onClick={() => paginate(-1)}
                        className="hidden md:flex w-16 h-16 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm items-center justify-center text-gray-600 hover:bg-primary-green hover:text-white hover:border-primary-green transition-all duration-300 shadow-sm hover:shadow-xl active:scale-95 z-20 group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>

                    {/* Card Stack */}
                    <div className="relative w-full max-w-2xl h-[500px] md:h-[450px] flex items-center justify-center perspective-1000">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute w-full h-full"
                            >
                                <div className="w-full h-full glass-premium rounded-3xl p-8 md:p-12 relative group shadow-2xl border border-white/60 flex flex-col justify-between">
                                    {/* Background Quote */}
                                    <div className="absolute top-10 right-10 text-primary-green/5 transition-colors duration-500">
                                        <Quote size={120} fill="currentColor" />
                                    </div>

                                    {/* Header: Badge & Rating */}
                                    <div className="flex justify-between items-start relative z-10">
                                        <div className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border ${testimonials[activeIndex].category === 'farmer' ? 'bg-green-50 text-primary-green border-green-100' :
                                            testimonials[activeIndex].category === 'buyer' ? 'bg-orange-50 text-primary-orange border-orange-100' :
                                                'bg-blue-50 text-blue-600 border-blue-100'
                                            }`}>
                                            <span className={`w-2 h-2 rounded-full ${testimonials[activeIndex].category === 'farmer' ? 'bg-primary-green' :
                                                testimonials[activeIndex].category === 'buyer' ? 'bg-primary-orange' :
                                                    'bg-blue-600'
                                                }`} />
                                            {testimonials[activeIndex].category}
                                        </div>

                                        <div className="flex gap-1">
                                            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                                <Star key={i} size={20} fill="#F97316" stroke="#F97316" className="drop-shadow-sm" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 flex-grow flex items-center my-6">
                                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium text-center w-full">
                                            &quot;{testimonials[activeIndex].text}&quot;
                                        </p>
                                    </div>

                                    {/* Footer: Author */}
                                    <div className="relative z-10 flex flex-col items-center border-t border-gray-100 pt-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-green to-primary-orange p-[2px] shadow-md mb-3">
                                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-primary-green font-bold text-xl">
                                                {testimonials[activeIndex].initials}
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="font-bold text-xl text-neutral-gray">{testimonials[activeIndex].name}</div>
                                            <div className="text-primary-green font-medium">{testimonials[activeIndex].role}</div>
                                            <div className="flex items-center justify-center gap-1 text-sm text-gray-400 mt-1">
                                                <MapPin size={14} />
                                                {testimonials[activeIndex].location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Stack Effect Background Cards (Visual Only) */}
                        <div className="absolute top-4 w-[95%] h-full bg-white/40 rounded-3xl -z-10 blur-[1px] transform scale-[0.98] translate-y-2 border border-white/20"></div>
                        <div className="absolute top-8 w-[90%] h-full bg-white/20 rounded-3xl -z-20 blur-[2px] transform scale-[0.96] translate-y-4 border border-white/10"></div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => paginate(1)}
                        className="hidden md:flex w-16 h-16 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm items-center justify-center text-gray-600 hover:bg-primary-green hover:text-white hover:border-primary-green transition-all duration-300 shadow-sm hover:shadow-xl active:scale-95 z-20 group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Mobile Navigation Controls */}
                <div className="flex md:hidden justify-center gap-8 mt-8">
                    <button
                        onClick={() => paginate(-1)}
                        className="w-12 h-12 rounded-full border border-gray-200 bg-white items-center justify-center flex hover:bg-primary-green hover:text-white transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="w-12 h-12 rounded-full border border-gray-200 bg-white items-center justify-center flex hover:bg-primary-green hover:text-white transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
