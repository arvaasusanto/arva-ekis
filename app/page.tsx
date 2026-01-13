import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArticleGrid from "@/components/ArticleGrid";
import Footer from "@/components/Footer";
import { featuredArticle, recentArticles } from "@/lib/data";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <Hero article={featuredArticle} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                            <h2 className="text-2xl font-serif font-bold text-gray-900">
                                Latest Analysis
                            </h2>
                            <span className="text-sm font-medium text-primary cursor-pointer hover:underline">
                                View All
                            </span>
                        </div>

                        <ArticleGrid articles={recentArticles} />
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full md:w-80 flex-shrink-0 space-y-8">
                        <div className="bg-paper p-6 border border-gray-100 rounded-sm">
                            <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-4">
                                Weekly Brief
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Get our editor's digest of the most critical economic shifts in the Islamic world.
                            </p>
                            <button className="w-full bg-secondary text-white py-2 font-medium text-sm hover:bg-gray-800 transition-colors">
                                Subscribe Free
                            </button>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-4 pb-2 border-b border-gray-200">
                                Trending Topics
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["De-dollarization", "Waqf", "Gold Dinar", "Digital Assets", "Fiscal Policy"].map((tag) => (
                                    <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 hover:bg-gray-200 cursor-pointer">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </main>
    );
}
