import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { recentArticles, featuredArticle } from "@/lib/data";
import { notFound } from "next/navigation";
export default function ArticlePage({ params }: { params: { id: string } }) {
    // Combine all articles to find the one matching the ID
    const allArticles = [featuredArticle, ...recentArticles];
    const article = allArticles.find((a) => a.id === params.id);
    // Explicitly handle "undefined" to satisfy TypeScript build
    if (!article) {
        return notFound();
    }
    // Safety: at this point, 'article' is guaranteed to be defined.
    // However, to be extra safe for the compiler, we access properties from 'article'.
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <article className="flex-grow">
                {/* Header */}
                <header className="bg-paper py-16 px-4 border-b border-gray-100">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">
                            {article.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            {article.title}
                        </h1>
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                            <span className="font-medium text-gray-900">{article.author}</span>
                            <span>•</span>
                            <span>{article.date || "Just now"}</span>
                        </div>
                    </div>
                </header>
                {/* Hero Image - Verified Logic */}
                {article.image ? (
                    <div className="w-full max-w-4xl mx-auto px-4 -mt-8 mb-8 relative z-10">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-[400px] object-cover shadow-xl rounded-lg"
                        />
                    </div>
                ) : null}
                {/* Content */}
                <div className="max-w-3xl mx-auto px-4 py-12">
                    <div className="prose prose-lg prose-red max-w-none font-serif text-gray-800">
                        {/* Excerpt / Intro */}
                        {article.excerpt && (
                            <p className="text-xl leading-relaxed mb-8 font-sans text-gray-600 border-l-4 border-primary pl-6 italic">
                                {article.excerpt}
                            </p>
                        )}
                        {/* Main Content - Custom Markdown Parser */}
                        {/* Uses regex to split paragraphs safely */}
                        {article.content.split(/\n\s*\n/).map((paragraph, pIndex) => {
                            // Split by **text** to find bold sections
                            const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                            return (
                                <p key={pIndex} className="mb-4 text-gray-800 leading-relaxed">
                                    {parts.map((part, i) => {
                                        if (part.startsWith('**') && part.endsWith('**')) {
                                            // Render as a "Header" styled bold block
                                            return (
                                                <span key={i} className="block font-bold text-xl md:text-2xl mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2">
                                                    {part.slice(2, -2)}
                                                </span>
                                            );
                                        }
                                        // Regular text
                                        return <span key={i}>{part}</span>;
                                    })}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    );
}
export async function generateStaticParams() {
    const allArticles = [featuredArticle, ...recentArticles];
    return allArticles.map((article) => ({
        id: article.id,
    }));
}
