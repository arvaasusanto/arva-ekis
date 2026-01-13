import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { recentArticles, featuredArticle } from "@/lib/data";
import { notFound } from "next/navigation";

export default function ArticlePage({ params }: { params: { id: string } }) {
    // Combine all articles to find the one matching the ID
    const allArticles = [featuredArticle, ...recentArticles];
    const article = allArticles.find((a) => a.id === params.id);

    if (!article) {
        notFound();
    }

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

                {/* Content */}
                <div className="max-w-3xl mx-auto px-4 py-12">
                    <div className="prose prose-lg prose-red max-w-none font-serif text-gray-800">
                        <p className="text-xl leading-relaxed mb-8 font-sans text-gray-600 border-l-4 border-primary pl-6 italic">
                            {article.excerpt || article.content}
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <h3>Implications for the Modern Economy</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
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
