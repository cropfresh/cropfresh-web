'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, ArrowRight, User, Phone, MapPin, Briefcase } from 'lucide-react';

type FormData = {
    name: string;
    email: string;
    phone: string;
    location: string;
    role: string;
};

export default function EarlyAccess() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await fetch('/api/early-access', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                if (response.status === 409) {
                    setErrorMessage('This email has already been registered for early access.');
                } else {
                    setErrorMessage(result.error || 'Something went wrong. Please try again.');
                }
                setIsSubmitting(false);
                return;
            }

            // Success!
            setIsSuccess(true);

            // Track form submission
            await fetch('/api/analytics/form-interaction', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formName: 'early-access',
                    action: 'submitted',
                }),
            }).catch(() => { }); // Ignore analytics errors

        } catch (error) {
            console.error('Submission error:', error);
            setErrorMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="early-access" className="py-20 bg-gradient-to-br from-neutral-gray via-neutral-gray to-dark-green relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary-green/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-orange/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
                    style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Left Side - Benefits */}
                        <div className="md:w-2/5 bg-gradient-to-br from-primary-green to-dark-green p-10 text-white flex flex-col justify-center relative overflow-hidden">
                            {/* Decorative pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                                    Join the Revolution
                                </h2>
                                <p className="text-white/90 mb-8 leading-relaxed text-lg">
                                    Be among the first to experience the future of fresh produce supply chain. Get exclusive early access to our platform.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Priority onboarding support',
                                        'Exclusive beta features',
                                        'Direct access to product team',
                                        'Early bird pricing'
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 0.4 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center">
                                                <CheckCircle size={16} className="text-white" />
                                            </div>
                                            <span className="text-white/95">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center bg-white">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold font-display text-neutral-gray mb-3">
                                        You&apos;re on the list!
                                    </h3>
                                    <p className="text-gray-600 text-lg">
                                        Thanks for your interest. We&apos;ll be in touch shortly with your exclusive access code.
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold font-display text-neutral-gray mb-2">
                                            Get Early Access
                                        </h3>
                                        <p className="text-gray-600">
                                            Fill in your details to join our exclusive waitlist
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                    <User size={20} />
                                                </div>
                                                <input
                                                    {...register('name', {
                                                        required: 'Name is required',
                                                        minLength: {
                                                            value: 2,
                                                            message: 'Name must be at least 2 characters'
                                                        }
                                                    })}
                                                    type="text"
                                                    id="name"
                                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border text-black ${errors.name
                                                        ? 'border-red-500 focus:ring-red-500'
                                                        : 'border-gray-300 focus:ring-primary-green focus:border-primary-green'
                                                        } focus:outline-none focus:ring-2 transition-all`}
                                                    placeholder="John Doe"
                                                    style={{ color: 'black', backgroundColor: 'white' }}
                                                />
                                            </div>
                                            {errors.name && (
                                                <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                                type="email"
                                                id="email"
                                                className={`w-full px-4 py-3.5 rounded-xl border text-black ${errors.email
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : 'border-gray-300 focus:ring-primary-green focus:border-primary-green'
                                                    } focus:outline-none focus:ring-2 transition-all`}
                                                placeholder="name@company.com"
                                                style={{ color: 'black', backgroundColor: 'white' }}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1.5">{errors.email.message}</p>
                                            )}
                                        </div>

                                        {/* Phone Field */}
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                    <Phone size={20} />
                                                </div>
                                                <input
                                                    {...register('phone', {
                                                        required: 'Phone number is required',
                                                        pattern: {
                                                            value: /^[0-9]{10}$/,
                                                            message: 'Please enter a valid 10-digit phone number'
                                                        }
                                                    })}
                                                    type="tel"
                                                    id="phone"
                                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border text-black ${errors.phone
                                                        ? 'border-red-500 focus:ring-red-500'
                                                        : 'border-gray-300 focus:ring-primary-green focus:border-primary-green'
                                                        } focus:outline-none focus:ring-2 transition-all`}
                                                    placeholder="9876543210"
                                                    maxLength={10}
                                                    style={{ color: 'black', backgroundColor: 'white' }}
                                                />
                                            </div>
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mt-1.5">{errors.phone.message}</p>
                                            )}
                                        </div>

                                        {/* Location Field */}
                                        <div>
                                            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Location (City) <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                    <MapPin size={20} />
                                                </div>
                                                <input
                                                    {...register('location', {
                                                        required: 'Location is required',
                                                        minLength: {
                                                            value: 2,
                                                            message: 'Location must be at least 2 characters'
                                                        }
                                                    })}
                                                    type="text"
                                                    id="location"
                                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border text-black ${errors.location
                                                        ? 'border-red-500 focus:ring-red-500'
                                                        : 'border-gray-300 focus:ring-primary-green focus:border-primary-green'
                                                        } focus:outline-none focus:ring-2 transition-all`}
                                                    placeholder="Bangalore, Karnataka"
                                                    style={{ color: 'black', backgroundColor: 'white' }}
                                                />
                                            </div>
                                            {errors.location && (
                                                <p className="text-red-500 text-sm mt-1.5">{errors.location.message}</p>
                                            )}
                                        </div>

                                        {/* Role Selection */}
                                        <div>
                                            <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                                                I am a... <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                                    <Briefcase size={20} />
                                                </div>
                                                <select
                                                    {...register('role', { required: 'Please select a role' })}
                                                    id="role"
                                                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border text-black ${errors.role
                                                        ? 'border-red-500 focus:ring-red-500'
                                                        : 'border-gray-300 focus:ring-primary-green focus:border-primary-green'
                                                        } focus:outline-none focus:ring-2 transition-all bg-white appearance-none cursor-pointer`}
                                                    style={{
                                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'right 1rem center',
                                                        backgroundSize: '20px',
                                                        color: 'black',
                                                        backgroundColor: 'white'
                                                    }}
                                                >
                                                    <option value="">Select your role</option>
                                                    <option value="farmer">Farmer / Producer</option>
                                                    <option value="retailer">Retailer / Buyer</option>
                                                    <option value="logistics">Logistics Provider</option>
                                                    <option value="investor">Investor</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            {errors.role && (
                                                <p className="text-red-500 text-sm mt-1.5">{errors.role.message}</p>
                                            )}
                                        </div>

                                        {/* Error Message Display */}
                                        {errorMessage && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>{errorMessage}</span>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Submit Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full font-bold py-4 rounded-xl text-white transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg mt-6"
                                            style={{
                                                background: 'linear-gradient(135deg, #FF6B35 0%, #2D882D 100%)',
                                                boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)'
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 size={20} className="animate-spin" />
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    Request Access <ArrowRight size={20} />
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
