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
    LogOut,
    GraduationCap,
    Plus,
    Search,
    Filter,
    MoreVertical,
    Edit,
    Trash2,
    Eye,
    Copy,
    Star,
    Clock,
    ChevronDown,
    Grid3X3,
    List,
    ArrowUpDown
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

// Courses data
const courses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp 2024",
        description: "Learn HTML, CSS, JavaScript, React, Node.js and more",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
        price: 89.99,
        students: 1542,
        lectures: 125,
        duration: "42h 30m",
        rating: 4.9,
        reviews: 342,
        status: "Published",
        createdAt: "Jan 15, 2024",
    },
    {
        id: 2,
        title: "Advanced React & Next.js Masterclass",
        description: "Master modern React patterns, hooks, and Next.js",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
        price: 79.99,
        students: 893,
        lectures: 85,
        duration: "28h 15m",
        rating: 4.8,
        reviews: 156,
        status: "Published",
        createdAt: "Feb 1, 2024",
    },
    {
        id: 3,
        title: "Python for Data Science & Machine Learning",
        description: "Complete Python course for data analysis and ML",
        thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
        price: 99.99,
        students: 0,
        lectures: 45,
        duration: "18h 00m",
        rating: 0,
        reviews: 0,
        status: "Draft",
        createdAt: "Feb 5, 2024",
    },
    {
        id: 4,
        title: "UI/UX Design Fundamentals",
        description: "Learn design principles, Figma, and user research",
        thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        price: 69.99,
        students: 456,
        lectures: 68,
        duration: "22h 45m",
        rating: 4.7,
        reviews: 89,
        status: "Published",
        createdAt: "Jan 28, 2024",
    },
];

export default function AdminCoursesPage() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [searchQuery, setSearchQuery] = useState('');

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

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-glass-border">
                    <div className="flex items-center gap-3 px-4 py-3">
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop"
                            alt="Admin"
                            className="w-10 h-10 rounded-xl object-cover"
                        />
                        <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">Admin User</p>
                            <p className="text-xs text-foreground-secondary truncate">admin@learnflow.com</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64">
                {/* Header */}
                <header className="sticky top-0 z-30 glass border-b border-glass-border px-6 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-xl font-bold">Courses</h1>
                            <p className="text-sm text-foreground-secondary">Manage your courses and content</p>
                        </div>
                        <Link href="/admin/courses/new" className="btn btn-primary">
                            <Plus className="w-4 h-4" />
                            Create Course
                        </Link>
                    </div>
                </header>

                <div className="p-6">
                    {/* Toolbar */}
                    <div className="glass-card p-4 mb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                                <input
                                    type="text"
                                    placeholder="Search courses..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="input pl-10 w-full"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <select className="input py-2 px-4 w-auto">
                                    <option>All Status</option>
                                    <option>Published</option>
                                    <option>Draft</option>
                                    <option>Archived</option>
                                </select>
                                <select className="input py-2 px-4 w-auto">
                                    <option>Sort by: Newest</option>
                                    <option>Sort by: Oldest</option>
                                    <option>Sort by: Most Students</option>
                                    <option>Sort by: Highest Revenue</option>
                                </select>
                                <div className="flex glass rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-primary-500/10' : 'hover:bg-primary-500/10'}`}
                                    >
                                        <Grid3X3 className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-primary-500/10' : 'hover:bg-primary-500/10'}`}
                                    >
                                        <List className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Summary */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold gradient-text">{courses.length}</p>
                            <p className="text-sm text-foreground-secondary">Total Courses</p>
                        </div>
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold text-success-500">{courses.filter(c => c.status === 'Published').length}</p>
                            <p className="text-sm text-foreground-secondary">Published</p>
                        </div>
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold text-warning-500">{courses.filter(c => c.status === 'Draft').length}</p>
                            <p className="text-sm text-foreground-secondary">Drafts</p>
                        </div>
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold">{courses.reduce((sum, c) => sum + c.students, 0).toLocaleString()}</p>
                            <p className="text-sm text-foreground-secondary">Total Students</p>
                        </div>
                    </div>

                    {/* Courses Grid */}
                    {viewMode === 'grid' ? (
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {courses.map((course) => (
                                <div key={course.id} className="glass-card overflow-hidden group">
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={course.thumbnail}
                                            alt={course.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute top-3 left-3">
                                            <span className={`badge ${course.status === 'Published' ? 'badge-success' : 'badge-warning'}`}>
                                                {course.status}
                                            </span>
                                        </div>
                                        <div className="absolute top-3 right-3">
                                            <button className="w-8 h-8 rounded-lg bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors">
                                                <MoreVertical className="w-4 h-4 text-white" />
                                            </button>
                                        </div>
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <p className="text-white font-bold text-lg">${course.price}</p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="font-semibold mb-2 line-clamp-2">{course.title}</h3>
                                        <p className="text-sm text-foreground-secondary mb-4 line-clamp-2">
                                            {course.description}
                                        </p>

                                        <div className="flex items-center gap-4 text-sm text-foreground-secondary mb-4">
                                            <span className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                {course.students.toLocaleString()}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Video className="w-4 h-4" />
                                                {course.lectures}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {course.duration}
                                            </span>
                                        </div>

                                        {course.rating > 0 && (
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 text-warning-400 fill-warning-400" />
                                                    <span className="font-medium">{course.rating}</span>
                                                </div>
                                                <span className="text-sm text-foreground-secondary">
                                                    ({course.reviews} reviews)
                                                </span>
                                            </div>
                                        )}

                                        <div className="flex items-center gap-2 pt-4 border-t border-glass-border">
                                            <Link
                                                href={`/admin/courses/${course.id}/edit`}
                                                className="btn btn-secondary flex-1 py-2"
                                            >
                                                <Edit className="w-4 h-4" />
                                                Edit
                                            </Link>
                                            <Link
                                                href={`/admin/courses/${course.id}/lectures`}
                                                className="btn btn-primary flex-1 py-2"
                                            >
                                                <Video className="w-4 h-4" />
                                                Lectures
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* List View */
                        <div className="glass-card overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-background-secondary/50">
                                    <tr>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Course</th>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Price</th>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Students</th>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Rating</th>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Status</th>
                                        <th className="text-right px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-glass-border">
                                    {courses.map((course) => (
                                        <tr key={course.id} className="hover:bg-primary-500/5 transition-colors">
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img src={course.thumbnail} alt="" className="w-16 h-10 rounded-lg object-cover" />
                                                    <div>
                                                        <p className="font-medium line-clamp-1">{course.title}</p>
                                                        <p className="text-xs text-foreground-secondary">{course.lectures} lectures • {course.duration}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 font-medium">${course.price}</td>
                                            <td className="px-5 py-4">{course.students.toLocaleString()}</td>
                                            <td className="px-5 py-4">
                                                {course.rating > 0 ? (
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 text-warning-400 fill-warning-400" />
                                                        {course.rating}
                                                    </div>
                                                ) : '-'}
                                            </td>
                                            <td className="px-5 py-4">
                                                <span className={`badge ${course.status === 'Published' ? 'badge-success' : 'badge-warning'}`}>
                                                    {course.status}
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-right">
                                                <div className="flex items-center justify-end gap-1">
                                                    <Link href={`/admin/courses/${course.id}/edit`} className="p-2 hover:bg-primary-500/10 rounded-lg">
                                                        <Edit className="w-4 h-4" />
                                                    </Link>
                                                    <Link href={`/admin/courses/${course.id}/lectures`} className="p-2 hover:bg-primary-500/10 rounded-lg">
                                                        <Video className="w-4 h-4" />
                                                    </Link>
                                                    <button className="p-2 hover:bg-error-500/10 rounded-lg">
                                                        <Trash2 className="w-4 h-4 text-error-400" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
