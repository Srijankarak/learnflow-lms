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
    ArrowLeft,
    Plus,
    Trash2,
    GripVertical,
    Save,
    Edit,
    Play,
    ChevronDown,
    ChevronRight,
    Upload,
    FileText,
    Clock,
    Eye,
    X,
    Check,
    MoreVertical
} from "lucide-react";

// Sidebar navigation
const sidebarNav = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: BookOpen, label: "Courses", href: "/admin/courses", active: true },
    { icon: Video, label: "Lectures", href: "/admin/lectures" },
    { icon: Users, label: "Students", href: "/admin/students" },
    { icon: DollarSign, label: "Earnings", href: "/admin/earnings" },
    { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
];

// Course sections with lectures
const initialSections = [
    {
        id: 1,
        title: "Introduction to Web Development",
        expanded: true,
        lectures: [
            { id: 1, title: "Welcome to the Course", type: "video", duration: "5:00", status: "published" },
            { id: 2, title: "How the Internet Works", type: "video", duration: "12:30", status: "published" },
            { id: 3, title: "Setting Up Your Development Environment", type: "video", duration: "15:45", status: "published" },
            { id: 4, title: "Course Resources", type: "article", duration: "5 min read", status: "published" },
        ]
    },
    {
        id: 2,
        title: "HTML5 Fundamentals",
        expanded: false,
        lectures: [
            { id: 5, title: "HTML Document Structure", type: "video", duration: "10:00", status: "published" },
            { id: 6, title: "Text and Formatting Elements", type: "video", duration: "18:20", status: "published" },
            { id: 7, title: "HTML Quiz", type: "quiz", duration: "10 questions", status: "draft" },
        ]
    },
    {
        id: 3,
        title: "CSS3 Mastery",
        expanded: false,
        lectures: [
            { id: 8, title: "CSS Selectors", type: "video", duration: "20:00", status: "draft" },
        ]
    },
];

export default function LecturesManagementPage({ params }: { params: { id: string } }) {
    const [sections, setSections] = useState(initialSections);
    const [showAddSection, setShowAddSection] = useState(false);
    const [showAddLecture, setShowAddLecture] = useState<number | null>(null);
    const [newSectionTitle, setNewSectionTitle] = useState("");
    const [newLectureTitle, setNewLectureTitle] = useState("");
    const [newLectureType, setNewLectureType] = useState("video");

    const toggleSection = (sectionId: number) => {
        setSections(prev => prev.map(s =>
            s.id === sectionId ? { ...s, expanded: !s.expanded } : s
        ));
    };

    const addSection = () => {
        if (!newSectionTitle.trim()) return;
        const newSection = {
            id: Date.now(),
            title: newSectionTitle,
            expanded: true,
            lectures: []
        };
        setSections([...sections, newSection]);
        setNewSectionTitle("");
        setShowAddSection(false);
    };

    const addLecture = (sectionId: number) => {
        if (!newLectureTitle.trim()) return;
        setSections(prev => prev.map(s => {
            if (s.id === sectionId) {
                return {
                    ...s,
                    lectures: [...s.lectures, {
                        id: Date.now(),
                        title: newLectureTitle,
                        type: newLectureType,
                        duration: newLectureType === 'video' ? '0:00' : newLectureType === 'quiz' ? '0 questions' : '0 min read',
                        status: 'draft'
                    }]
                };
            }
            return s;
        }));
        setNewLectureTitle("");
        setNewLectureType("video");
        setShowAddLecture(null);
    };

    const totalLectures = sections.reduce((sum, s) => sum + s.lectures.length, 0);
    const publishedLectures = sections.reduce((sum, s) => sum + s.lectures.filter(l => l.status === 'published').length, 0);

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
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64">
                {/* Header */}
                <header className="sticky top-0 z-30 glass border-b border-glass-border px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/admin/courses" className="btn btn-ghost p-2">
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-xl font-bold">Manage Lectures</h1>
                                <p className="text-sm text-foreground-secondary">Complete Web Development Bootcamp</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href={`/admin/courses/${params.id}/edit`} className="btn btn-secondary">
                                <Edit className="w-4 h-4" />
                                Edit Course
                            </Link>
                            <button className="btn btn-primary">
                                <Save className="w-4 h-4" />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </header>

                <div className="p-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold gradient-text">{sections.length}</p>
                            <p className="text-sm text-foreground-secondary">Sections</p>
                        </div>
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold">{totalLectures}</p>
                            <p className="text-sm text-foreground-secondary">Total Lectures</p>
                        </div>
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold text-success-500">{publishedLectures}</p>
                            <p className="text-sm text-foreground-secondary">Published</p>
                        </div>
                        <div className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold text-warning-500">{totalLectures - publishedLectures}</p>
                            <p className="text-sm text-foreground-secondary">Drafts</p>
                        </div>
                    </div>

                    {/* Sections List */}
                    <div className="space-y-4">
                        {sections.map((section, sectionIndex) => (
                            <div key={section.id} className="glass-card overflow-hidden">
                                {/* Section Header */}
                                <div className="p-4 flex items-center gap-3 border-b border-glass-border bg-background-secondary/30">
                                    <GripVertical className="w-5 h-5 text-foreground-secondary cursor-move" />
                                    <button
                                        onClick={() => toggleSection(section.id)}
                                        className="p-1 hover:bg-primary-500/10 rounded transition-colors"
                                    >
                                        {section.expanded ? (
                                            <ChevronDown className="w-5 h-5" />
                                        ) : (
                                            <ChevronRight className="w-5 h-5" />
                                        )}
                                    </button>
                                    <div className="flex-1">
                                        <p className="font-semibold">Section {sectionIndex + 1}: {section.title}</p>
                                        <p className="text-xs text-foreground-secondary">
                                            {section.lectures.length} lectures
                                        </p>
                                    </div>
                                    <button className="p-2 hover:bg-primary-500/10 rounded-lg transition-colors">
                                        <Edit className="w-4 h-4 text-foreground-secondary" />
                                    </button>
                                    <button className="p-2 hover:bg-error-500/10 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4 text-error-400" />
                                    </button>
                                </div>

                                {/* Lectures */}
                                {section.expanded && (
                                    <div>
                                        {section.lectures.map((lecture, lectureIndex) => (
                                            <div
                                                key={lecture.id}
                                                className="p-4 pl-16 flex items-center gap-3 border-b border-glass-border last:border-0 hover:bg-primary-500/5 transition-colors"
                                            >
                                                <GripVertical className="w-4 h-4 text-foreground-secondary cursor-move" />
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${lecture.type === 'video' ? 'bg-primary-500/10 text-primary-500' :
                                                        lecture.type === 'quiz' ? 'bg-warning-500/10 text-warning-500' :
                                                            'bg-accent-500/10 text-accent-500'
                                                    }`}>
                                                    {lecture.type === 'video' && <Play className="w-4 h-4" />}
                                                    {lecture.type === 'article' && <FileText className="w-4 h-4" />}
                                                    {lecture.type === 'quiz' && <Check className="w-4 h-4" />}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium truncate">{lecture.title}</p>
                                                    <div className="flex items-center gap-3 text-xs text-foreground-secondary">
                                                        <span className="capitalize">{lecture.type}</span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {lecture.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className={`badge ${lecture.status === 'published' ? 'badge-success' : 'badge-warning'}`}>
                                                    {lecture.status}
                                                </span>
                                                <button className="p-2 hover:bg-primary-500/10 rounded-lg transition-colors">
                                                    <Eye className="w-4 h-4 text-foreground-secondary" />
                                                </button>
                                                <button className="p-2 hover:bg-primary-500/10 rounded-lg transition-colors">
                                                    <Edit className="w-4 h-4 text-foreground-secondary" />
                                                </button>
                                                <button className="p-2 hover:bg-error-500/10 rounded-lg transition-colors">
                                                    <Trash2 className="w-4 h-4 text-error-400" />
                                                </button>
                                            </div>
                                        ))}

                                        {/* Add Lecture Form */}
                                        {showAddLecture === section.id ? (
                                            <div className="p-4 pl-16 border-t border-glass-border bg-background-secondary/20">
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="text"
                                                        value={newLectureTitle}
                                                        onChange={(e) => setNewLectureTitle(e.target.value)}
                                                        placeholder="Lecture title..."
                                                        className="input flex-1"
                                                        autoFocus
                                                    />
                                                    <select
                                                        value={newLectureType}
                                                        onChange={(e) => setNewLectureType(e.target.value)}
                                                        className="input w-32"
                                                    >
                                                        <option value="video">Video</option>
                                                        <option value="article">Article</option>
                                                        <option value="quiz">Quiz</option>
                                                    </select>
                                                    <button
                                                        onClick={() => addLecture(section.id)}
                                                        className="btn btn-primary"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                        Add
                                                    </button>
                                                    <button
                                                        onClick={() => setShowAddLecture(null)}
                                                        className="btn btn-ghost p-2"
                                                    >
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => setShowAddLecture(section.id)}
                                                className="w-full p-4 pl-16 text-left text-sm text-primary-400 hover:bg-primary-500/5 transition-colors flex items-center gap-2"
                                            >
                                                <Plus className="w-4 h-4" />
                                                Add Lecture
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Add Section Form */}
                        {showAddSection ? (
                            <div className="glass-card p-4">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        value={newSectionTitle}
                                        onChange={(e) => setNewSectionTitle(e.target.value)}
                                        placeholder="Section title..."
                                        className="input flex-1"
                                        autoFocus
                                    />
                                    <button onClick={addSection} className="btn btn-primary">
                                        <Plus className="w-4 h-4" />
                                        Add Section
                                    </button>
                                    <button onClick={() => setShowAddSection(false)} className="btn btn-ghost p-2">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => setShowAddSection(true)}
                                className="w-full glass-card p-4 text-center text-primary-400 hover:bg-primary-500/5 transition-colors flex items-center justify-center gap-2"
                            >
                                <Plus className="w-5 h-5" />
                                Add New Section
                            </button>
                        )}
                    </div>

                    {/* Upload Lecture Modal Hint */}
                    <div className="glass-card p-6 mt-6">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <Upload className="w-5 h-5 text-primary-500" />
                            Quick Upload
                        </h3>
                        <p className="text-foreground-secondary text-sm mb-4">
                            Drag and drop video files here to quickly add them as lectures.
                        </p>
                        <div className="border-2 border-dashed border-glass-border rounded-xl p-8 text-center hover:border-primary-500/50 transition-colors cursor-pointer">
                            <Video className="w-12 h-12 text-foreground-secondary mx-auto mb-3" />
                            <p className="font-medium mb-1">Drop video files here</p>
                            <p className="text-sm text-foreground-secondary">
                                MP4, WebM, MOV up to 2GB per file
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
