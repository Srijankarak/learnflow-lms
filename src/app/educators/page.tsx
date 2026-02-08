import Link from "next/link";
import {
    Star,
    Users,
    BookOpen,
    Search,
    Filter,
    Award,
    ChevronRight,
    TrendingUp
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Educators data
const educators = [
    {
        id: 1,
        name: "Sarah Johnson",
        title: "Senior Full-Stack Developer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        rating: 4.9,
        reviewCount: 2847,
        students: 45230,
        courses: 8,
        expertise: ["React", "Next.js", "Node.js"],
        verified: true,
        topRated: true,
    },
    {
        id: 2,
        name: "Michael Chen",
        title: "Data Science Expert",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        rating: 4.8,
        reviewCount: 1923,
        students: 32150,
        courses: 6,
        expertise: ["Python", "Machine Learning", "TensorFlow"],
        verified: true,
        topRated: true,
    },
    {
        id: 3,
        name: "Emily Davis",
        title: "UI/UX Design Lead",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        rating: 4.9,
        reviewCount: 1654,
        students: 28900,
        courses: 5,
        expertise: ["Figma", "UI Design", "User Research"],
        verified: true,
        topRated: false,
    },
    {
        id: 4,
        name: "Alex Thompson",
        title: "DevOps Engineer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
        rating: 4.7,
        reviewCount: 1234,
        students: 19450,
        courses: 4,
        expertise: ["Docker", "Kubernetes", "AWS"],
        verified: true,
        topRated: false,
    },
    {
        id: 5,
        name: "Jessica Williams",
        title: "Mobile App Developer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
        rating: 4.8,
        reviewCount: 987,
        students: 15670,
        courses: 3,
        expertise: ["React Native", "Flutter", "iOS"],
        verified: false,
        topRated: false,
    },
    {
        id: 6,
        name: "David Park",
        title: "Cybersecurity Specialist",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
        rating: 4.9,
        reviewCount: 876,
        students: 12340,
        courses: 4,
        expertise: ["Ethical Hacking", "Network Security", "Penetration Testing"],
        verified: true,
        topRated: true,
    },
];

const categories = [
    "All Categories",
    "Development",
    "Data Science",
    "Design",
    "DevOps",
    "Mobile",
    "Security",
];

export default function EducatorsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 gradient-hero opacity-50" />
                <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[150px]" />

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="badge badge-primary mb-4">Our Educators</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Learn from the <span className="gradient-text">Best Experts</span>
                        </h1>
                        <p className="text-lg text-foreground-secondary mb-8">
                            Our educators are industry professionals with years of experience.
                            They&apos;re passionate about teaching and helping you succeed.
                        </p>

                        {/* Search */}
                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-secondary" />
                                <input
                                    type="text"
                                    placeholder="Search educators by name or expertise..."
                                    className="input pl-12 py-4 text-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-custom py-12">
                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${index === 0
                                    ? "bg-primary-500 text-white"
                                    : "glass hover:bg-primary-500/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="glass-card p-4 text-center">
                        <p className="text-2xl font-bold gradient-text">{educators.length}</p>
                        <p className="text-sm text-foreground-secondary">Expert Educators</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                        <p className="text-2xl font-bold">150K+</p>
                        <p className="text-sm text-foreground-secondary">Total Students</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                        <p className="text-2xl font-bold text-warning-400">4.8</p>
                        <p className="text-sm text-foreground-secondary">Avg. Rating</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                        <p className="text-2xl font-bold text-success-500">30+</p>
                        <p className="text-sm text-foreground-secondary">Courses</p>
                    </div>
                </div>

                {/* Educators Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {educators.map((educator) => (
                        <Link
                            key={educator.id}
                            href={`/educators/${educator.id}`}
                            className="glass-card p-6 group hover:border-primary-500/30 transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="relative">
                                    <img
                                        src={educator.avatar}
                                        alt={educator.name}
                                        className="w-16 h-16 rounded-2xl object-cover ring-2 ring-primary-500/20"
                                    />
                                    {educator.verified && (
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                                            <Award className="w-3 h-3 text-white" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold truncate group-hover:text-primary-400 transition-colors">
                                            {educator.name}
                                        </h3>
                                        {educator.topRated && (
                                            <span className="badge badge-warning text-xs">Top Rated</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-foreground-secondary truncate">{educator.title}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mb-4 text-sm">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-warning-400 fill-warning-400" />
                                    <span className="font-medium">{educator.rating}</span>
                                    <span className="text-foreground-secondary">({educator.reviewCount.toLocaleString()})</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mb-4 text-sm text-foreground-secondary">
                                <span className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {educator.students.toLocaleString()} students
                                </span>
                                <span className="flex items-center gap-1">
                                    <BookOpen className="w-4 h-4" />
                                    {educator.courses} courses
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {educator.expertise.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 rounded-lg bg-primary-500/10 text-primary-400 text-xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-glass-border flex items-center justify-between">
                                <span className="text-sm text-primary-400 font-medium group-hover:underline flex items-center gap-1">
                                    View Profile <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
