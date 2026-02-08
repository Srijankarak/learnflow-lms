"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    SkipBack,
    SkipForward,
    Settings,
    CheckCircle2,
    Circle,
    ChevronLeft,
    ChevronDown,
    ChevronRight,
    MessageSquare,
    FileText,
    Download,
    Bookmark,
    Share2,
    ThumbsUp,
    Clock,
    Menu,
    X
} from "lucide-react";

// Course curriculum data
const curriculum = [
    {
        id: 1,
        title: "Introduction to Web Development",
        completed: true,
        lessons: [
            { id: 1, title: "Welcome to the Course", duration: "5:00", completed: true, type: "video" },
            { id: 2, title: "How Websites Work", duration: "12:00", completed: true, type: "video" },
            { id: 3, title: "Setting Up Your Environment", duration: "15:00", completed: true, type: "video" },
            { id: 4, title: "Course Resources", duration: "2:00", completed: true, type: "article" },
        ]
    },
    {
        id: 2,
        title: "HTML5 Fundamentals",
        completed: true,
        lessons: [
            { id: 5, title: "HTML Document Structure", duration: "10:00", completed: true, type: "video" },
            { id: 6, title: "Text Elements and Formatting", duration: "15:00", completed: true, type: "video" },
            { id: 7, title: "Links and Navigation", duration: "12:00", completed: true, type: "video" },
            { id: 8, title: "Quiz: HTML Basics", duration: "10 questions", completed: true, type: "quiz" },
        ]
    },
    {
        id: 3,
        title: "CSS3 Mastery",
        completed: false,
        lessons: [
            { id: 9, title: "CSS Selectors Deep Dive", duration: "20:00", completed: true, type: "video" },
            { id: 10, title: "Box Model Explained", duration: "15:00", completed: true, type: "video" },
            { id: 11, title: "Flexbox Layout", duration: "25:00", completed: false, type: "video", current: true },
            { id: 12, title: "CSS Grid Layout", duration: "30:00", completed: false, type: "video" },
        ]
    },
    {
        id: 4,
        title: "JavaScript Essentials",
        completed: false,
        lessons: [
            { id: 13, title: "Variables and Data Types", duration: "15:00", completed: false, type: "video" },
            { id: 14, title: "Functions and Scope", duration: "20:00", completed: false, type: "video" },
            { id: 15, title: "DOM Manipulation", duration: "25:00", completed: false, type: "video" },
            { id: 16, title: "Project: Interactive Todo List", duration: "45:00", completed: false, type: "project" },
        ]
    },
];

const currentLesson = {
    title: "Flexbox Layout",
    description: "Master CSS Flexbox to create flexible and responsive layouts. Learn about flex containers, flex items, alignment, and practical use cases.",
    instructor: "Sarah Johnson",
    duration: "25:00",
};

export default function LearnPage({ params }: { params: { courseId: string } }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [expandedSections, setExpandedSections] = useState<number[]>([1, 2, 3]);

    const toggleSection = (sectionId: number) => {
        setExpandedSections(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const completedLessons = curriculum.flatMap(s => s.lessons).filter(l => l.completed).length;
    const totalLessons = curriculum.flatMap(s => s.lessons).length;
    const progress = Math.round((completedLessons / totalLessons) * 100);

    return (
        <main className="min-h-screen bg-background flex flex-col">
            {/* Top Navigation */}
            <nav className="glass sticky top-0 z-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="btn btn-ghost p-2">
                        <ChevronLeft className="w-5 h-5" />
                    </Link>
                    <div className="hidden sm:block">
                        <p className="font-semibold line-clamp-1">Complete Web Development Bootcamp</p>
                        <p className="text-sm text-foreground-secondary line-clamp-1">{currentLesson.title}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-2 px-4 py-2 glass rounded-xl">
                        <div className="w-24 h-2 bg-background-secondary rounded-full overflow-hidden">
                            <div
                                className="h-full gradient-primary rounded-full transition-all"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <span className="text-sm font-medium">{progress}%</span>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="btn btn-ghost p-2 lg:hidden"
                    >
                        {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            <div className="flex flex-1 overflow-hidden">
                {/* Main Content */}
                <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'lg:mr-80' : ''}`}>
                    {/* Video Player */}
                    <div className="relative bg-black aspect-video">
                        <img
                            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1280&h=720&fit=crop"
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                        />

                        {/* Play Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                            >
                                {isPlaying ? (
                                    <Pause className="w-8 h-8 text-primary-600" />
                                ) : (
                                    <Play className="w-8 h-8 text-primary-600 ml-1" />
                                )}
                            </button>
                        </div>

                        {/* Video Controls */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            {/* Progress Bar */}
                            <div className="mb-3 group cursor-pointer">
                                <div className="h-1 bg-white/30 rounded-full overflow-hidden group-hover:h-2 transition-all">
                                    <div className="h-full w-1/3 bg-primary-500 rounded-full relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-5 h-5 text-white" />
                                        ) : (
                                            <Play className="w-5 h-5 text-white" />
                                        )}
                                    </button>
                                    <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                        <SkipBack className="w-5 h-5 text-white" />
                                    </button>
                                    <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                        <SkipForward className="w-5 h-5 text-white" />
                                    </button>
                                    <button
                                        onClick={() => setIsMuted(!isMuted)}
                                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                    >
                                        {isMuted ? (
                                            <VolumeX className="w-5 h-5 text-white" />
                                        ) : (
                                            <Volume2 className="w-5 h-5 text-white" />
                                        )}
                                    </button>
                                    <span className="text-white text-sm ml-2">8:24 / 25:00</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                        <Settings className="w-5 h-5 text-white" />
                                    </button>
                                    <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                                        <Maximize className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lesson Info */}
                    <div className="p-6 overflow-y-auto flex-1">
                        <div className="max-w-4xl">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                                <div>
                                    <h1 className="text-2xl font-bold mb-2">{currentLesson.title}</h1>
                                    <div className="flex items-center gap-4 text-sm text-foreground-secondary">
                                        <span>By {currentLesson.instructor}</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {currentLesson.duration}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="btn btn-ghost p-2">
                                        <Bookmark className="w-5 h-5" />
                                    </button>
                                    <button className="btn btn-ghost p-2">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                    <button className="btn btn-ghost p-2">
                                        <ThumbsUp className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <p className="text-foreground-secondary mb-6">
                                {currentLesson.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                <button className="btn btn-primary">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Mark as Complete
                                </button>
                                <button className="btn btn-secondary">
                                    <FileText className="w-5 h-5" />
                                    View Resources
                                </button>
                                <button className="btn btn-secondary">
                                    <Download className="w-5 h-5" />
                                    Download
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="border-b border-glass-border mb-6">
                                <div className="flex gap-6">
                                    <button className="pb-3 border-b-2 border-primary-500 text-primary-400 font-medium">
                                        Overview
                                    </button>
                                    <button className="pb-3 border-b-2 border-transparent text-foreground-secondary hover:text-foreground transition-colors">
                                        Q&A
                                    </button>
                                    <button className="pb-3 border-b-2 border-transparent text-foreground-secondary hover:text-foreground transition-colors">
                                        Notes
                                    </button>
                                    <button className="pb-3 border-b-2 border-transparent text-foreground-secondary hover:text-foreground transition-colors">
                                        Reviews
                                    </button>
                                </div>
                            </div>

                            {/* Lesson Content */}
                            <div className="glass-card p-6">
                                <h3 className="font-semibold mb-4">What you&apos;ll learn in this lesson</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                                        <span className="text-foreground-secondary">Understand the Flexbox layout model and its core concepts</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                                        <span className="text-foreground-secondary">Master flex container properties: flex-direction, justify-content, align-items</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                                        <span className="text-foreground-secondary">Learn flex item properties: flex-grow, flex-shrink, flex-basis</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                                        <span className="text-foreground-secondary">Build real-world responsive layouts with Flexbox</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar - Course Content */}
                <aside className={`fixed lg:fixed right-0 top-[57px] bottom-0 w-80 glass border-l border-glass-border overflow-y-auto transition-transform duration-300 z-40 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-4 border-b border-glass-border sticky top-0 glass z-10">
                        <h3 className="font-semibold">Course Content</h3>
                        <p className="text-sm text-foreground-secondary">
                            {completedLessons} / {totalLessons} lessons completed
                        </p>
                    </div>

                    <div className="divide-y divide-glass-border">
                        {curriculum.map((section) => (
                            <div key={section.id}>
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="w-full p-4 flex items-center justify-between hover:bg-primary-500/5 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        {section.completed ? (
                                            <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-foreground-secondary shrink-0" />
                                        )}
                                        <span className="font-medium text-sm text-left">{section.title}</span>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-foreground-secondary transition-transform ${expandedSections.includes(section.id) ? 'rotate-180' : ''}`} />
                                </button>

                                {expandedSections.includes(section.id) && (
                                    <div className="bg-background-secondary/30">
                                        {section.lessons.map((lesson) => (
                                            <button
                                                key={lesson.id}
                                                className={`w-full p-4 pl-12 flex items-center justify-between text-left text-sm hover:bg-primary-500/10 transition-colors ${lesson.current ? 'bg-primary-500/10 border-l-2 border-primary-500' : ''}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    {lesson.completed ? (
                                                        <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                                                    ) : lesson.current ? (
                                                        <Play className="w-4 h-4 text-primary-500 shrink-0" />
                                                    ) : (
                                                        <Circle className="w-4 h-4 text-foreground-secondary shrink-0" />
                                                    )}
                                                    <span className={lesson.current ? 'text-primary-400' : 'text-foreground-secondary'}>
                                                        {lesson.title}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-foreground-secondary">{lesson.duration}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </main>
    );
}
