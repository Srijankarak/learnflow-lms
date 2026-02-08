import Link from "next/link";
import {
    Star,
    Users,
    BookOpen,
    Play,
    Award,
    Globe,
    Twitter,
    Linkedin,
    Youtube,
    ChevronRight,
    Clock,
    Heart,
    Share2,
    MessageCircle,
    TrendingUp
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Educator data
const educator = {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Full-Stack Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop",
    bio: "I'm a passionate educator with 10+ years of experience in web development. I've worked at companies like Google and Meta, and now I dedicate my time to helping aspiring developers master their craft. My teaching philosophy focuses on practical, project-based learning.",
    rating: 4.9,
    reviewCount: 2847,
    students: 45230,
    courses: 8,
    followers: 12500,
    following: false,
    expertise: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS"],
    achievements: [
        { icon: Award, label: "Top Rated Educator", year: "2024" },
        { icon: TrendingUp, label: "50K+ Students Milestone", year: "2023" },
        { icon: Star, label: "Best Web Dev Course", year: "2023" },
    ],
    social: {
        website: "https://sarahjohnson.dev",
        twitter: "@sarahcodes",
        linkedin: "sarahjohnsondev",
        youtube: "SarahJohnsonDev"
    }
};

const courses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp 2024",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
        rating: 4.9,
        students: 15420,
        duration: "42h 30m",
        lectures: 125,
        price: 89.99,
        bestseller: true,
    },
    {
        id: 2,
        title: "Advanced React & Next.js Masterclass",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
        rating: 4.8,
        students: 8930,
        duration: "28h 15m",
        lectures: 85,
        price: 79.99,
        bestseller: true,
    },
    {
        id: 3,
        title: "Node.js & Express Complete Guide",
        thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
        rating: 4.7,
        students: 6540,
        duration: "24h 00m",
        lectures: 72,
        price: 69.99,
        bestseller: false,
    },
    {
        id: 4,
        title: "MongoDB Mastery: From Basics to Advanced",
        thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
        rating: 4.8,
        students: 4230,
        duration: "18h 45m",
        lectures: 56,
        price: 59.99,
        bestseller: false,
    },
];

const reviews = [
    {
        id: 1,
        user: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
        rating: 5,
        course: "Complete Web Development Bootcamp",
        comment: "Sarah is an amazing instructor! Her explanations are clear and she makes complex concepts easy to understand. Best investment I've made in my career.",
        date: "2 weeks ago",
    },
    {
        id: 2,
        user: "Emily Davis",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
        rating: 5,
        course: "React & Next.js Masterclass",
        comment: "The course structure is perfect. Real-world projects helped me land my first developer job!",
        date: "1 month ago",
    },
    {
        id: 3,
        user: "Alex Thompson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
        rating: 4,
        course: "Node.js & Express Guide",
        comment: "Great course with practical examples. Would recommend to anyone starting backend development.",
        date: "1 month ago",
    },
];

export default function EducatorProfilePage({ params }: { params: { id: string } }) {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Cover Image */}
            <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
                <img
                    src={educator.coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>

            <div className="container-custom -mt-20 relative z-10">
                {/* Profile Header */}
                <div className="glass-card p-6 md:p-8 mb-8">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Avatar */}
                        <div className="shrink-0">
                            <img
                                src={educator.avatar}
                                alt={educator.name}
                                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover ring-4 ring-primary-500/20 mx-auto md:mx-0"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                                <h1 className="text-2xl md:text-3xl font-bold">{educator.name}</h1>
                                <span className="badge badge-primary mx-auto md:mx-0">Pro Educator</span>
                            </div>
                            <p className="text-lg text-foreground-secondary mb-4">{educator.title}</p>

                            {/* Stats */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-warning-400 fill-warning-400" />
                                    <span className="font-bold">{educator.rating}</span>
                                    <span className="text-foreground-secondary">({educator.reviewCount.toLocaleString()} reviews)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary-500" />
                                    <span className="font-bold">{educator.students.toLocaleString()}</span>
                                    <span className="text-foreground-secondary">Students</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-accent-500" />
                                    <span className="font-bold">{educator.courses}</span>
                                    <span className="text-foreground-secondary">Courses</span>
                                </div>
                            </div>

                            {/* Expertise Tags */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                                {educator.expertise.map((skill, index) => (
                                    <span key={index} className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center md:justify-start gap-3">
                                <a href={educator.social.website} className="btn btn-ghost p-2" target="_blank">
                                    <Globe className="w-5 h-5" />
                                </a>
                                <a href={`https://twitter.com/${educator.social.twitter}`} className="btn btn-ghost p-2" target="_blank">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href={`https://linkedin.com/in/${educator.social.linkedin}`} className="btn btn-ghost p-2" target="_blank">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href={`https://youtube.com/${educator.social.youtube}`} className="btn btn-ghost p-2" target="_blank">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3 shrink-0">
                            <button className="btn btn-primary">
                                <Heart className="w-5 h-5" />
                                Follow ({(educator.followers / 1000).toFixed(1)}K)
                            </button>
                            <button className="btn btn-secondary">
                                <MessageCircle className="w-5 h-5" />
                                Message
                            </button>
                            <button className="btn btn-ghost">
                                <Share2 className="w-5 h-5" />
                                Share Profile
                            </button>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="mt-6 pt-6 border-t border-glass-border">
                        <h3 className="font-semibold mb-3">About</h3>
                        <p className="text-foreground-secondary leading-relaxed">{educator.bio}</p>
                    </div>

                    {/* Achievements */}
                    <div className="mt-6 pt-6 border-t border-glass-border">
                        <h3 className="font-semibold mb-4">Achievements</h3>
                        <div className="flex flex-wrap gap-4">
                            {educator.achievements.map((achievement, index) => (
                                <div key={index} className="flex items-center gap-3 px-4 py-2 rounded-xl bg-warning-500/10">
                                    <achievement.icon className="w-5 h-5 text-warning-500" />
                                    <div>
                                        <p className="font-medium text-sm">{achievement.label}</p>
                                        <p className="text-xs text-foreground-secondary">{achievement.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Courses Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Courses by {educator.name.split(' ')[0]}</h2>
                        <span className="text-foreground-secondary">{courses.length} courses</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {courses.map((course) => (
                            <Link key={course.id} href={`/courses/${course.id}`} className="glass-card overflow-hidden group">
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {course.bestseller && (
                                        <span className="absolute top-3 left-3 badge badge-warning">Bestseller</span>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary-400 transition-colors">
                                        {course.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm mb-2">
                                        <Star className="w-4 h-4 text-warning-400 fill-warning-400" />
                                        <span className="font-medium">{course.rating}</span>
                                        <span className="text-foreground-secondary">({course.students.toLocaleString()})</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-foreground-secondary mb-3">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {course.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Play className="w-3 h-3" />
                                            {course.lectures} lectures
                                        </span>
                                    </div>
                                    <p className="text-lg font-bold gradient-text">${course.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Student Reviews</h2>
                        <Link href="#" className="text-primary-400 hover:underline flex items-center gap-1">
                            See All <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {reviews.map((review) => (
                            <div key={review.id} className="glass-card p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <img
                                        src={review.avatar}
                                        alt={review.user}
                                        className="w-10 h-10 rounded-xl object-cover"
                                    />
                                    <div>
                                        <p className="font-medium">{review.user}</p>
                                        <p className="text-xs text-foreground-secondary">{review.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? 'text-warning-400 fill-warning-400' : 'text-foreground-secondary'}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-sm text-foreground-secondary mb-2 line-clamp-3">{review.comment}</p>
                                <p className="text-xs text-primary-400">{review.course}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
