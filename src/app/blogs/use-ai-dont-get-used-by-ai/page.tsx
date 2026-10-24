import SocialActions from "@/components/social-actions";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { SITE_URL } from "@/constants";
import RollingLink from "@/components/rolling-link";

const articleUrl = `${SITE_URL.replace(/\/$/, "")}/blogs/use-ai-dont-get-used-by-ai`;

const title = "Use AI, Don’t Get Used by AI";
const description =
  "AI can make you faster—but if you stop learning and accept everything it gives you, you become dependent on it.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    type: "article",
    url: articleUrl,
    title,
    description,
  },
};

export default function BlogPostPage() {
  return (
    <main className="py-16 md:py-24">
      <article className="container max-w-4xl">
        {/* Back link */}
        <div className="inline-flex items-center gap-2 text-sm text-foreground/60">
          <ArrowLeft size={16} aria-hidden="true" />
          <RollingLink
            href="/blogs"
            className="transition-colors hover:text-primary"
          >
            Go back
          </RollingLink>
        </div>

        {/* Header */}
        <header className="mt-12 md:mt-16 pb-10 md:pb-14 border-b border-foreground/15">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-5">
            Perspective · AI
          </p>

          <h1 className="max-w-3xl font-mono text-3xl font-medium leading-[1.15] tracking-tight sm:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
            {description}
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-foreground/70">
            <Image
              src="/me.webp"
              alt="Yitbarek K"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover ring-2 ring-foreground/10"
            />
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-foreground">Yitbarek K</span>
              <span className="text-foreground/40">•</span>
              <time dateTime="2026-09-25">September 25, 2026</time>
              <span className="text-foreground/40">•</span>
              <span>4 min read</span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="max-w-2xl mx-auto pt-12 md:pt-16 text-lg leading-8 text-foreground/85">
          <p className="mb-6">During my previous job, my boss once told me:</p>

          <blockquote className="my-10 md:my-12 border-l-4 border-primary pl-6 md:pl-8">
            <p className="font-mono text-lg md:text-xl leading-relaxed text-foreground/90 italic">
              “No one is manually coding anymore.”
            </p>
          </blockquote>

          <p className="mb-6">
            As a junior developer who was still new to the field, I didn’t
            believe it at first.
          </p>

          <p className="mb-6">
            I thought, “Why should I rely on AI when I might eventually forget
            how to write code?”
          </p>

          <p className="mb-6">
            My boss gave us a free Claude subscription, and during that time, we
            were using Sonnet 4 and Opus 4.6.
          </p>

          <p className="mb-6">
            The more we used AI in our daily development, the more I started to
            understand what he meant.
          </p>

          <p className="mb-6">
            AI didn’t make coding unnecessary. It changed how I approached
            coding.
          </p>

          <p className="mb-6">
            Instead of spending time writing repetitive boilerplate, I could ask
            AI to help me generate it.
          </p>

          <p className="mb-6">
            Instead of spending hours trying to understand an unfamiliar error,
            I could use AI to help me investigate it.
          </p>

          <p className="mb-6">
            Instead of starting everything from scratch, I could use AI to
            explore different approaches.
          </p>

          <p className="mb-6">But there was one thing I learned:</p>

          {/* Standout line */}
          <p className="my-10 md:my-12 text-center font-mono text-xl md:text-2xl font-medium text-foreground border-y border-foreground/15 py-8 md:py-10">
            Don’t let AI do the thinking for you.
          </p>

          <p className="mb-6">
            That’s when I realized that the skill isn’t necessarily about
            writing every single line of code manually anymore.
          </p>

          <p className="mb-6">
            It’s about understanding the problem, knowing what you want to
            build, reviewing what AI produces, and knowing when the answer is
            wrong.
          </p>

          <p className="mb-6">AI can make you faster.</p>

          <p className="mb-6">
            <strong className="font-semibold text-foreground">BUT</strong> if
            you stop learning and simply accept everything AI gives you, you’re
            no longer using AI to improve yourself. You’re becoming dependent on
            it.
          </p>

          <p className="mt-12 md:mt-16 mb-4 text-foreground/70">
            Remember these words:
          </p>
        </div>

        {/* Closing punchline — full width for impact */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="font-mono text-2xl md:text-4xl leading-tight text-primary font-medium">
            Use AI.
            <br />
            Don’t get used by AI.
          </p>
        </div>
        <SocialActions title="Use AI, Don’t Get Used by AI" />
        {/* Author footer */}
        <footer className="mt-20 md:mt-28 max-w-2xl mx-auto pt-10 border-t border-foreground/15">
          <div className="flex items-center gap-4">
            <Image
              src="/me.webp"
              alt="Yitbarek K"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-foreground/10"
            />
            <div>
              <p className="text-xs text-foreground/60 uppercase tracking-[0.15em] font-semibold">
                Written by
              </p>
              <p className="text-lg font-semibold text-foreground mt-0.5">
                Yitbarek K
              </p>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
