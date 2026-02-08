import Link from "next/link";
import {
    GraduationCap,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Github,
    Chrome
} from "lucide-react";

export default function LoginPage() {
    return (
        <main className="min-h-screen flex">
            {/* Left Side - Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 mb-8">
                        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold gradient-text">LearnFlow</span>
                    </Link>

                    <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
                    <p className="text-foreground-secondary mb-8">
                        Sign in to continue your learning journey.
                    </p>

                    {/* Social Login */}
                    <div className="space-y-3 mb-6">
                        <button className="btn btn-secondary w-full py-3 justify-center">
                            <Chrome className="w-5 h-5" />
                            Continue with Google
                        </button>
                        <button className="btn btn-secondary w-full py-3 justify-center">
                            <Github className="w-5 h-5" />
                            Continue with GitHub
                        </button>
                    </div>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-glass-border" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-background px-4 text-sm text-foreground-secondary">
                                or continue with email
                            </span>
                        </div>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-secondary" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input pl-11"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-medium">Password</label>
                                <Link href="/forgot-password" className="text-sm text-primary-400 hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-secondary" />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input pl-11 pr-11"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-secondary hover:text-foreground transition-colors"
                                >
                                    <EyeOff className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 accent-primary-500 rounded"
                            />
                            <label htmlFor="remember" className="text-sm text-foreground-secondary">
                                Remember me for 30 days
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary w-full py-4">
                            Sign In
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    <p className="text-center text-foreground-secondary mt-8">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-primary-400 hover:underline font-medium">
                            Sign up for free
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:flex flex-1 relative overflow-hidden">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-500/30 rounded-full blur-[120px]" />

                <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center">
                    <div className="glass-card p-8 max-w-md">
                        <div className="text-6xl mb-6">🚀</div>
                        <h2 className="text-2xl font-bold mb-4">Start Learning Today</h2>
                        <p className="text-foreground-secondary mb-6">
                            Join over 50,000 learners mastering new skills with our expert-led courses.
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex -space-x-3">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-background"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-background"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop"
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-background"
                                />
                            </div>
                            <span className="text-sm text-foreground-secondary">
                                50K+ happy learners
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
