'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Sparkles, Search } from 'lucide-react';

const faqData = {
    farmers: [
        {
            question: "What is CropFresh?",
            questionKn: "CropFresh ಎಂದರೇನು?",
            answer: "CropFresh is an AI-powered direct marketplace that helps farmers sell their produce directly to businesses—without middlemen.",
            answerKn: "CropFresh ಒಂದು AI ಆಧಾರಿತ ನೇರ ಮಾರುಕಟ್ಟೆ. ಇದು ರೈತರಿಗೆ ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ನೇರವಾಗಿ ವ್ಯಾಪಾರಿಗಳಿಗೆ ಬೆಳೆ ಮಾರಾಟ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ."
        },
        {
            question: "How much commission do farmers pay?",
            questionKn: "ರೈತರು ಎಷ್ಟು ಕಮಿಷನ್ ಕೊಡಬೇಕು?",
            answer: "Zero commission. Farmers get 100% of their price.",
            answerKn: "ಸೊನ್ನೆ ಕಮಿಷನ್. ರೈತರಿಗೆ ಅವರು ಹೇಳಿದ ದರದ 100% ಸಿಗುತ್ತದೆ."
        },
        {
            question: "How do I list my produce?",
            questionKn: "ನಾನು ಬೆಳೆಯನ್ನು ಹೇಗೆ ಪಟ್ಟಿ ಮಾಡಲಿ?",
            answer: "Simply tap the mic and say: \"Tomato 200 kg 15 rupees.\" The app creates the listing.",
            answerKn: "ಮೈಕ್ ಒತ್ತಿ ಹೇಳಿ: \"ಟೊಮೇಟೊ 200 ಕೇಜಿ 15 ರೂಪಾಯಿ.\" ಆಪ್ ಸ್ವಯಂ ಪಟ್ಟಿಯನ್ನು ರಚಿಸುತ್ತದೆ."
        },
        {
            question: "When do I get paid?",
            questionKn: "ನನಗೆ ಹಣ ಯಾವಾಗ ಸಿಗುತ್ತದೆ?",
            answer: "As soon as the buyer confirms delivery, the payment comes instantly via UPI escrow.",
            answerKn: "ಖರೀದಿದಾರರು 'Delivered' ಒತ್ತುವ ಕ್ಷಣಕ್ಕೆ ತಕ್ಷಣ UPI ಮೂಲಕ ಹಣ ನಿಮ್ಮ ಖಾತೆಗೆ ಬರುತ್ತದೆ."
        },
        {
            question: "Is transport arranged by CropFresh?",
            questionKn: "ಸಾಗಣೆ ವ್ಯವಸ್ಥೆ CropFresh ಮಾಡುತ್ತದೆಯೇ?",
            answer: "Yes. Farm-gate pickup or Village Drop Point pickup is available.",
            answerKn: "ಹೌದು. ತೋಟದ ಬಳಿ (Farm Gate) ಅಥವಾ ಹಳ್ಳಿಯ Drop Point ನಲ್ಲಿ ಪಿಕಪ್ ಸಿಗುತ್ತದೆ."
        },
        {
            question: "What if my crop is graded wrongly?",
            questionKn: "ನನ್ನ ಬೆಳೆಯ ಗ್ರೇಡಿಂಗ್ ತಪ್ಪಾದರೆ?",
            answer: "No worries. All grading is done using AI + Field Agent verification, creating a fair & transparent process.",
            answerKn: "ಚಿಂತಿಸಬೇಡಿ. AI + ಫೀಲ್ಡ್ ಏಜೆಂಟ್ ಪರಿಶೀಲನೆ ಮೂಲಕ ನಿಖರ ಗ್ರೇಡಿಂಗ್ ಮಾಡಲಾಗುತ್ತದೆ."
        }
    ],
    buyers: [
        {
            question: "Why should I buy from CropFresh?",
            questionKn: "CropFresh ನಿಂದ ಖರೀದಿ ಏಕೆ ಮಾಡಲಿ?",
            answer: "You get verified quality, stable pricing, and reliable delivery—direct from farmers.",
            answerKn: "ರೈತರಿಂದ ನೇರವಾಗಿ ಪರಿಶೀಲಿತ ಗುಣಮಟ್ಟ, ಸ್ಥಿರ ದರ, ವಿಶ್ವಾಸಾರ್ಹ ಡೆಲಿವರಿ ಸಿಗುತ್ತದೆ."
        },
        {
            question: "Is the quality guaranteed?",
            questionKn: "ಗುಣಮಟ್ಟ ಖಾತ್ರಿಯೇ?",
            answer: "Yes. Every batch has a Digital Twin (photos, verification, grade).",
            answerKn: "ಹೌದು. ಪ್ರತಿ ಲಾಟ್ಗೂ ಡಿಜಿಟಲ್ ಟವಿನ್ (ಫೋಟೋ, ಪರಿಶೀಲನೆ, ಗ್ರೇಡ್) ಇರುತ್ತದೆ."
        },
        {
            question: "Can I negotiate prices?",
            questionKn: "ದರ ಮಾತುಕತೆ ಮಾಡಬಹುದೇ?",
            answer: "Yes. Buyers can request price adjustments within system limits.",
            answerKn: "ಹೌದು. ಖರೀದಿದಾರರು ವ್ಯವಸ್ಥೆಯ ಮಿತಿಯೊಳಗೆ ದರ ಮಾತುಕತೆ ಮಾಡಬಹುದು."
        },
        {
            question: "Do I get credit options?",
            questionKn: "ಕ್ರೆಡಿಟ್ ಆಯ್ಕೆಗಳು ಇವೆಯೇ?",
            answer: "Credit through NBFC partners is available for premium buyers (Phase 2).",
            answerKn: "NBFC ಸಹಭಾಗಿಗಳ ಮೂಲಕ ಕ್ರೆಡಿಟ್ (Phase 2) ಪ್ರೀಮಿಯಂ ವ್ಯಾಪಾರಿಗಳಿಗೆ ಲಭ್ಯ."
        },
        {
            question: "How is delivery handled?",
            questionKn: "ಡೆಲಿವರಿ ಹೇಗೆ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ?",
            answer: "Our logistics engine assigns the best vehicle (tempo/truck/cold chain).",
            answerKn: "ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಇಂಜಿನ್ ಸೂಕ್ತ ವಾಹನ (ಟೆಂಪೋ/ಟ್ರಕ್/ಕೋಲ್ಡ್ ಚೈನ್) ನಿಗದಿ ಮಾಡುತ್ತದೆ."
        }
    ],
    haulers: [
        {
            question: "How do I get delivery jobs?",
            questionKn: "ನನಗೆ ಡೆಲಿವರಿ ಕೆಲಸ ಹೇಗೆ ಸಿಗುತ್ತದೆ?",
            answer: "You'll receive trip assignments directly in the app.",
            answerKn: "ಡೆಲಿವರಿ ಟ್ರಿಪ್‌ಗಳು ನೇರವಾಗಿ ಆಪ್‌ನಲ್ಲಿ ಬರುತ್ತವೆ."
        },
        {
            question: "How fast is the payment?",
            questionKn: "ಹಣ ಎಷ್ಟು ವೇಗವಾಗಿ ಸಿಗುತ್ತದೆ?",
            answer: "You get paid within 120 seconds after delivery confirmation.",
            answerKn: "ಡೆಲಿವರಿ ದೃಢೀಕರಿಸಿದ 120 ಸೆಕೆಂಡಿನೊಳಗೆ ಹಣ ಸಿಗುತ್ತದೆ."
        },
        {
            question: "Can I get multi-pickup routes?",
            questionKn: "ಮಲ್ಟಿ-ಪಿಕಪ್ ರೂಟ್ ಸಿಗುತ್ತದೆಯೇ?",
            answer: "Yes. Our AI routes nearby pickups to maximize your earnings.",
            answerKn: "ಹೌದು. ಹತ್ತಿರದ ಫಾರ್ಮ್‌ಗಳ ಪಿಕಪ್‌ಗಳನ್ನು AI ಜೋಡಿಸಿ ನಿಮ್ಮ ಆದಾಯ ಹೆಚ್ಚಿಸುತ್ತದೆ."
        }
    ],
    general: [
        {
            question: "Is CropFresh free to use?",
            questionKn: "CropFresh ಬಳಸಲು ಉಚಿತವೇ?",
            answer: "Yes for farmers. Buyers pay a small fee (5–8%).",
            answerKn: "ರೈತರಿಗೆ ಉಚಿತ. ಖರೀದಿದಾರರು 5–8% ಸೇವಾ ಶುಲ್ಕ ಕೊಡುವರು."
        },
        {
            question: "Which crops are supported?",
            questionKn: "ಯಾವ ಬೆಳೆಗಳು ಬೆಂಬಲಿತವಾಗಿವೆ?",
            answer: "All major vegetables, fruits, greens, and staples.",
            answerKn: "ಎಲ್ಲ ಪ್ರಮುಖ ತರಕಾರಿ, ಹಣ್ಣು, ಸೊಪ್ಪು ಹಾಗೂ ಇತರ ಬೆಳೆಗಳು ಬೆಂಬಲಿತ."
        },
        {
            question: "Does the app support Kannada voice?",
            questionKn: "ಆಪ್ ಕನ್ನಡ ವಾಯ್ಸ್ ಬೆಂಬಲಿಸುತ್ತದೆಯೇ?",
            answer: "Yes. CropFresh supports Kannada voice commands fully.",
            answerKn: "ಹೌದು. CropFresh ಸಂಪೂರ್ಣ ಕನ್ನಡ ವಾಯ್ಸ್ ಕಮಾಂಡ್ಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ."
        },
        {
            question: "Is my data safe?",
            questionKn: "ನನ್ನ ಡೇಟಾ ಸುರಕ್ಷಿತವೇ?",
            answer: "Yes. All data is encrypted and securely stored.",
            answerKn: "ಹೌದು. ಎಲ್ಲಾ ಡೇಟಾ ಎನ್ಕ್ರಿಪ್ಟ್ ಆಗಿ ಸುರಕ್ಷಿತವಾಗಿ ಸಂರಕ್ಷಿಸಲಾಗುತ್ತದೆ."
        }
    ]
};

const categoryNames = {
    farmers: { en: "For Farmers", kn: "ರೈತರಿಗೆ", icon: "🌾" },
    buyers: { en: "For Buyers", kn: "ವ್ಯಾಪಾರಿಗಳಿಗೆ", icon: "🛒" },
    haulers: { en: "For Haulers", kn: "ಚಾಲಕರಿಗೆ", icon: "🚚" },
    general: { en: "General", kn: "ಸಾಮಾನ್ಯ", icon: "💡" }
};

interface FAQItemProps {
    item: typeof faqData.farmers[0];
    index: number;
}

function FAQItem({ item, index }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen
                    ? 'bg-white/80 border-primary-green/30 shadow-lg shadow-primary-green/5'
                    : 'bg-white/40 border-white/60 hover:bg-white/60 hover:border-white/80'
                }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
            >
                <div className="flex-1 pr-4">
                    <div className={`font-bold text-lg mb-1 transition-colors ${isOpen ? 'text-primary-green' : 'text-neutral-gray'}`}>
                        {item.question}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">{item.questionKn}</div>
                </div>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen
                        ? 'bg-primary-green text-white rotate-180 shadow-md shadow-primary-green/20'
                        : 'bg-white text-gray-400 group-hover:text-primary-green group-hover:bg-primary-green/10'
                    }`}>
                    <ChevronDown size={20} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-2">
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
                            <div className="space-y-3">
                                <p className="text-gray-700 leading-relaxed text-[15px]">{item.answer}</p>
                                <div className="flex items-start gap-2 text-gray-500 text-sm italic bg-gray-50/50 p-3 rounded-lg border border-gray-100/50">
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary-orange/80 mt-0.5">KN</span>
                                    {item.answerKn}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    const [activeTab, setActiveTab] = useState<keyof typeof faqData>('farmers');

    return (
        <section id="faq" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-background-light" />
            <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-orange/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

            {/* Mesh Grid Overlay */}
            <div className="absolute inset-0 -z-10 opacity-[0.02]"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/10 text-primary-green font-bold text-sm mb-6"
                    >
                        <Sparkles size={16} />
                        <span>Support Center</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-display text-neutral-gray mb-6"
                    >
                        Frequently Asked Questions
                    </motion.h2>

                    {/* AI Search Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative max-w-lg mx-auto"
                    >
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Ask CropFresh AI anything..."
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all shadow-sm text-gray-700 placeholder:text-gray-400"
                            readOnly
                        />
                        <div className="absolute inset-y-0 right-2 flex items-center">
                            <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-md border border-gray-200">AI Beta</span>
                        </div>
                    </motion.div>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {Object.entries(categoryNames).map(([key, label]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key as keyof typeof faqData)}
                            className={`relative px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === key
                                    ? 'text-white shadow-lg shadow-primary-green/25 scale-105'
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                                }`}
                        >
                            {activeTab === key && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gradient-to-r from-primary-green to-[#166534] rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 text-lg">{label.icon}</span>
                            <span className="relative z-10">{label.en}</span>
                        </button>
                    ))}
                </div>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {faqData[activeTab].map((item, index) => (
                                <FAQItem key={index} item={item} index={index} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-600 mb-6">
                        Still have questions? / ಇನ್ನೂ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ?
                    </p>
                    <a
                        href="#early-access"
                        className="inline-flex items-center justify-center gap-2 bg-white text-primary-green border border-primary-green/20 px-8 py-4 rounded-full font-bold hover:bg-primary-green hover:text-white hover:shadow-lg hover:shadow-primary-green/30 transition-all transform hover:-translate-y-1 group"
                    >
                        <MessageCircle size={20} className="group-hover:animate-bounce" />
                        <span>Chat with Support</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
