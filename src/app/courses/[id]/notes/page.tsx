"use client";

import Link from "next/link";
import { useState } from "react";
import {
    FileText,
    Download,
    Eye,
    Search,
    Filter,
    BookOpen,
    File,
    FileImage,
    FileVideo,
    ChevronDown,
    Clock,
    Star,
    ArrowLeft,
    Bookmark,
    Share2,
    Grid3X3,
    List
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";

// Course and notes data
const course = {
    id: 1,
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Sarah Johnson",
};

const sections = [
    {
        id: 1,
        title: "Introduction to Web Development",
        notes: [
            { id: 1, title: "Course Overview & Roadmap", type: "pdf", size: "2.4 MB", downloads: 1542, date: "Jan 15, 2024" },
            { id: 2, title: "Development Environment Setup Guide", type: "pdf", size: "1.8 MB", downloads: 1320, date: "Jan 15, 2024" },
            { id: 3, title: "VS Code Extensions Cheatsheet", type: "pdf", size: "0.5 MB", downloads: 892, date: "Jan 16, 2024" },
        ]
    },
    {
        id: 2,
        title: "HTML5 Fundamentals",
        notes: [
            { id: 4, title: "HTML5 Complete Reference Guide", type: "pdf", size: "4.2 MB", downloads: 2341, date: "Jan 18, 2024" },
            { id: 5, title: "HTML Tags Cheatsheet", type: "pdf", size: "0.8 MB", downloads: 1876, date: "Jan 18, 2024" },
            { id: 6, title: "Semantic HTML Examples", type: "pdf", size: "1.2 MB", downloads: 1234, date: "Jan 20, 2024" },
            { id: 7, title: "HTML Forms Reference", type: "pdf", size: "1.5 MB", downloads: 987, date: "Jan 22, 2024" },
        ]
    },
    {
        id: 3,
        title: "CSS3 Mastery",
        notes: [
            { id: 8, title: "CSS Selectors Complete Guide", type: "pdf", size: "3.1 MB", downloads: 1654, date: "Jan 25, 2024" },
            { id: 9, title: "Flexbox Layout Cheatsheet", type: "pdf", size: "1.0 MB", downloads: 2134, date: "Jan 27, 2024" },
            { id: 10, title: "CSS Grid Visual Guide", type: "pdf", size: "2.3 MB", downloads: 1987, date: "Jan 28, 2024" },
            { id: 11, title: "CSS Animations Reference", type: "pdf", size: "1.8 MB", downloads: 1432, date: "Jan 30, 2024" },
            { id: 12, title: "Responsive Design Patterns", type: "pdf", size: "2.7 MB", downloads: 1765, date: "Feb 1, 2024" },
        ]
    },
    {
        id: 4,
        title: "JavaScript Essentials",
        notes: [
            { id: 13, title: "JavaScript Fundamentals Handbook", type: "pdf", size: "5.6 MB", downloads: 2543, date: "Feb 3, 2024" },
            { id: 14, title: "ES6+ Features Cheatsheet", type: "pdf", size: "1.4 MB", downloads: 1876, date: "Feb 5, 2024" },
            { id: 15, title: "DOM Manipulation Guide", type: "pdf", size: "2.1 MB", downloads: 1654, date: "Feb 7, 2024" },
            { id: 16, title: "Async JavaScript Explained", type: "pdf", size: "1.9 MB", downloads: 1432, date: "Feb 9, 2024" },
        ]
    },
];

const allNotes = sections.flatMap(s => s.notes.map(n => ({ ...n, section: s.title })));

export default function CourseNotesPage({ params }: { params: { id: string } }) {
    const [view, setView] = useState<'sections' | 'all'>('sections');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedSections, setExpandedSections] = useState<number[]>([1, 2, 3, 4]);

    const toggleSection = (sectionId: number) => {
        setExpandedSections(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const totalNotes = allNotes.length;
    const totalDownloads = allNotes.reduce((sum, n) => sum + n.downloads, 0);

    const getFileIcon = (type: string) => {
        switch (type) {
            case 'pdf': return FileText;
            case 'image': return FileImage;
            case 'video': return FileVideo;
            default: return File;
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-20">
                <div className="container-custom py-8">
                    {/* Back Link */}
                    <Link href={`/courses/${params.id}`} className="inline-flex items-center gap-2 text-foreground-secondary hover:text-foreground mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Course
                    </Link>

                    {/* Header */}
                    <div className="glass-card p-6 mb-8">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div>
                                <span className="badge badge-primary mb-2">Course Notes</span>
                                <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
                                <p className="text-foreground-secondary">by {course.instructor}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-center px-4 py-2 glass rounded-xl">
                                    <p className="text-2xl font-bold gradient-text">{totalNotes}</p>
                                    <p className="text-xs text-foreground-secondary">Notes & PDFs</p>
                                </div>
                                <div className="text-center px-4 py-2 glass rounded-xl">
                                    <p className="text-2xl font-bold">{(totalDownloads / 1000).toFixed(1)}K</p>
                                    <p className="text-xs text-foreground-secondary">Downloads</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Toolbar */}
                    <div className="glass-card p-4 mb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                                <input
                                    type="text"
                                    placeholder="Search notes..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="input pl-10 w-full"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <select className="input py-2 px-4 w-auto">
                                    <option>All Types</option>
                                    <option>PDFs</option>
                                    <option>Images</option>
                                    <option>Videos</option>
                                </select>
                                <div className="flex glass rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => setView('sections')}
                                        className={`p-2 transition-colors ${view === 'sections' ? 'bg-primary-500/10' : 'hover:bg-primary-500/10'}`}
                                    >
                                        <Grid3X3 className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setView('all')}
                                        className={`p-2 transition-colors ${view === 'all' ? 'bg-primary-500/10' : 'hover:bg-primary-500/10'}`}
                                    >
                                        <List className="w-5 h-5" />
                                    </button>
                                </div>
                                <button className="btn btn-primary">
                                    <Download className="w-4 h-4" />
                                    Download All
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Notes by Section */}
                    {view === 'sections' ? (
                        <div className="space-y-4">
                            {sections.map((section) => (
                                <div key={section.id} className="glass-card overflow-hidden">
                                    <button
                                        onClick={() => toggleSection(section.id)}
                                        className="w-full p-4 flex items-center justify-between hover:bg-primary-500/5 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <BookOpen className="w-5 h-5 text-primary-500" />
                                            <div className="text-left">
                                                <p className="font-semibold">{section.title}</p>
                                                <p className="text-sm text-foreground-secondary">{section.notes.length} resources</p>
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.includes(section.id) ? 'rotate-180' : ''}`} />
                                    </button>

                                    {expandedSections.includes(section.id) && (
                                        <div className="border-t border-glass-border">
                                            {section.notes.map((note) => {
                                                const FileIcon = getFileIcon(note.type);
                                                return (
                                                    <div
                                                        key={note.id}
                                                        className="p-4 flex items-center gap-4 border-b border-glass-border last:border-0 hover:bg-primary-500/5 transition-colors"
                                                    >
                                                        <div className="w-12 h-12 rounded-xl bg-error-500/10 flex items-center justify-center shrink-0">
                                                            <FileIcon className="w-6 h-6 text-error-500" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-medium truncate">{note.title}</p>
                                                            <div className="flex items-center gap-4 text-sm text-foreground-secondary">
                                                                <span className="uppercase">{note.type}</span>
                                                                <span>{note.size}</span>
                                                                <span className="flex items-center gap-1">
                                                                    <Download className="w-3 h-3" />
                                                                    {note.downloads.toLocaleString()}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <button className="btn btn-ghost p-2" title="Preview">
                                                                <Eye className="w-5 h-5" />
                                                            </button>
                                                            <button className="btn btn-ghost p-2" title="Bookmark">
                                                                <Bookmark className="w-5 h-5" />
                                                            </button>
                                                            <button className="btn btn-primary py-2 px-4">
                                                                <Download className="w-4 h-4" />
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* List View - All Notes */
                        <div className="glass-card overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-background-secondary/50">
                                    <tr>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">File</th>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Section</th>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Size</th>
                                        <th className="text-left px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Downloads</th>
                                        <th className="text-right px-5 py-3 text-xs font-medium text-foreground-secondary uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-glass-border">
                                    {allNotes.map((note) => {
                                        const FileIcon = getFileIcon(note.type);
                                        return (
                                            <tr key={note.id} className="hover:bg-primary-500/5 transition-colors">
                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-error-500/10 flex items-center justify-center">
                                                            <FileIcon className="w-5 h-5 text-error-500" />
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">{note.title}</p>
                                                            <p className="text-xs text-foreground-secondary uppercase">{note.type}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-4 text-foreground-secondary text-sm">{note.section}</td>
                                                <td className="px-5 py-4 text-sm">{note.size}</td>
                                                <td className="px-5 py-4 text-sm">{note.downloads.toLocaleString()}</td>
                                                <td className="px-5 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <button className="p-2 hover:bg-primary-500/10 rounded-lg">
                                                            <Eye className="w-4 h-4" />
                                                        </button>
                                                        <button className="p-2 hover:bg-primary-500/10 rounded-lg">
                                                            <Bookmark className="w-4 h-4" />
                                                        </button>
                                                        <button className="p-2 hover:bg-primary-500/10 rounded-lg text-primary-400">
                                                            <Download className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Download Tips */}
                    <div className="glass-card p-6 mt-8">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <Star className="w-5 h-5 text-warning-400" />
                            Study Tips
                        </h3>
                        <ul className="space-y-2 text-foreground-secondary">
                            <li className="flex items-start gap-2">
                                <span className="text-primary-400">•</span>
                                Download notes before starting a section for offline study
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-400">•</span>
                                Cheatsheets are great for quick reference during projects
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-400">•</span>
                                Bookmark important notes for easy access later
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
