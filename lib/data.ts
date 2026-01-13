
export interface Article {
    id: string;
    title: string;
    author: string;
    date?: string;
    category?: string;
    excerpt?: string;
    content: string; // Placeholder for full content
    image?: string; // Placeholder if we had images
}

// Navigation Data
export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Moneter & Kekuasaan", href: "/category/moneter-kekuasaan" },
    { name: "ZISWAF & Negara", href: "/category/ziswaf-negara" },
    { name: "Kapitalisme & Kritik Islam", href: "/category/kapitalisme-kritik" },
    { name: "Dunia Islam Global", href: "/category/dunia-islam-global" },
    { name: "About", href: "/about" },
];

export const featuredArticle: Article = {
    id: "featured-1",
    title: "Reimagining Zakat as a Primary Fiscal Instrument",
    author: "Sarah Al-Fayed",
    date: "January 12, 2026",
    category: "ZISWAF & Negara",
    excerpt: "Moving beyond charity: How Zakat can function as a powerful tool for wealth redistribution and economic stability at the state level.",
    content: "Full content would go here...",
};

export const recentArticles: Article[] = [
    {
        id: "1",
        title: "The Fall of Fiat and the Rise of the Gold Dinar",
        author: "Arva Athallah Susanto",
        category: "Moneter & Kekuasaan",
        content: "Content...",
    },
    {
        id: "2",
        title: "Degrowth and the Maqasid al-Sharia",
        author: "Umar Ibrahim",
        category: "Kapitalisme & Kritik",
        content: "Content...",
    },
    {
        id: "3",
        title: "BRICS+ and the Search for an Islamic Financial Pole",
        author: "Yusuf Mansur",
        category: "Dunia Islam Global",
        content: "Content...",
    },
    {
        id: "4",
        title: "Waqf-Based Housing: A Solution to Urban Crisis?",
        author: "Fatimah Azzahra",
        category: "ZISWAF & Negara",
        content: "Content...",
    }
];

export const siteConfig = {
    name: "ARVAAS JOURNAL",
    description: "Jurnalisme kritis ekonomi Islam & tatanan dunia. Analisis mendalam dari perspektif Islamic political economy.",
    footerText: "Weekly analysis delivered to your inbox."
};
