"use client";

import Link from "next/link";
import { useState } from "react";
import {
    LayoutDashboard,
    BookOpen,
    Users,
    DollarSign,
    TrendingUp,
    Plus,
    Search,
    MoreVertical,
    Edit,
    Trash2,
    Eye,
    ChevronRight,
    Bell,
    Settings,
    LogOut,
    GraduationCap,
    Video,
    FileText,
    BarChart3,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Menu,
    X
} from "lucide-react";

// Admin stats data
const stats = [
    {
        title: "Total Revenue",
        value: "$48,250",
        change: "+12.5%",
        isPositive: true,
        icon: DollarSign,
        color: "text-success-500",
        bgColor: "bg-success-500/10",
    },
    {
        title: "Total Students",
        value: "2,847",
        change: "+8.2%",
        isPositive: true,
        icon: Users,
        color: "text-primary-500",
        bgColor: "bg-primary-500/10",
    },
    {
        title: "Total Courses",
        value: "24",
        change: "+2",
        isPositive: true,
        icon: BookOpen,
        color: "text-accent-500",
        bgColor: "bg-accent-500/10",
    },
    {
        title: "Completion Rate",
        value: "78%",
        change: "-2.1%",
        isPositive: false,
        icon: TrendingUp,
        color: "text-warning-500",
        bgColor: "bg-warning-500/10",
    },
];

// Recent courses
const recentCourses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        students: 1542,
        revenue: "$12,450",
        status: "Published",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=60&fit=crop",
    },
    {
        id: 2,
        title: "React & Next.js Masterclass",
        students: 893,
        revenue: "$8,930",
        status: "Published",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=60&fit=crop",
    },
    {
        id: 3,
        title: "Python for Data Science",
        students: 0,
        revenue: "$0",
        status: "Draft",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=60&fit=crop",
    },
];

// Recent activity
const recentActivity = [
    { type: "enrollment", user: "John Smith", course: "Web Development Bootcamp", time: "2 min ago" },
    { type: "review", user: "Sarah Johnson", course: "React Masterclass", rating: 5, time: "15 min ago" },
    { type: "enrollment", user: "Mike Wilson", course: "Python for Data Science", time: "1 hour ago" },
    { type: "payment", user: "Emily Davis", amount: "$89.99", time: "2 hours ago" },
];

// Sidebar navigation
const sidebarNav = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin", active: true },
    { icon: BookOpen, label: "Courses", href: "/admin/courses" },
    { icon: Video, label: "Lectures", href: "/admin/lectures" },
    { icon: Users, label: "Students", href: "/admin/students" },
    { icon: DollarSign, label: "Earnings", href: "/admin/earnings" },
    { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 glass border-r border-glass-border transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
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
                        <button className="p-2 hover:bg-primary-500/10 rounded-lg transition-colors">
                            <LogOut className="w-4 h-4 text-foreground-secondary" />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                {/* Top Bar */}
                <header className="sticky top-0 z-30 glass border-b border-glass-border px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 hover:bg-primary-500/10 rounded-lg"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            <div>
                                <h1 className="text-xl font-bold">Dashboard</h1>
                                <p className="text-sm text-foreground-secondary">Welcome back, Admin!</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="hidden md:block relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="input pl-10 py-2 w-64"
                                />
                            </div>
                            <button className="relative p-2 hover:bg-primary-500/10 rounded-xl transition-colors">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-error-500 rounded-full" />
                            </button>
                            <Link href="/admin/courses/new" className="btn btn-primary">
                                <Plus className="w-4 h-4" />
                                <span className="hidden sm:inline">New Course</span>
                            </Link>
                        </div>
                    </div>
                </header>

                <div className="p-6">
                    {/* Stats Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="glass-card p-5">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                    </div>
                                    <span className={`flex items-center text-sm font-medium ${stat.isPositive ? 'text-success-500' : 'text-error-500'}`}>
                                        {stat.isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                                        {stat.change}
                                    </span>
                                </div>
                                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                                <p className="text-sm text-foreground-secondary">{stat.title}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Courses Table */}
                        <div className="lg:col-span-2 glass-card overflow-hidden">
                            <div className="p-5 border-b border-glass-border flex items-center justify-between">
                                <h2 className="font-bold">Your Courses</h2>
                                <Link href="/admin/courses" className="text-primary-400 text-sm hover:underline flex items-center gap-1">
                                    View All <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-background-secondary/50">
                                        <tr>
                                            <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase tracking-wider">Course</th>
                                            <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase tracking-wider">Students</th>
                                            <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase tracking-wider">Revenue</th>
                                            <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase tracking-wider">Status</th>
                                            <th className="text-right px-5 py-3 text-xs font-medium text-foreground-secondary uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-glass-border">
                                        {recentCourses.map((course) => (
                                            <tr key={course.id} className="hover:bg-primary-500/5 transition-colors">
                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src={course.image}
                                                            alt={course.title}
                                                            className="w-12 h-8 rounded-lg object-cover"
                                                        />
                                                        <span className="font-medium line-clamp-1">{course.title}</span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-4 text-foreground-secondary">{course.students.toLocaleString()}</td>
                                                <td className="px-5 py-4 font-medium">{course.revenue}</td>
                                                <td className="px-5 py-4">
                                                    <span className={`badge ${course.status === 'Published' ? 'badge-success' : 'badge-warning'}`}>
                                                        {course.status}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <button className="p-2 hover:bg-primary-500/10 rounded-lg transition-colors">
                                                            <Eye className="w-4 h-4 text-foreground-secondary" />
                                                        </button>
                                                        <Link href={`/admin/courses/${course.id}/edit`} className="p-2 hover:bg-primary-500/10 rounded-lg transition-colors">
                                                            <Edit className="w-4 h-4 text-foreground-secondary" />
                                                        </Link>
                                                        <button className="p-2 hover:bg-error-500/10 rounded-lg transition-colors">
                                                            <Trash2 className="w-4 h-4 text-error-400" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="glass-card">
                            <div className="p-5 border-b border-glass-border">
                                <h2 className="font-bold">Recent Activity</h2>
                            </div>
                            <div className="p-5 space-y-4">
                                {recentActivity.map((activity, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activity.type === 'enrollment' ? 'bg-success-500/10 text-success-500' :
                                                activity.type === 'review' ? 'bg-warning-500/10 text-warning-500' :
                                                    'bg-primary-500/10 text-primary-500'
                                            }`}>
                                            {activity.type === 'enrollment' && <Users className="w-4 h-4" />}
                                            {activity.type === 'review' && <FileText className="w-4 h-4" />}
                                            {activity.type === 'payment' && <DollarSign className="w-4 h-4" />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm">
                                                <span className="font-medium">{activity.user}</span>
                                                {activity.type === 'enrollment' && ' enrolled in '}
                                                {activity.type === 'review' && ' reviewed '}
                                                {activity.type === 'payment' && ` paid ${activity.amount}`}
                                                {activity.course && (
                                                    <span className="text-primary-400">{activity.course}</span>
                                                )}
                                            </p>
                                            <p className="text-xs text-foreground-secondary">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
