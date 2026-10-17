
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
    <main className="pb-16">
      <article className="container mt-12 sm:mt-16">
        <div className="inline-flex items-center gap-2 text-sm text-foreground/60">
          <ArrowLeft size={16} aria-hidden="true" />
          <RollingLink
            href="/blogs"
            className="transition-colors hover:text-primary"
          >
            Go back
          </RollingLink>
        </div>

        <header className="mt-10 border-b border-foreground/15 pb-8">
          <time className="text-sm text-foreground/60" dateTime="2026-09-25">
            September 25, 2026
          </time>

          <h1 className="mt-3 max-w-3xl font-mono text-3xl font-medium leading-tight sm:text-5xl">
            {title}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-sm">
            <Image
              src="/me.jpg"
              alt="Yitbarek K"
              width={24}
              height={24}
              className="h-6 w-6 rounded-full object-cover"
            />
            <span>Yitbarek K</span>
          </div>
        </header>

        <div className="max-w-2xl pt-8 text-base leading-7">
          <p className="mb-4">
            During my previous job, my boss once told me:
          </p>

          <blockquote className="my-8 border-l-4 border-primary pl-5 font-mono text-base leading-7 text-foreground/80">
            “No one is manually coding anymore.”
          </blockquote>

          <p className="mb-4">
            As a junior developer who was still new to the field, I didn’t
            believe it at first.
          </p>

          <p className="mb-4">
            I thought, “Why should I rely on AI when I might eventually forget
            how to write code?”
          </p>

          <p className="mb-4">
            My boss gave us a free Claude subscription, and during that time, we
            were using Sonnet 4 and Opus 4.6.
          </p>

          <p className="mb-4">
            The more we used AI in our daily development, the more I started to
            understand what he meant.
          </p>

          <p className="mb-4">
            AI didn’t make coding unnecessary. It changed how I approached
            coding.
          </p>

          <p className="mb-4">
            Instead of spending time writing repetitive boilerplate, I could ask
            AI to help me generate it.
          </p>

          <p className="mb-4">
            Instead of spending hours trying to understand an unfamiliar error,
            I could use AI to help me investigate it.
          </p>

          <p className="mb-4">
            Instead of starting everything from scratch, I could use AI to
            explore different approaches.
          </p>

          <p className="mb-4">But there was one thing I learned:</p>

          <p className="mb-4 font-mono text-foreground">
            Don’t let AI do the thinking for you.
          </p>

          <p className="mb-4">
            That’s when I realized that the skill isn’t necessarily about
            writing every single line of code manually anymore.
          </p>

          <p className="mb-4">
            It’s about understanding the problem, knowing what you want to
            build, reviewing what AI produces, and knowing when the answer is
            wrong.
          </p>

          <p className="mb-4">AI can make you faster.</p>

          <p className="mb-4">
            <strong className="font-semibold text-foreground">BUT</strong> if
            you stop learning and simply accept everything AI gives you, you’re
            no longer using AI to improve yourself. You’re becoming dependent on
            it.
          </p>

          <p className="mb-4 pt-4">Remember these words:</p>

          <p className="mb-2 font-mono text-xl text-primary sm:text-2xl">
            Use AI.
          </p>
          <p className="mb-4 font-mono text-xl text-primary sm:text-2xl">
            Don’t get used by AI.
          </p>
        </div>
      </article>
    </main>
  );
}
