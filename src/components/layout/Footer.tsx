import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-neutral-gray text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/images/logo.png"
                                alt="CropFresh Logo"
                                width={32}
                                height={32}
                            />
                            <Image
                                src="/images/logo-text.png"
                                alt="CropFresh"
                                width={120}
                                height={30}
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Revolutionizing the fresh produce supply chain with data-driven logistics and fair pricing for farmers.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-orange transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold font-display text-lg mb-6">Company</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {['About Us', 'Careers', 'Press', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold font-display text-lg mb-6">Resources</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {['Blog', 'Case Studies', 'Help Center', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold font-display text-lg mb-6">Contact</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-primary-orange" />
                                <span>hello@cropfresh.com</span>
                            </li>
                            <li>
                                123 AgriTech Blvd, Suite 400<br />
                                San Francisco, CA 94107
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} CropFresh. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
