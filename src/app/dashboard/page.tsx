import Link from "next/link";
import {
    BookOpen,
    Clock,
    Award,
    TrendingUp,
    Play,
    Star,
    Bell,
    Calendar,
    Target,
    Flame,
    ChevronRight,
    MoreHorizontal,
    Settings,
    User,
    LogOut,
    GraduationCap,
    BarChart3,
    Trophy,
    Zap
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";

// Dashboard data
const userData = {
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    email: "john@example.com",
    streak: 7,
    totalHours: 48,
    coursesCompleted: 3,
    certificates: 2,
};

const enrolledCourses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp 2024",
        instructor: "Sarah Johnson",
        progress: 68,
        nextLesson: "React Hooks Deep Dive",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=120&fit=crop",
        totalLessons: 385,
        completedLessons: 262,
        lastAccessed: "2 hours ago",
    },
    {
        id: 2,
        title: "Advanced React & Next.js Masterclass",
        instructor: "Michael Chen",
        progress: 35,
        nextLesson: "Server Components",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=120&fit=crop",
        totalLessons: 220,
        completedLessons: 77,
        lastAccessed: "Yesterday",
    },
    {
        id: 3,
        title: "UI/UX Design Fundamentals",
        instructor: "Emily Davis",
        progress: 92,
        nextLesson: "Final Project",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=120&fit=crop",
        totalLessons: 280,
        completedLessons: 258,
        lastAccessed: "3 days ago",
    },
];

const achievements = [
    { icon: Flame, title: "7 Day Streak", description: "Keep it going!", color: "text-warning-500" },
    { icon: Trophy, title: "Fast Learner", description: "Completed 10 lessons in a day", color: "text-primary-500" },
    { icon: Target, title: "Goal Setter", description: "Set your first learning goal", color: "text-success-500" },
    { icon: Zap, title: "Quick Start", description: "Started 3 courses", color: "text-accent-500" },
];

const upcomingDeadlines = [
    { course: "Web Development Bootcamp", task: "Submit Project 3", due: "Tomorrow" },
    { course: "React Masterclass", task: "Quiz: Server Components", due: "In 3 days" },
    { course: "UI/UX Design", task: "Final Project Submission", due: "In 5 days" },
];

const weeklyProgress = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 1.8 },
    { day: "Wed", hours: 3.2 },
    { day: "Thu", hours: 2.0 },
    { day: "Fri", hours: 1.5 },
    { day: "Sat", hours: 4.0 },
    { day: "Sun", hours: 2.8 },
];

const maxHours = Math.max(...weeklyProgress.map(d => d.hours));

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-20">
                <div className="container-custom py-8">
                    {/* Welcome Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                        <div className="flex items-center gap-4">
                            <img
                                src={userData.avatar}
                                alt={userData.name}
                                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-primary-500/20"
                            />
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold">
                                    Welcome back, <span className="gradient-text">{userData.name.split(' ')[0]}</span>! 👋
                                </h1>
                                <p className="text-foreground-secondary">
                                    You&apos;re on a {userData.streak} day streak! Keep it up!
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href="/courses" className="btn btn-secondary">
                                Browse Courses
                            </Link>
                            <Link href="/dashboard/settings" className="btn btn-ghost">
                                <Settings className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <div className="glass-card p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                                    <Flame className="w-5 h-5 text-primary-500" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold">{userData.streak} Days</p>
                            <p className="text-sm text-foreground-secondary">Current Streak</p>
                        </div>
                        <div className="glass-card p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-accent-500" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold">{userData.totalHours}h</p>
                            <p className="text-sm text-foreground-secondary">Learning Time</p>
                        </div>
                        <div className="glass-card p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-success-500/10 flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-success-500" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold">{userData.coursesCompleted}</p>
                            <p className="text-sm text-foreground-secondary">Courses Completed</p>
                        </div>
                        <div className="glass-card p-5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-warning-500/10 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-warning-500" />
                                </div>
                            </div>
                            <p className="text-2xl font-bold">{userData.certificates}</p>
                            <p className="text-sm text-foreground-secondary">Certificates Earned</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Continue Learning */}
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold">Continue Learning</h2>
                                    <Link href="/dashboard/courses" className="text-primary-400 text-sm hover:underline flex items-center gap-1">
                                        View All <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="space-y-4">
                                    {enrolledCourses.map((course) => (
                                        <Link
                                            key={course.id}
                                            href={`/learn/${course.id}`}
                                            className="glass-card p-4 flex flex-col sm:flex-row gap-4 group"
                                        >
                                            <div className="relative w-full sm:w-40 h-24 rounded-xl overflow-hidden shrink-0">
                                                <img
                                                    src={course.image}
                                                    alt={course.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Play className="w-8 h-8 text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold mb-1 group-hover:text-primary-400 transition-colors line-clamp-1">
                                                    {course.title}
                                                </h3>
                                                <p className="text-sm text-foreground-secondary mb-3">
                                                    {course.instructor}
                                                </p>
                                                <div className="mb-2">
                                                    <div className="flex items-center justify-between text-sm mb-1">
                                                        <span className="text-foreground-secondary">
                                                            {course.completedLessons}/{course.totalLessons} lessons
                                                        </span>
                                                        <span className="font-medium">{course.progress}%</span>
                                                    </div>
                                                    <div className="progress-bar">
                                                        <div
                                                            className="progress-bar-fill"
                                                            style={{ width: `${course.progress}%` }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-foreground-secondary">
                                                        Next: {course.nextLesson}
                                                    </span>
                                                    <span className="text-foreground-secondary text-xs">
                                                        {course.lastAccessed}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Weekly Progress Chart */}
                            <section className="glass-card p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold">Weekly Progress</h2>
                                    <select className="input py-2 px-3 text-sm w-auto">
                                        <option>This Week</option>
                                        <option>Last Week</option>
                                        <option>This Month</option>
                                    </select>
                                </div>
                                <div className="flex items-end justify-between gap-2 h-40">
                                    {weeklyProgress.map((day, index) => (
                                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                            <div
                                                className="w-full rounded-t-lg gradient-primary transition-all duration-500 hover:opacity-80"
                                                style={{ height: `${(day.hours / maxHours) * 100}%`, minHeight: '8px' }}
                                            />
                                            <span className="text-xs text-foreground-secondary">{day.day}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-glass-border">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold gradient-text">17.8h</p>
                                        <p className="text-sm text-foreground-secondary">Total This Week</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-success-500">+23%</p>
                                        <p className="text-sm text-foreground-secondary">vs Last Week</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Achievements */}
                            <section className="glass-card p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="font-bold">Recent Achievements</h2>
                                    <Link href="/dashboard/achievements" className="text-primary-400 text-sm hover:underline">
                                        View All
                                    </Link>
                                </div>
                                <div className="space-y-4">
                                    {achievements.map((achievement, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-xl bg-background-secondary flex items-center justify-center ${achievement.color}`}>
                                                <achievement.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{achievement.title}</p>
                                                <p className="text-xs text-foreground-secondary">{achievement.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Upcoming Deadlines */}
                            <section className="glass-card p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="font-bold">Upcoming Deadlines</h2>
                                    <Calendar className="w-5 h-5 text-foreground-secondary" />
                                </div>
                                <div className="space-y-4">
                                    {upcomingDeadlines.map((deadline, index) => (
                                        <div key={index} className="pb-4 border-b border-glass-border last:border-0 last:pb-0">
                                            <p className="font-medium text-sm mb-1">{deadline.task}</p>
                                            <div className="flex items-center justify-between text-xs text-foreground-secondary">
                                                <span>{deadline.course}</span>
                                                <span className={deadline.due === "Tomorrow" ? "text-warning-400" : ""}>
                                                    {deadline.due}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Learning Goal */}
                            <section className="glass-card p-6">
                                <h2 className="font-bold mb-4">Daily Goal</h2>
                                <div className="text-center mb-4">
                                    <div className="relative w-24 h-24 mx-auto">
                                        <svg className="w-full h-full -rotate-90">
                                            <circle
                                                cx="48"
                                                cy="48"
                                                r="40"
                                                className="stroke-background-secondary"
                                                strokeWidth="8"
                                                fill="none"
                                            />
                                            <circle
                                                cx="48"
                                                cy="48"
                                                r="40"
                                                className="stroke-primary-500"
                                                strokeWidth="8"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeDasharray={251.2}
                                                strokeDashoffset={251.2 * (1 - 0.7)}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-xl font-bold">70%</span>
                                            <span className="text-xs text-foreground-secondary">1.4h / 2h</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center text-sm text-foreground-secondary mb-4">
                                    30 more minutes to reach your daily goal!
                                </p>
                                <Link href="/learn/1" className="btn btn-primary w-full">
                                    Continue Learning
                                </Link>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
