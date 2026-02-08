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
    Search,
    Filter,
    MoreVertical,
    Mail,
    Eye,
    Ban,
    Download,
    ChevronLeft,
    ChevronRight,
    Star,
    Clock,
    BookMarked
} from "lucide-react";

// Sidebar navigation
const sidebarNav = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: BookOpen, label: "Courses", href: "/admin/courses" },
    { icon: Video, label: "Lectures", href: "/admin/lectures" },
    { icon: Users, label: "Students", href: "/admin/students", active: true },
    { icon: DollarSign, label: "Earnings", href: "/admin/earnings" },
    { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
];

// Students data
const students = [
    {
        id: 1,
        name: "John Smith",
        email: "john.smith@email.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
        enrolledCourses: 3,
        completedCourses: 1,
        totalSpent: "$269.97",
        lastActive: "2 hours ago",
        joinedDate: "Jan 15, 2024",
        status: "active",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah.j@email.com",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
        enrolledCourses: 5,
        completedCourses: 3,
        totalSpent: "$449.95",
        lastActive: "1 day ago",
        joinedDate: "Dec 20, 2023",
        status: "active",
    },
    {
        id: 3,
        name: "Mike Wilson",
        email: "mike.wilson@email.com",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop",
        enrolledCourses: 1,
        completedCourses: 0,
        totalSpent: "$89.99",
        lastActive: "1 week ago",
        joinedDate: "Feb 1, 2024",
        status: "active",
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily.d@email.com",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop",
        enrolledCourses: 2,
        completedCourses: 2,
        totalSpent: "$159.98",
        lastActive: "3 days ago",
        joinedDate: "Nov 10, 2023",
        status: "active",
    },
    {
        id: 5,
        name: "Alex Thompson",
        email: "alex.t@email.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop",
        enrolledCourses: 4,
        completedCourses: 1,
        totalSpent: "$339.96",
        lastActive: "5 hours ago",
        joinedDate: "Jan 5, 2024",
        status: "suspended",
    },
];

export default function AdminStudentsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStudents, setSelectedStudents] = useState<number[]>([]);

    const toggleSelectAll = () => {
        if (selectedStudents.length === students.length) {
            setSelectedStudents([]);
        } else {
            setSelectedStudents(students.map(s => s.id));
        }
    };

    const toggleStudent = (id: number) => {
        setSelectedStudents(prev =>
            prev.includes(id)
                ? prev.filter(s => s !== id)
                : [...prev, id]
        );
    };

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
                            <h1 className="text-xl font-bold">Students</h1>
                            <p className="text-sm text-foreground-secondary">Manage enrolled students</p>
                        </div>
                        <button className="btn btn-secondary">
                            <Download className="w-4 h-4" />
                            Export CSV
                        </button>
                    </div>
                </header>

                <div className="p-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold gradient-text">{students.length}</p>
                            <p className="text-sm text-foreground-secondary">Total Students</p>
                        </div>
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold text-success-500">{students.filter(s => s.status === 'active').length}</p>
                            <p className="text-sm text-foreground-secondary">Active</p>
                        </div>
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold">{students.reduce((sum, s) => sum + s.enrolledCourses, 0)}</p>
                            <p className="text-sm text-foreground-secondary">Enrollments</p>
                        </div>
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold text-primary-500">$1,309.85</p>
                            <p className="text-sm text-foreground-secondary">Total Revenue</p>
                        </div>
                    </div>

                    {/* Toolbar */}
                    <div className="glass-card p-4 mb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                                <input
                                    type="text"
                                    placeholder="Search students by name or email..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="input pl-10 w-full"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <select className="input py-2 px-4 w-auto">
                                    <option>All Status</option>
                                    <option>Active</option>
                                    <option>Suspended</option>
                                </select>
                                <select className="input py-2 px-4 w-auto">
                                    <option>Sort by: Newest</option>
                                    <option>Sort by: Name</option>
                                    <option>Sort by: Most Courses</option>
                                    <option>Sort by: Highest Spent</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Students Table */}
                    <div className="glass-card overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-background-secondary/50">
                                    <tr>
                                        <th className="text-left px-5 py-3 w-12">
                                            <input
                                                type="checkbox"
                                                checked={selectedStudents.length === students.length}
                                                onChange={toggleSelectAll}
                                                className="w-4 h-4 accent-primary-500 rounded"
                                            />
                                        </th>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Student</th>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Courses</th>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Spent</th>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Last Active</th>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Status</th>
                                        <th className="text-right px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-glass-border">
                                    {students.map((student) => (
                                        <tr key={student.id} className="hover:bg-primary-500/5 transition-colors">
                                            <td className="px-5 py-4">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedStudents.includes(student.id)}
                                                    onChange={() => toggleStudent(student.id)}
                                                    className="w-4 h-4 accent-primary-500 rounded"
                                                />
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={student.avatar}
                                                        alt={student.name}
                                                        className="w-10 h-10 rounded-xl object-cover"
                                                    />
                                                    <div>
                                                        <p className="font-medium">{student.name}</p>
                                                        <p className="text-sm text-foreground-secondary">{student.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-2">
                                                    <BookMarked className="w-4 h-4 text-foreground-secondary" />
                                                    <span>{student.enrolledCourses} enrolled</span>
                                                    <span className="text-foreground-secondary">
                                                        ({student.completedCourses} completed)
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 font-medium">{student.totalSpent}</td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-2 text-foreground-secondary">
                                                    <Clock className="w-4 h-4" />
                                                    {student.lastActive}
                                                </div>
                                            </td>
                                            <td className="px-5 py-4">
                                                <span className={`badge ${student.status === 'active' ? 'badge-success' : 'badge-error'}`}>
                                                    {student.status}
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-right">
                                                <div className="flex items-center justify-end gap-1">
                                                    <button className="p-2 hover:bg-primary-500/10 rounded-lg transition-colors" title="View Profile">
                                                        <Eye className="w-4 h-4 text-foreground-secondary" />
                                                    </button>
                                                    <button className="p-2 hover:bg-primary-500/10 rounded-lg transition-colors" title="Send Email">
                                                        <Mail className="w-4 h-4 text-foreground-secondary" />
                                                    </button>
                                                    <button className="p-2 hover:bg-error-500/10 rounded-lg transition-colors" title="Suspend">
                                                        <Ban className="w-4 h-4 text-error-400" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="px-5 py-4 border-t border-glass-border flex items-center justify-between">
                            <p className="text-sm text-foreground-secondary">
                                Showing 1-5 of 5 students
                            </p>
                            <div className="flex items-center gap-2">
                                <button className="btn btn-ghost p-2" disabled>
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button className="w-8 h-8 rounded-lg bg-primary-500 text-white font-medium">1</button>
                                <button className="btn btn-ghost p-2" disabled>
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
