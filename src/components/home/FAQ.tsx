'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

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
    farmers: { en: "For Farmers", kn: "ರೈತರಿಗೆ" },
    buyers: { en: "For Buyers", kn: "ವ್ಯಾಪಾರಿಗಳಿಗೆ" },
    haulers: { en: "For Haulers", kn: "ಲಾರಿ ಮತ್ತು ಟೆಂಪೋ ಚಾಲಕರಿಗೆ" },
    general: { en: "Platform & General", kn: "ವೇದಿಕೆ ಮತ್ತು ಸಾಮಾನ್ಯ" }
};

interface FAQItemProps {
    item: typeof faqData.farmers[0];
    index: number;
}

function FAQItem({ item, index }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
                <div className="flex-1 pr-4">
                    <div className="font-bold text-neutral-gray mb-1">{item.question}</div>
                    <div className="text-sm text-gray-500">{item.questionKn}</div>
                </div>
                <ChevronDown
                    className={`flex-shrink-0 text-primary-green transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    size={24}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-4 pt-2 border-t border-gray-100 bg-gray-50">
                            <p className="text-gray-700 mb-2">{item.answer}</p>
                            <p className="text-gray-600 text-sm">{item.answerKn}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <MessageCircle size={32} className="text-primary-green" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-display text-neutral-gray mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {Object.entries(faqData).map(([category, items]) => (
                        <div key={category}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl font-bold font-display text-neutral-gray mb-6"
                            >
                                <span className="text-primary-green">🌾 </span>
                                {categoryNames[category as keyof typeof categoryNames].en}
                                <span className="text-gray-500 text-lg ml-3">
                                    {categoryNames[category as keyof typeof categoryNames].kn}
                                </span>
                            </motion.h3>

                            <div className="space-y-3">
                                {items.map((item, index) => (
                                    <FAQItem key={index} item={item} index={index} />
                                ))}
                            </div>
                        </div>
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
                        Still have questions? / ಇನ್ನೂ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ?
                    </p>
                    <a
                        href="#early-access"
                        className="inline-block bg-primary-green text-white px-8 py-4 rounded-full font-bold hover:bg-primary-green/90 transition-colors shadow-lg hover:shadow-xl"
                    >
                        Get Early Access / ಆರಂಭಿಕ ಪ್ರವೇಶ ಪಡೆಯಿರಿ
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
