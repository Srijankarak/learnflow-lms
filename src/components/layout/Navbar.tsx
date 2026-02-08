"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
    Menu,
    X,
    GraduationCap,
    Search,
    Bell,
    User,
    ChevronDown,
    Moon,
    Sun,
    LogIn
} from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    const navLinks = [
        { label: "Courses", href: "/courses" },
        { label: "Categories", href: "/categories" },
        { label: "Instructors", href: "/instructors" },
        { label: "Pricing", href: "/pricing" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "glass shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold gradient-text hidden sm:block">
                            LearnFlow
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-foreground-secondary hover:text-foreground transition-colors font-medium relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                            <input
                                type="text"
                                placeholder="Search for courses..."
                                className="input pl-10 py-2.5 text-sm"
                            />
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary-500/10 transition-colors"
                        >
                            {isDarkMode ? (
                                <Sun className="w-5 h-5 text-foreground-secondary" />
                            ) : (
                                <Moon className="w-5 h-5 text-foreground-secondary" />
                            )}
                        </button>

                        {/* Notifications */}
                        <button className="hidden md:flex w-10 h-10 rounded-xl glass items-center justify-center hover:bg-primary-500/10 transition-colors relative">
                            <Bell className="w-5 h-5 text-foreground-secondary" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-error-500 rounded-full" />
                        </button>

                        {/* Auth Buttons */}
                        <Link href="/login" className="btn btn-ghost hidden sm:inline-flex">
                            <LogIn className="w-4 h-4" />
                            Login
                        </Link>
                        <Link href="/register" className="btn btn-primary">
                            Get Started
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden glass rounded-2xl mt-2 p-4 animate-scale-in">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="px-4 py-3 rounded-xl hover:bg-primary-500/10 transition-colors font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-glass-border">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                                    <input
                                        type="text"
                                        placeholder="Search courses..."
                                        className="input pl-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
