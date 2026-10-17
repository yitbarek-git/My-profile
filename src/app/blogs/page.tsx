import Section from "@/components/section";
import Items from "@/components/items";

const posts = [
  {
    slug: "use-ai-dont-get-used-by-ai",
    title: "Use AI, Don’t Get Used by AI",
    description:
      "A reminder that the real value of AI in development comes from using it to learn, not from outsourcing our thinking.",
  },
];

export const metadata = {
  title: "Blogs",
  description: "Writing about software development, tools, and learning.",
};

export default function BlogsPage() {
  return (
    <main className="pb-16">
      <Section>
        <h1 className="font-mono text-4xl font-medium">Blogs</h1>
        <p className="mt-2 mb-8 text-foreground/70">
          Writing about software development, tools, and learning.
        </p>

        <Items
          className="gap-3"
          items={posts.map((post) => ({
            id: post.slug,
            name: post.title,
            description: post.description,
            href: `/blogs/${post.slug}`,
            target: "_self" as const,
          }))}
        />
      </Section>
    </main>
  );
}
