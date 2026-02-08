import Link from "next/link";
import {
    Star,
    Clock,
    Users,
    Play,
    BookOpen,
    Award,
    Globe,
    CheckCircle2,
    Heart,
    Share2,
    ChevronDown,
    ChevronRight,
    PlayCircle,
    FileText,
    Download,
    Infinity,
    Smartphone,
    Shield
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Course data (would come from API in production)
const course = {
    id: 1,
    title: "Complete Web Development Bootcamp 2024",
    subtitle: "Become a full-stack web developer with just ONE course. HTML, CSS, JavaScript, React, Node.js, MongoDB, and more!",
    instructor: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        title: "Senior Full-Stack Developer",
        rating: 4.9,
        students: 125000,
        courses: 12,
        bio: "Sarah is a senior full-stack developer with 10+ years of experience at top tech companies including Google and Amazon. She's passionate about teaching and has helped over 100,000 students learn to code."
    },
    rating: 4.9,
    reviews: 28400,
    students: 154200,
    duration: "42 hours",
    lectures: 385,
    lastUpdated: "January 2024",
    language: "English",
    price: 89.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    videoPreview: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    category: "Development",
    level: "Beginner",
    isBestseller: true,
    whatYouLearn: [
        "Build 16+ real-world projects for your portfolio",
        "Master HTML5, CSS3, and modern JavaScript ES6+",
        "Create responsive websites with Flexbox and Grid",
        "Build full-stack applications with React and Node.js",
        "Work with databases using MongoDB and PostgreSQL",
        "Deploy applications to production",
        "Authentication and security best practices",
        "Version control with Git and GitHub",
    ],
    requirements: [
        "No programming experience needed - I'll teach you everything",
        "A computer with internet access",
        "No paid software required - all tools are free",
    ],
    curriculum: [
        {
            title: "Introduction to Web Development",
            lectures: 15,
            duration: "2h 30m",
            items: [
                { title: "Welcome to the Course", duration: "5:00", isPreview: true },
                { title: "How Websites Work", duration: "12:00", isPreview: true },
                { title: "Setting Up Your Development Environment", duration: "15:00" },
                { title: "Your First Webpage", duration: "20:00" },
            ]
        },
        {
            title: "HTML5 Fundamentals",
            lectures: 25,
            duration: "4h 15m",
            items: [
                { title: "HTML Document Structure", duration: "10:00" },
                { title: "Text Elements and Formatting", duration: "15:00" },
                { title: "Links and Navigation", duration: "12:00" },
                { title: "Images and Media", duration: "18:00" },
            ]
        },
        {
            title: "CSS3 Mastery",
            lectures: 35,
            duration: "6h 45m",
            items: [
                { title: "CSS Selectors Deep Dive", duration: "20:00" },
                { title: "Box Model Explained", duration: "15:00" },
                { title: "Flexbox Layout", duration: "25:00" },
                { title: "CSS Grid Layout", duration: "30:00" },
            ]
        },
        {
            title: "JavaScript Essentials",
            lectures: 50,
            duration: "8h 30m",
            items: [
                { title: "Variables and Data Types", duration: "15:00" },
                { title: "Functions and Scope", duration: "20:00" },
                { title: "DOM Manipulation", duration: "25:00" },
                { title: "Event Handling", duration: "20:00" },
            ]
        },
        {
            title: "React.js Development",
            lectures: 60,
            duration: "10h",
            items: [
                { title: "Introduction to React", duration: "15:00" },
                { title: "Components and Props", duration: "25:00" },
                { title: "State Management", duration: "30:00" },
                { title: "Hooks Deep Dive", duration: "35:00" },
            ]
        },
    ]
};

export default function CourseDetailPage({ params }: { params: { id: string } }) {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 overflow-hidden">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[200px]" />

                <div className="relative container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Course Info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <Link href="/courses" className="text-foreground-secondary hover:text-primary-400 transition-colors text-sm">
                                    Courses
                                </Link>
                                <ChevronRight className="w-4 h-4 text-foreground-secondary" />
                                <span className="text-primary-400 text-sm">{course.category}</span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                {course.isBestseller && (
                                    <span className="badge bg-warning-500 text-black">Bestseller</span>
                                )}
                                <span className="badge badge-primary">{course.level}</span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                {course.title}
                            </h1>

                            <p className="text-lg text-foreground-secondary mb-6">
                                {course.subtitle}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold text-warning-400">{course.rating}</span>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-warning-400 fill-warning-400" />
                                        ))}
                                    </div>
                                    <span className="text-foreground-secondary text-sm">
                                        ({course.reviews.toLocaleString()} ratings)
                                    </span>
                                </div>
                                <span className="flex items-center gap-1 text-foreground-secondary">
                                    <Users className="w-4 h-4" />
                                    {course.students.toLocaleString()} students
                                </span>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={course.instructor.avatar}
                                    alt={course.instructor.name}
                                    className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-500/20"
                                />
                                <div>
                                    <p className="text-sm text-foreground-secondary">Created by</p>
                                    <Link href="#instructor" className="font-medium hover:text-primary-400 transition-colors">
                                        {course.instructor.name}
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-secondary">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {course.duration} total
                                </span>
                                <span className="flex items-center gap-1">
                                    <BookOpen className="w-4 h-4" />
                                    {course.lectures} lectures
                                </span>
                                <span className="flex items-center gap-1">
                                    <Globe className="w-4 h-4" />
                                    {course.language}
                                </span>
                                <span>Last updated {course.lastUpdated}</span>
                            </div>
                        </div>

                        {/* Sticky Purchase Card - Desktop */}
                        <div className="hidden lg:block">
                            <div className="glass-card overflow-hidden sticky top-24">
                                {/* Video Preview */}
                                <div className="relative aspect-video group cursor-pointer">
                                    <img
                                        src={course.videoPreview}
                                        alt="Course preview"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                            <Play className="w-7 h-7 text-primary-600 ml-1" />
                                        </div>
                                    </div>
                                    <p className="absolute bottom-4 left-0 right-0 text-center text-white text-sm font-medium">
                                        Preview this course
                                    </p>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-3xl font-bold">${course.price}</span>
                                        <span className="text-xl text-foreground-secondary line-through">
                                            ${course.originalPrice}
                                        </span>
                                        <span className="badge badge-success">
                                            {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                                        </span>
                                    </div>

                                    <p className="text-error-400 text-sm mb-4">
                                        ⏰ Sale ends in 2 days!
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        <button className="btn btn-primary w-full py-4">
                                            Add to Cart
                                        </button>
                                        <button className="btn btn-secondary w-full py-4">
                                            Buy Now
                                        </button>
                                    </div>

                                    <p className="text-center text-sm text-foreground-secondary mb-6">
                                        30-Day Money-Back Guarantee
                                    </p>

                                    <div className="space-y-3 text-sm">
                                        <h4 className="font-semibold">This course includes:</h4>
                                        <div className="flex items-center gap-3 text-foreground-secondary">
                                            <PlayCircle className="w-4 h-4 shrink-0" />
                                            <span>{course.duration} on-demand video</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-foreground-secondary">
                                            <FileText className="w-4 h-4 shrink-0" />
                                            <span>25 articles</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-foreground-secondary">
                                            <Download className="w-4 h-4 shrink-0" />
                                            <span>85 downloadable resources</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-foreground-secondary">
                                            <Infinity className="w-4 h-4 shrink-0" />
                                            <span>Full lifetime access</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-foreground-secondary">
                                            <Smartphone className="w-4 h-4 shrink-0" />
                                            <span>Access on mobile and TV</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-foreground-secondary">
                                            <Award className="w-4 h-4 shrink-0" />
                                            <span>Certificate of completion</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-glass-border">
                                        <button className="btn btn-ghost text-sm">
                                            <Share2 className="w-4 h-4" />
                                            Share
                                        </button>
                                        <button className="btn btn-ghost text-sm">
                                            <Heart className="w-4 h-4" />
                                            Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Purchase Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 glass p-4">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">${course.price}</span>
                            <span className="text-foreground-secondary line-through">${course.originalPrice}</span>
                        </div>
                    </div>
                    <button className="btn btn-primary flex-1">Add to Cart</button>
                </div>
            </div>

            {/* Course Content */}
            <section className="section-padding pb-32 lg:pb-20">
                <div className="container-custom">
                    <div className="lg:w-2/3">
                        {/* What You'll Learn */}
                        <div className="glass-card p-6 mb-8">
                            <h2 className="text-2xl font-bold mb-6">What you&apos;ll learn</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {course.whatYouLearn.map((item, index) => (
                                    <div key={index} className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                                        <span className="text-foreground-secondary">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Course Curriculum */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-6">Course content</h2>
                            <div className="flex items-center gap-4 text-sm text-foreground-secondary mb-4">
                                <span>{course.curriculum.length} sections</span>
                                <span>•</span>
                                <span>{course.lectures} lectures</span>
                                <span>•</span>
                                <span>{course.duration} total length</span>
                            </div>

                            <div className="space-y-3">
                                {course.curriculum.map((section, index) => (
                                    <div key={index} className="glass-card overflow-hidden">
                                        <button className="w-full p-4 flex items-center justify-between hover:bg-primary-500/5 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <ChevronDown className="w-5 h-5 text-foreground-secondary" />
                                                <span className="font-medium">{section.title}</span>
                                            </div>
                                            <span className="text-sm text-foreground-secondary">
                                                {section.lectures} lectures • {section.duration}
                                            </span>
                                        </button>
                                        <div className="border-t border-glass-border">
                                            {section.items.map((item, itemIndex) => (
                                                <div
                                                    key={itemIndex}
                                                    className="p-4 flex items-center justify-between hover:bg-primary-500/5 transition-colors"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <PlayCircle className="w-4 h-4 text-foreground-secondary" />
                                                        <span className="text-sm">{item.title}</span>
                                                        {item.isPreview && (
                                                            <span className="text-primary-400 text-xs underline cursor-pointer">
                                                                Preview
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-sm text-foreground-secondary">
                                                        {item.duration}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-6">Requirements</h2>
                            <ul className="space-y-3">
                                {course.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-3 text-foreground-secondary">
                                        <span className="w-1.5 h-1.5 rounded-full bg-foreground-secondary mt-2 shrink-0" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Instructor */}
                        <div id="instructor" className="glass-card p-6">
                            <h2 className="text-2xl font-bold mb-6">Instructor</h2>
                            <div className="flex items-start gap-4">
                                <img
                                    src={course.instructor.avatar}
                                    alt={course.instructor.name}
                                    className="w-24 h-24 rounded-full object-cover ring-4 ring-primary-500/20"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-primary-400 mb-1">
                                        {course.instructor.name}
                                    </h3>
                                    <p className="text-foreground-secondary mb-4">{course.instructor.title}</p>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-secondary mb-4">
                                        <span className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-warning-400" />
                                            {course.instructor.rating} Instructor Rating
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Award className="w-4 h-4" />
                                            {course.instructor.courses} Courses
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {(course.instructor.students / 1000).toFixed(0)}K Students
                                        </span>
                                    </div>
                                    <p className="text-foreground-secondary leading-relaxed">
                                        {course.instructor.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
