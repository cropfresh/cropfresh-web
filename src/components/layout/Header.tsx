'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = ['solutions', 'technology', 'impact', 'about'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            setActiveSection(current || '');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Solutions', 'Technology', 'Impact', 'About'];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'py-3 glass-effect shadow-sm'
                : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group relative z-10">
                    <motion.div
                        whileHover={{ scale: 1.08, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        <Image
                            src="/images/logo.png"
                            alt="CropFresh Logo"
                            width={40}
                            height={40}
                            className="transition-all drop-shadow-lg"
                        />
                    </motion.div>
                    <Image
                        src="/images/logo-text.png"
                        alt="CropFresh"
                        width={120}
                        height={30}
                        className="hidden sm:block"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const href = `#${item.toLowerCase()}`;
                        const isActive = activeSection === item.toLowerCase();

                        return (
                            <Link
                                key={item}
                                href={href}
                                className="relative text-neutral-gray hover:text-primary-green font-medium transition-all duration-300 group py-2"
                            >
                                <span className="relative z-10">{item}</span>
                                {/* Animated Underline with Glassmorphic Effect */}
                                <motion.span
                                    initial={false}
                                    animate={{
                                        width: isActive ? '100%' : '0%',
                                        opacity: isActive ? 1 : 0
                                    }}
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-green to-primary-orange rounded-full"
                                    style={{
                                        boxShadow: isActive ? '0 0 10px rgba(45, 136, 45, 0.4)' : 'none'
                                    }}
                                />
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-primary-green/50 transition-all duration-300 rounded-full" />
                            </Link>
                        );
                    })}

                    {/* Glassmorphic CTA Button */}
                    <Link href="#early-access">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative px-6 py-2.5 rounded-full font-bold overflow-hidden group"
                            style={{
                                background: 'linear-gradient(135deg, #FF6B35 0%, #2D882D 100%)',
                                boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)'
                            }}
                        >
                            <span className="relative z-10 text-white flex items-center gap-2">
                                Get Early Access
                            </span>
                            {/* Shimmer effect on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                                    backgroundSize: '200% 100%',
                                    animation: 'shimmer 2s infinite'
                                }}
                            />
                        </motion.div>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden text-neutral-gray relative z-10 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={28} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={28} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Glassmorphic Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 md:hidden mt-2 mx-4 rounded-2xl overflow-hidden glass-panel"
                    >
                        <nav className="flex flex-col gap-1 p-4">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08, duration: 0.3 }}
                                >
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="block text-neutral-gray hover:text-primary-green font-medium py-3 px-4 rounded-xl hover:bg-primary-green/5 transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35, duration: 0.3 }}
                                className="pt-3 mt-2 border-t border-gray-200/50"
                            >
                                <Link
                                    href="#early-access"
                                    className="block text-center px-6 py-3.5 rounded-xl font-bold text-white shadow-lg"
                                    style={{
                                        background: 'linear-gradient(135deg, #FF6B35 0%, #2D882D 100%)'
                                    }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get Early Access
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
