import Link from "next/link";
import {
    GraduationCap,
    Mail,
    Lock,
    User,
    ArrowRight,
    Github,
    Chrome,
    CheckCircle2
} from "lucide-react";

const benefits = [
    "Access to 500+ expert-led courses",
    "Earn industry-recognized certificates",
    "Learn at your own pace, anytime",
    "Join a community of 50K+ learners",
];

export default function RegisterPage() {
    return (
        <main className="min-h-screen flex">
            {/* Left Side - Benefits */}
            <div className="hidden lg:flex flex-1 relative overflow-hidden">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-500/30 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-accent-500/30 rounded-full blur-[120px]" />

                <div className="relative z-10 flex flex-col justify-center p-12">
                    <h2 className="text-4xl font-bold mb-6">
                        Start your learning journey <span className="gradient-text">today</span>
                    </h2>
                    <p className="text-lg text-foreground-secondary mb-8 max-w-md">
                        Join thousands of learners who are transforming their careers with LearnFlow.
                    </p>

                    <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-success-500 shrink-0" />
                                <span className="text-lg">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 glass-card p-6 max-w-md">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop"
                                alt="Testimonial"
                                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-500/20"
                            />
                            <div>
                                <p className="font-semibold">Jessica Williams</p>
                                <p className="text-sm text-foreground-secondary">Frontend Developer at Google</p>
                            </div>
                        </div>
                        <p className="text-foreground-secondary italic">
                            &quot;LearnFlow helped me land my dream job. The courses are practical and the community is amazing!&quot;
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 mb-8">
                        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold gradient-text">LearnFlow</span>
                    </Link>

                    <h1 className="text-3xl font-bold mb-2">Create an account</h1>
                    <p className="text-foreground-secondary mb-8">
                        Start your free trial. No credit card required.
                    </p>

                    {/* Social Signup */}
                    <div className="space-y-3 mb-6">
                        <button className="btn btn-secondary w-full py-3 justify-center">
                            <Chrome className="w-5 h-5" />
                            Sign up with Google
                        </button>
                        <button className="btn btn-secondary w-full py-3 justify-center">
                            <Github className="w-5 h-5" />
                            Sign up with GitHub
                        </button>
                    </div>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-glass-border" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-background px-4 text-sm text-foreground-secondary">
                                or sign up with email
                            </span>
                        </div>
                    </div>

                    {/* Register Form */}
                    <form className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">First Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-secondary" />
                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="input pl-11"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="input"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-secondary" />
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="input pl-11"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-secondary" />
                                <input
                                    type="password"
                                    placeholder="Create a strong password"
                                    className="input pl-11"
                                />
                            </div>
                            <p className="text-xs text-foreground-secondary mt-2">
                                Must be at least 8 characters with a number and symbol
                            </p>
                        </div>

                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="w-4 h-4 accent-primary-500 rounded mt-0.5"
                            />
                            <label htmlFor="terms" className="text-sm text-foreground-secondary">
                                I agree to the{" "}
                                <Link href="/terms" className="text-primary-400 hover:underline">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-primary-400 hover:underline">
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary w-full py-4">
                            Create Account
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    <p className="text-center text-foreground-secondary mt-8">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary-400 hover:underline font-medium">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
