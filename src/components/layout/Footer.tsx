import Link from "next/link";
import {
    GraduationCap,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Mail,
    Phone,
    MapPin,
    ArrowRight
} from "lucide-react";

export default function Footer() {
    const footerLinks = {
        platform: [
            { label: "Browse Courses", href: "/courses" },
            { label: "Categories", href: "/categories" },
            { label: "Become an Instructor", href: "/teach" },
            { label: "Affiliate Program", href: "/affiliate" },
        ],
        company: [
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Press", href: "/press" },
            { label: "Blog", href: "/blog" },
        ],
        support: [
            { label: "Help Center", href: "/help" },
            { label: "Contact Us", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Youtube, href: "#", label: "YouTube" },
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 gradient-hero opacity-50" />

            <div className="relative z-10">
                {/* Newsletter Section */}
                <div className="border-b border-glass-border">
                    <div className="container-custom section-padding py-12 md:py-16">
                        <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                Stay Updated with <span className="gradient-text">LearnFlow</span>
                            </h3>
                            <p className="text-foreground-secondary mb-6 max-w-lg mx-auto">
                                Get the latest courses, learning tips, and exclusive offers delivered to your inbox.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input flex-1"
                                />
                                <button className="btn btn-primary whitespace-nowrap">
                                    Subscribe
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Main Footer */}
                <div className="container-custom section-padding py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-2">
                            <Link href="/" className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold gradient-text">LearnFlow</span>
                            </Link>
                            <p className="text-foreground-secondary mb-6 max-w-sm">
                                Empowering learners worldwide with high-quality, expert-led courses.
                                Start your learning journey today.
                            </p>
                            <div className="space-y-3 text-sm text-foreground-secondary">
                                <a href="mailto:hello@learnflow.com" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                                    <Mail className="w-4 h-4" />
                                    hello@learnflow.com
                                </a>
                                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                                    <Phone className="w-4 h-4" />
                                    +1 (234) 567-890
                                </a>
                                <p className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    San Francisco, CA
                                </p>
                            </div>
                        </div>

                        {/* Platform Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Platform</h4>
                            <ul className="space-y-3">
                                {footerLinks.platform.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-foreground-secondary hover:text-primary-400 transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-foreground-secondary hover:text-primary-400 transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-3">
                                {footerLinks.support.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-foreground-secondary hover:text-primary-400 transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-glass-border">
                    <div className="container-custom py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-foreground-secondary text-sm">
                                © {new Date().getFullYear()} LearnFlow. All rights reserved.
                            </p>
                            <div className="flex items-center gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-all"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
