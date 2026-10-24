import Link from "next/link";
import Section from "@/components/section";
import Items from "@/components/items";

const posts = [
  {
    slug: "use-ai-dont-get-used-by-ai",
    title: "Use AI, Don’t Get Used by AI",
    description:
      "A reminder that the real value of AI in development comes from using it to learn, not from outsourcing our thinking.",
    date: "Oct 19, 2026",
    readTime: "4 min read",
    tag: "Perspective",
  },
  {
    slug: "fullstack-development-journey",
    title: "My Fullstack Development Journey",
    description:
      "How I went from writing my first line of code to building full end-to-end applications — the wins, the walls, and what I'd tell my past self.",
    date: "Oct 19, 2026",
    readTime: "5 min read",
    tag: "Personal Story",
  },
  {
    slug: "javascript-history-and-modern-use",
    title: "JavaScript: From a Simple Script to the Modern Web",
    description:
      "Explore JavaScript's history, evolution, core capabilities, modern applications, and why it remains one of the most important programming languages.",
    date: "Oct 25, 2026",
    readTime: "9 min read",
    tag: "JavaScript",
  },
];

export const metadata = {
  title: "Blogs",
  description: "Writing about software development, tools, and learning.",
};

export default function BlogsPage() {
  return (
    <main className="py-16 md:py-24">
      <Section>
        {/* Header */}
        <header className="mb-14 md:mb-20 pb-10 border-b border-muted">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-600 mb-4">
            Writing · Notes
          </p>
          <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-tight">
            Blogs
          </h1>
          <p className="mt-5 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-xl">
            Writing about software development, tools, and learning — the
            thinking behind the code.
          </p>
        </header>

        {/* Posts list */}
        <div className="max-w-3xl space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group block rounded-2xl border border-muted bg-muted/20 hover:bg-muted/40 hover:border-blue-500/30 transition-all p-6 md:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="inline-flex items-center rounded-full border border-muted bg-background px-3 py-1 font-medium text-foreground/80">
                  {post.tag}
                </span>
                <span className="text-muted-foreground/40">•</span>
                <time>{post.date}</time>
                <span className="text-muted-foreground/40">•</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground group-hover:text-blue-600 transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="mt-3 text-base text-foreground/70 leading-relaxed max-w-2xl">
                {post.description}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                Read article
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
