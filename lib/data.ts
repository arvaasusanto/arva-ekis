
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
    author: "Arva Athallah Susanto",
    date: "January 12, 2026",
    category: "ZISWAF & Negara",
    excerpt: "Moving beyond charity: How Zakat can function as a powerful tool for wealth redistribution and economic stability at the state level.",
    content: "Zakat is often reduced to mere charity in the modern imagination. However, historically and structurally, it functions as a wealth tax designed to prevent the accumulation of capital in few hands. By reimagining Zakat as a state-level fiscal instrument, we can propose a model of economic stability that does not rely on perpetual debt but on the constant circulation of wealth.",
};
export const recentArticles: Article[] = [
    {
        id: "1",
        title: "The Fall of Fiat and the Rise of the Gold Dinar",
        author: "Arva Athallah Susanto",
        category: "Moneter & Kekuasaan",
        content: "The modern fiat monetary system is built on debt and infinite expansion, leading to inevitable cycles of inflation and crash. The Gold Dinar represents a return to intrinsic value—money that cannot be printed at will by central banks. This analysis explores the geopolitical implications of a shift away from the petrodollar towards asset-backed currencies.",
    },
    {
        id: "2",
        title: "Degrowth and the Maqasid al-Sharia",
        author: "Arva Athallah Susanto",
        category: "Kapitalisme & Kritik",
        content: "Capitalism demands infinite growth on a finite planet. The concept of 'Degrowth' aligns surprisingly well with Maqasid al-Sharia (Objectives of Islamic Law), specifically the preservation of life and lineage (environmental sustainability). We argue for an economy that prioritizes well-being and sufficiency over GDP maximization.",
    },
    {
        id: "3",
        title: "BRICS+ and the Search for an Islamic Financial Pole",
        author: "Arva Athallah Susanto",
        category: "Dunia Islam Global",
        content: "As the world moves towards multipolarity, Muslim nations find themselves at a crossroads. The BRICS+ alliance offers an alternative to Western financial hegemony. This piece examines whether an 'Islamic Financial Pole' can emerge within this new bloc to champion interest-free trade mechanisms.",
    },
    {
        id: "4",
        title: "Waqf-Based Housing: A Solution to Urban Crisis?",
        author: "Arva Athallah Susanto",
        category: "ZISWAF & Negara",
        content: "Urban housing has become a speculative asset rather than a basic right. By utilizing Waqf (endownment) land for cooperative housing projects, we can de-commodify shelter. This model eliminates the land cost component, making housing affordable for the urban poor without relying on predatory mortgage systems.",
    }
];
export const siteConfig = {
    name: "ARVAAS JOURNAL",
    description: "Jurnalisme kritis ekonomi Islam & tatanan dunia. Analisis mendalam dari perspektif Islamic political economy.",
    footerText: "Weekly analysis delivered to your inbox."
};
