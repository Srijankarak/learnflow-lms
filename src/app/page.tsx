import Link from "next/link";
import Image from "next/image";
import {
  Play,
  Star,
  Clock,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Zap,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Quote,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Featured Courses Data
const featuredCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: 15420,
    duration: "42 hours",
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
    students: 8930,
    duration: "28 hours",
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
    students: 12350,
    duration: "35 hours",
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
    students: 9870,
    duration: "48 hours",
    price: 99.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    category: "Data Science",
    level: "Intermediate",
  },
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Jessica Williams",
    role: "Frontend Developer at Google",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "LearnFlow completely transformed my career. The courses are incredibly well-structured and the instructors are world-class. I landed my dream job within 3 months!",
    rating: 5,
  },
  {
    id: 2,
    name: "David Park",
    role: "UX Designer at Apple",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "The quality of content on LearnFlow is unmatched. The practical projects helped me build a portfolio that got me hired at a top tech company.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Data Scientist at Netflix",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "I've tried many learning platforms, but LearnFlow stands out with its modern approach and community support. Worth every penny!",
    rating: 5,
  },
];

// Stats Data
const stats = [
  { value: "50K+", label: "Active Learners", icon: Users },
  { value: "500+", label: "Expert Courses", icon: BookOpen },
  { value: "95%", label: "Success Rate", icon: TrendingUp },
  { value: "4.9", label: "Average Rating", icon: Star },
];

// Features Data
const features = [
  {
    icon: Zap,
    title: "Learn at Your Pace",
    description: "Access courses anytime, anywhere. Learn on your schedule with lifetime access to all purchased content.",
  },
  {
    icon: Award,
    title: "Industry Certificates",
    description: "Earn recognized certificates upon completion. Boost your resume and showcase your new skills.",
  },
  {
    icon: Shield,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience in their fields.",
  },
  {
    icon: Sparkles,
    title: "Interactive Learning",
    description: "Engage with quizzes, projects, and coding exercises. Apply what you learn immediately.",
  },
];

// Categories Data
const categories = [
  { name: "Development", courses: 250, icon: "💻" },
  { name: "Design", courses: 180, icon: "🎨" },
  { name: "Business", courses: 120, icon: "📊" },
  { name: "Marketing", courses: 90, icon: "📱" },
  { name: "Data Science", courses: 85, icon: "📈" },
  { name: "Photography", courses: 60, icon: "📷" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-float delay-200" />

        <div className="relative container-custom section-padding pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-up">
                <Sparkles className="w-4 h-4 text-accent-400" />
                <span className="text-sm font-medium">Trusted by 50,000+ learners worldwide</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up delay-100">
                Unlock Your Potential with{" "}
                <span className="gradient-text">Premium Learning</span>
              </h1>

              <p className="text-lg md:text-xl text-foreground-secondary mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-200">
                Master in-demand skills with expert-led courses. From web development to data science,
                start your journey to success today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
                <Link href="/courses" className="btn btn-primary text-base px-8 py-4">
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="btn btn-secondary text-base px-8 py-4 group">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 animate-fade-up delay-400">
                <p className="text-sm text-foreground-secondary mb-4">Trusted by companies worldwide</p>
                <div className="flex items-center gap-8 justify-center lg:justify-start opacity-60">
                  <span className="text-2xl font-bold">Google</span>
                  <span className="text-2xl font-bold">Meta</span>
                  <span className="text-2xl font-bold">Amazon</span>
                  <span className="text-2xl font-bold hidden sm:block">Microsoft</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image/Card */}
            <div className="relative hidden lg:block animate-fade-up delay-200">
              <div className="relative">
                {/* Main Card */}
                <div className="glass-card p-6 max-w-md ml-auto">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 group">
                    <img
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=340&fit=crop"
                      alt="Student learning"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <button className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-primary-600 ml-1" />
                      </div>
                    </button>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Master Modern Web Development</h3>
                  <div className="flex items-center gap-4 text-sm text-foreground-secondary">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-warning-400 fill-warning-400" />
                      4.9
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      15.4k students
                    </span>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -left-8 top-8 glass-card p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl">92%</p>
                      <p className="text-xs text-foreground-secondary">Course Completion</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-20 glass-card p-4 animate-float delay-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-success-500 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-xl">500+</p>
                      <p className="text-xs text-foreground-secondary">Certificates Issued</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground-secondary/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground-secondary/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="relative -mt-16 z-10">
        <div className="container-custom">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex w-14 h-14 rounded-2xl gradient-primary items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-foreground-secondary text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="badge badge-primary mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn Smarter, Not Harder
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Our platform is designed to provide you with the best learning experience,
              combining cutting-edge technology with expert instruction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 text-center group">
                <div className="inline-flex w-14 h-14 rounded-2xl bg-primary-500/10 items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-foreground-secondary text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CATEGORIES SECTION ==================== */}
      <section className="section-padding bg-background-secondary/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="badge badge-accent mb-4">Browse Categories</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Explore Our Top Categories
              </h2>
            </div>
            <Link href="/categories" className="btn btn-ghost mt-4 md:mt-0">
              View All Categories
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/categories/${category.name.toLowerCase()}`}
                className="glass-card p-6 text-center group cursor-pointer"
              >
                <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform">
                  {category.icon}
                </span>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-foreground-secondary text-sm">{category.courses} courses</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURED COURSES SECTION ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="badge badge-primary mb-4">Featured Courses</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Learn from the Best Instructors
              </h2>
            </div>
            <Link href="/courses" className="btn btn-ghost mt-4 md:mt-0">
              Browse All Courses
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
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
                      <span className="badge bg-warning-500 text-black text-xs">Bestseller</span>
                    )}
                    {course.isNew && (
                      <span className="badge bg-success-500 text-white text-xs">New</span>
                    )}
                  </div>
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xl hover:scale-110">
                    <Play className="w-5 h-5 text-primary-600 ml-0.5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-primary text-xs">{course.category}</span>
                    <span className="text-foreground-secondary text-xs">{course.level}</span>
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-foreground-secondary text-sm mb-3">{course.instructor}</p>

                  <div className="flex items-center gap-4 text-sm text-foreground-secondary mb-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-warning-400 fill-warning-400" />
                      {course.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {(course.students / 1000).toFixed(1)}k
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
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
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="section-padding bg-background-secondary/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="badge badge-accent mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Learners Say
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Join thousands of satisfied learners who have transformed their careers with LearnFlow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="glass-card p-6">
                <Quote className="w-10 h-10 text-primary-500/30 mb-4" />
                <p className="text-foreground-secondary mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-500/20"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-foreground-secondary text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning-400 fill-warning-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/30 rounded-full blur-[150px]" />

        <div className="relative container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Learning Journey</span>?
            </h2>
            <p className="text-xl text-foreground-secondary mb-8">
              Join over 50,000 learners and take the first step towards mastering new skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn btn-primary text-base px-8 py-4">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/courses" className="btn btn-secondary text-base px-8 py-4">
                Browse Courses
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-foreground-secondary">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success-500" />
                Free trial available
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success-500" />
                No credit card required
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
