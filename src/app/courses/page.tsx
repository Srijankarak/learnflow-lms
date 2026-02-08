import Link from "next/link";
import {
    Star,
    Clock,
    Users,
    Filter,
    Grid3X3,
    List,
    Search,
    ChevronDown,
    Play,
    BookOpen,
    SlidersHorizontal
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Extended course list
const allCourses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp 2024",
        instructor: "Sarah Johnson",
        rating: 4.9,
        reviews: 2840,
        students: 15420,
        duration: "42 hours",
        lectures: 385,
        price: 89.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
        category: "Development",
        level: "Beginner",
        isBestseller: true,
    },
    {
        id: 2,
        title: "Advanced React & Next.js Masterclass",
        instructor: "Michael Chen",
        rating: 4.8,
        reviews: 1920,
        students: 8930,
        duration: "28 hours",
        lectures: 220,
        price: 79.99,
        originalPrice: 149.99,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
        category: "Development",
        level: "Advanced",
        isNew: true,
    },
    {
        id: 3,
        title: "UI/UX Design Fundamentals",
        instructor: "Emily Davis",
        rating: 4.9,
        reviews: 3150,
        students: 12350,
        duration: "35 hours",
        lectures: 280,
        price: 69.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        category: "Design",
        level: "Beginner",
        isBestseller: true,
    },
    {
        id: 4,
        title: "Data Science & Machine Learning",
        instructor: "Alex Thompson",
        rating: 4.7,
        reviews: 1560,
        students: 9870,
        duration: "48 hours",
        lectures: 410,
        price: 99.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        category: "Data Science",
        level: "Intermediate",
    },
    {
        id: 5,
        title: "Python for Data Analysis",
        instructor: "Lisa Wang",
        rating: 4.8,
        reviews: 2100,
        students: 11200,
        duration: "32 hours",
        lectures: 260,
        price: 74.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
        category: "Data Science",
        level: "Beginner",
        isBestseller: true,
    },
    {
        id: 6,
        title: "Digital Marketing Mastery",
        instructor: "James Wilson",
        rating: 4.6,
        reviews: 980,
        students: 6540,
        duration: "25 hours",
        lectures: 180,
        price: 59.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        category: "Marketing",
        level: "Beginner",
    },
    {
        id: 7,
        title: "iOS App Development with Swift",
        instructor: "David Kim",
        rating: 4.8,
        reviews: 1450,
        students: 7890,
        duration: "38 hours",
        lectures: 320,
        price: 94.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
        category: "Development",
        level: "Intermediate",
        isNew: true,
    },
    {
        id: 8,
        title: "Financial Analysis & Modeling",
        instructor: "Robert Brown",
        rating: 4.7,
        reviews: 890,
        students: 5430,
        duration: "30 hours",
        lectures: 240,
        price: 84.99,
        originalPrice: 179.99,
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
        category: "Business",
        level: "Advanced",
    },
];

const categories = [
    "All Categories",
    "Development",
    "Design",
    "Data Science",
    "Business",
    "Marketing",
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const ratings = ["Any Rating", "4.5 & up", "4.0 & up", "3.5 & up"];

export default function CoursesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 gradient-hero opacity-50" />
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-[150px]" />

                <div className="relative container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Explore Our <span className="gradient-text">Course Catalog</span>
                    </h1>
                    <p className="text-foreground-secondary text-lg max-w-2xl mx-auto mb-8">
                        Discover over 500+ courses from industry experts. Find the perfect course to advance your career.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-secondary" />
                        <input
                            type="text"
                            placeholder="Search for anything..."
                            className="input pl-12 pr-4 py-4 text-base"
                        />
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="section-padding pt-8">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <aside className="lg:w-72 shrink-0">
                            <div className="glass-card p-6 sticky top-24">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-semibold flex items-center gap-2">
                                        <SlidersHorizontal className="w-5 h-5" />
                                        Filters
                                    </h3>
                                    <button className="text-primary-500 text-sm hover:underline">
                                        Clear All
                                    </button>
                                </div>

                                {/* Category Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium mb-3">Category</h4>
                                    <div className="space-y-2">
                                        {categories.map((cat) => (
                                            <label
                                                key={cat}
                                                className="flex items-center gap-3 cursor-pointer group"
                                            >
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    className="w-4 h-4 accent-primary-500"
                                                    defaultChecked={cat === "All Categories"}
                                                />
                                                <span className="text-sm text-foreground-secondary group-hover:text-foreground transition-colors">
                                                    {cat}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Level Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium mb-3">Level</h4>
                                    <div className="space-y-2">
                                        {levels.map((level) => (
                                            <label
                                                key={level}
                                                className="flex items-center gap-3 cursor-pointer group"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 accent-primary-500 rounded"
                                                />
                                                <span className="text-sm text-foreground-secondary group-hover:text-foreground transition-colors">
                                                    {level}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Rating Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium mb-3">Rating</h4>
                                    <div className="space-y-2">
                                        {ratings.map((rating) => (
                                            <label
                                                key={rating}
                                                className="flex items-center gap-3 cursor-pointer group"
                                            >
                                                <input
                                                    type="radio"
                                                    name="rating"
                                                    className="w-4 h-4 accent-primary-500"
                                                    defaultChecked={rating === "Any Rating"}
                                                />
                                                <span className="text-sm text-foreground-secondary group-hover:text-foreground transition-colors flex items-center gap-1">
                                                    {rating !== "Any Rating" && (
                                                        <Star className="w-3 h-3 text-warning-400 fill-warning-400" />
                                                    )}
                                                    {rating}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div>
                                    <h4 className="font-medium mb-3">Price Range</h4>
                                    <div className="flex gap-3">
                                        <input
                                            type="number"
                                            placeholder="Min"
                                            className="input py-2 text-sm text-center"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Max"
                                            className="input py-2 text-sm text-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Courses Grid */}
                        <div className="flex-1">
                            {/* Toolbar */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                                <p className="text-foreground-secondary">
                                    Showing <span className="text-foreground font-medium">{allCourses.length}</span> courses
                                </p>
                                <div className="flex items-center gap-3">
                                    <select className="input py-2 px-4 text-sm w-auto">
                                        <option>Most Popular</option>
                                        <option>Highest Rated</option>
                                        <option>Newest</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                    </select>
                                    <div className="flex glass rounded-xl overflow-hidden">
                                        <button className="p-2 hover:bg-primary-500/10 transition-colors bg-primary-500/10">
                                            <Grid3X3 className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 hover:bg-primary-500/10 transition-colors">
                                            <List className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Course Grid */}
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {allCourses.map((course) => (
                                    <Link
                                        key={course.id}
                                        href={`/courses/${course.id}`}
                                        className="glass-card overflow-hidden group"
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-video overflow-hidden">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute top-3 left-3 flex gap-2">
                                                {course.isBestseller && (
                                                    <span className="badge bg-warning-500 text-black text-xs">
                                                        Bestseller
                                                    </span>
                                                )}
                                                {course.isNew && (
                                                    <span className="badge bg-success-500 text-white text-xs">
                                                        New
                                                    </span>
                                                )}
                                            </div>
                                            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xl hover:scale-110">
                                                <Play className="w-5 h-5 text-primary-600 ml-0.5" />
                                            </button>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="badge badge-primary text-xs">
                                                    {course.category}
                                                </span>
                                                <span className="text-foreground-secondary text-xs">
                                                    {course.level}
                                                </span>
                                            </div>
                                            <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary-400 transition-colors">
                                                {course.title}
                                            </h3>
                                            <p className="text-foreground-secondary text-sm mb-3">
                                                {course.instructor}
                                            </p>

                                            <div className="flex items-center gap-1 mb-3">
                                                <span className="font-semibold text-warning-400">
                                                    {course.rating}
                                                </span>
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-3 h-3 ${i < Math.floor(course.rating)
                                                                    ? "text-warning-400 fill-warning-400"
                                                                    : "text-foreground-secondary"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-foreground-secondary text-xs">
                                                    ({course.reviews.toLocaleString()})
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-4 text-xs text-foreground-secondary mb-4">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {course.duration}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <BookOpen className="w-3 h-3" />
                                                    {course.lectures} lectures
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xl font-bold">${course.price}</span>
                                                    <span className="text-foreground-secondary line-through text-sm">
                                                        ${course.originalPrice}
                                                    </span>
                                                </div>
                                                <span className="badge badge-success text-xs">
                                                    {Math.round(
                                                        (1 - course.price / course.originalPrice) * 100
                                                    )}
                                                    % OFF
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-center gap-2 mt-12">
                                <button className="btn btn-ghost" disabled>
                                    Previous
                                </button>
                                <button className="w-10 h-10 rounded-xl bg-primary-500 text-white font-medium">
                                    1
                                </button>
                                <button className="w-10 h-10 rounded-xl glass hover:bg-primary-500/10 transition-colors font-medium">
                                    2
                                </button>
                                <button className="w-10 h-10 rounded-xl glass hover:bg-primary-500/10 transition-colors font-medium">
                                    3
                                </button>
                                <span className="px-2">...</span>
                                <button className="w-10 h-10 rounded-xl glass hover:bg-primary-500/10 transition-colors font-medium">
                                    12
                                </button>
                                <button className="btn btn-ghost">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
