"use client";

import Link from "next/link";
import { useState } from "react";
import {
    LayoutDashboard,
    BookOpen,
    Users,
    DollarSign,
    Video,
    BarChart3,
    Settings,
    GraduationCap,
    ArrowLeft,
    Upload,
    Image,
    X,
    Plus,
    Trash2,
    GripVertical,
    Save,
    Eye,
    FileText
} from "lucide-react";

// Sidebar navigation
const sidebarNav = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: BookOpen, label: "Courses", href: "/admin/courses", active: true },
    { icon: Video, label: "Lectures", href: "/admin/lectures" },
    { icon: Users, label: "Students", href: "/admin/students" },
    { icon: DollarSign, label: "Earnings", href: "/admin/earnings" },
    { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
];

const categories = [
    "Development",
    "Design",
    "Business",
    "Marketing",
    "Data Science",
    "Photography",
    "Music",
    "Health & Fitness",
];

const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"];

export default function NewCoursePage() {
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const [promoVideo, setPromoVideo] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 glass border-r border-glass-border fixed inset-y-0 left-0">
                <div className="p-6 border-b border-glass-border">
                    <Link href="/admin" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <span className="text-lg font-bold gradient-text">LearnFlow</span>
                            <span className="block text-xs text-foreground-secondary">Admin Panel</span>
                        </div>
                    </Link>
                </div>

                <nav className="p-4 space-y-1">
                    {sidebarNav.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${item.active
                                    ? "bg-primary-500/10 text-primary-400"
                                    : "text-foreground-secondary hover:bg-primary-500/5 hover:text-foreground"
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64">
                {/* Header */}
                <header className="sticky top-0 z-30 glass border-b border-glass-border px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/admin/courses" className="btn btn-ghost p-2">
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-xl font-bold">Create New Course</h1>
                                <p className="text-sm text-foreground-secondary">Fill in the details to create your course</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="btn btn-secondary">
                                <Eye className="w-4 h-4" />
                                Preview
                            </button>
                            <button className="btn btn-primary">
                                <Save className="w-4 h-4" />
                                Save Course
                            </button>
                        </div>
                    </div>
                </header>

                <div className="p-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Basic Information */}
                        <section className="glass-card p-6 mb-6">
                            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-primary-500" />
                                Basic Information
                            </h2>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Course Title <span className="text-error-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g., Complete Web Development Bootcamp 2024"
                                        className="input"
                                    />
                                    <p className="text-xs text-foreground-secondary mt-2">
                                        A good title is descriptive and includes keywords students might search for.
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Short Description <span className="text-error-500">*</span>
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="Brief overview of what students will learn..."
                                        className="input resize-none"
                                    />
                                    <p className="text-xs text-foreground-secondary mt-2">
                                        120-160 characters recommended for search results.
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Full Description <span className="text-error-500">*</span>
                                    </label>
                                    <textarea
                                        rows={8}
                                        placeholder="Detailed description of your course, what students will learn, prerequisites, etc..."
                                        className="input resize-none"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Category <span className="text-error-500">*</span>
                                        </label>
                                        <select className="input">
                                            <option value="">Select a category</option>
                                            {categories.map((cat) => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Level <span className="text-error-500">*</span>
                                        </label>
                                        <select className="input">
                                            <option value="">Select level</option>
                                            {levels.map((level) => (
                                                <option key={level} value={level}>{level}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Tags</label>
                                    <input
                                        type="text"
                                        placeholder="e.g., React, JavaScript, Web Development (comma separated)"
                                        className="input"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Media */}
                        <section className="glass-card p-6 mb-6">
                            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Image className="w-5 h-5 text-primary-500" />
                                Course Media
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Thumbnail */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Course Thumbnail <span className="text-error-500">*</span>
                                    </label>
                                    <div className="border-2 border-dashed border-glass-border rounded-xl p-6 text-center hover:border-primary-500/50 transition-colors cursor-pointer">
                                        {thumbnail ? (
                                            <div className="relative">
                                                <img src={thumbnail} alt="Thumbnail" className="w-full aspect-video object-cover rounded-lg" />
                                                <button
                                                    onClick={() => setThumbnail(null)}
                                                    className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-lg flex items-center justify-center hover:bg-black/70"
                                                >
                                                    <X className="w-4 h-4 text-white" />
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <Upload className="w-10 h-10 text-foreground-secondary mx-auto mb-3" />
                                                <p className="text-sm font-medium mb-1">Upload thumbnail</p>
                                                <p className="text-xs text-foreground-secondary">
                                                    1280x720px recommended (16:9 ratio)
                                                </p>
                                                <p className="text-xs text-foreground-secondary">
                                                    PNG, JPG up to 2MB
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Promo Video */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Promotional Video
                                    </label>
                                    <div className="border-2 border-dashed border-glass-border rounded-xl p-6 text-center hover:border-primary-500/50 transition-colors cursor-pointer">
                                        {promoVideo ? (
                                            <div className="relative">
                                                <video src={promoVideo} className="w-full aspect-video object-cover rounded-lg" controls />
                                                <button
                                                    onClick={() => setPromoVideo(null)}
                                                    className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-lg flex items-center justify-center hover:bg-black/70"
                                                >
                                                    <X className="w-4 h-4 text-white" />
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <Video className="w-10 h-10 text-foreground-secondary mx-auto mb-3" />
                                                <p className="text-sm font-medium mb-1">Upload promo video</p>
                                                <p className="text-xs text-foreground-secondary">
                                                    2-5 minutes recommended
                                                </p>
                                                <p className="text-xs text-foreground-secondary">
                                                    MP4, WebM up to 500MB
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Pricing */}
                        <section className="glass-card p-6 mb-6">
                            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-primary-500" />
                                Pricing
                            </h2>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Price (USD) <span className="text-error-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-secondary">$</span>
                                        <input
                                            type="number"
                                            placeholder="99.99"
                                            step="0.01"
                                            min="0"
                                            className="input pl-8"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Discounted Price (Optional)
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-secondary">$</span>
                                        <input
                                            type="number"
                                            placeholder="79.99"
                                            step="0.01"
                                            min="0"
                                            className="input pl-8"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 accent-primary-500 rounded" />
                                    <span className="text-sm">Offer this course for free</span>
                                </label>
                            </div>
                        </section>

                        {/* What Students Will Learn */}
                        <section className="glass-card p-6 mb-6">
                            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary-500" />
                                What Students Will Learn
                            </h2>

                            <div className="space-y-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <GripVertical className="w-5 h-5 text-foreground-secondary cursor-move" />
                                        <input
                                            type="text"
                                            placeholder={`Learning objective ${i}`}
                                            className="input flex-1"
                                        />
                                        <button className="p-2 hover:bg-error-500/10 rounded-lg transition-colors">
                                            <Trash2 className="w-4 h-4 text-error-400" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button className="btn btn-secondary mt-4">
                                <Plus className="w-4 h-4" />
                                Add Learning Objective
                            </button>
                        </section>

                        {/* Requirements */}
                        <section className="glass-card p-6 mb-6">
                            <h2 className="text-lg font-bold mb-6">Requirements / Prerequisites</h2>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <GripVertical className="w-5 h-5 text-foreground-secondary cursor-move" />
                                    <input
                                        type="text"
                                        placeholder="e.g., Basic computer skills"
                                        className="input flex-1"
                                    />
                                    <button className="p-2 hover:bg-error-500/10 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4 text-error-400" />
                                    </button>
                                </div>
                            </div>

                            <button className="btn btn-secondary mt-4">
                                <Plus className="w-4 h-4" />
                                Add Requirement
                            </button>
                        </section>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between pt-6 border-t border-glass-border">
                            <button className="btn btn-ghost">
                                Save as Draft
                            </button>
                            <div className="flex items-center gap-3">
                                <Link href="/admin/courses" className="btn btn-secondary">
                                    Cancel
                                </Link>
                                <button className="btn btn-primary">
                                    <Save className="w-4 h-4" />
                                    Create Course
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
