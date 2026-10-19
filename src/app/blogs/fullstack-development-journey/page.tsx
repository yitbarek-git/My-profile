import Section from "@/components/section";

export const metadata = {
  title: "My Fullstack Development Journey",
  description:
    "How I went from writing my first line of code to building full end-to-end applications — the wins, the walls, and what I'd tell my past self.",
};

export default function FullstackDevelopmentJourney() {
  return (
    <main className="py-16 md:py-24">
      <Section>
        {/* Header Section */}
        <header className="mb-4 md:mb-8 pb-10 border-b border-muted">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            My Fullstack
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Development Journey
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            From writing my first line of code to shipping end-to-end
            applications — the wins, the walls, and what I&apos;d tell my past
            self.
          </p>

          {/* Metadata Row */}
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              YK
            </div>
            <span className="font-medium text-foreground">Yitbarek K.</span>
            <span className="text-muted-foreground/40">•</span>
            <time dateTime="2026-10-19">Oct 19, 2026</time>
            <span className="text-muted-foreground/40">•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Article Body */}
        <article
          className="
            prose prose-neutral dark:prose-invert max-w-3xl mx-auto
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-headings:mt-14 prose-headings:mb-5
            prose-h2:text-2xl prose-h2:md:text-3xl
            prose-p:leading-8 prose-p:my-6 prose-p:text-foreground/85
            prose-li:my-2 prose-li:leading-7
            prose-a:text-primary
            prose-strong:text-foreground
          "
        >
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 not-prose mb-10 pb-10 border-l-4 border-blue-500 pl-6 md:pl-8 italic">
            Everyone&apos;s path into fullstack development looks different.
            Mine started with a single curiosity —{" "}
            <em className="text-foreground not-italic font-medium">
              &quot;how does a website actually work?&quot;
            </em>{" "}
            — and slowly turned into a full-blown obsession with building things
            end to end.
          </p>

          <h2>The beginning</h2>
          <p>
            My first real exposure was HTML and CSS. Nothing fancy — just static
            pages that I could open in a browser. But that moment of seeing
            something I wrote appear on screen was addictive. From there I moved
            to JavaScript, and the whole game changed. Suddenly pages could
            react, respond, and remember.
          </p>

          <h2>The frontend phase</h2>
          <p>
            I spent months deep in the frontend — React, state management,
            component patterns, accessibility. I built dashboards, clones, and
            side projects that never shipped. Most of them were trash, and that
            was exactly the point. Each project taught me a new concept I
            couldn&apos;t have learned by reading alone.
          </p>

          <h2>Crossing the bridge to the backend</h2>
          <p>
            The turning point was when a project needed to <em>save data</em>.
            That&apos;s when the frontend-only illusion broke. I picked up Node,
            learned Express, then databases. My first API was a mess — no
            validation, no structure, no error handling. But it worked, and
            that&apos;s what mattered at the time.
          </p>
          <p>
            Over time I started caring about the boring stuff: input validation,
            schema design, authentication, rate limiting. That&apos;s where the
            real learning happened — not in the code itself, but in the{" "}
            <em>why</em> behind it.
          </p>

          <h2>What fullstack actually means</h2>
          <p>
            Fullstack isn&apos;t about knowing every layer equally well.
            It&apos;s about understanding how the layers connect — how a click
            in the browser turns into a row in a database and back into a
            rendered component. That mental model is worth more than any single
            technology.
          </p>

          <h2>Lessons I&apos;d tell my past self</h2>
        </article>

        {/* Lessons — card style for breathing room */}
        <div className="max-w-3xl mx-auto mt-8 space-y-4">
          {[
            {
              title: "Ship early, ship ugly.",
              body: "Half-finished projects teach you more than perfect plans.",
            },
            {
              title: "Learn the fundamentals first.",
              body: "Frameworks come and go; HTTP, SQL, and JavaScript fundamentals don't.",
            },
            {
              title: "Read other people's code.",
              body: "Open source was my best teacher — better than any tutorial.",
            },
            {
              title: "Debugging is a skill.",
              body: "The faster you get at debugging, the faster you build.",
            },
            {
              title: "Don't chase every new tool.",
              body: "Depth beats breadth, at least early on.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex gap-5 rounded-2xl border border-muted bg-muted/20 hover:bg-muted/40 transition-colors p-5 md:p-6"
            >
              <div className="shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="font-semibold text-foreground leading-snug">
                  {item.title}
                </p>
                <p className="mt-1.5 text-muted-foreground leading-relaxed text-sm md:text-base">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing paragraphs */}
        <article
          className="
            prose prose-neutral dark:prose-invert max-w-3xl mx-auto
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-headings:mt-14 prose-headings:mb-5
            prose-h2:text-2xl prose-h2:md:text-3xl
            prose-p:leading-8 prose-p:my-6 prose-p:text-foreground/85
            prose-strong:text-foreground
          "
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-14 mb-5">
            Where I am now
          </h2>
          <p>
            I&apos;m still learning — that never stops. But I now feel
            comfortable jumping into any layer of a stack: from designing a
            database schema, to writing APIs, to building polished UIs. The
            journey isn&apos;t finished, and honestly I hope it never is.
          </p>

          <p>
            If you&apos;re on the same path, keep going. Build things. Break
            things. Ship something every month. The progress compounds faster
            than it feels like it does.
          </p>
        </article>

        {/* Author Footer Sign-off */}
        <footer className="mt-20 max-w-3xl mx-auto pt-10 border-t border-muted">
          <div className="flex items-center gap-5 rounded-2xl border border-muted bg-muted/20 p-6 md:p-8">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
              YK
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] font-semibold">
                Written by
              </p>
              <h3 className="text-lg md:text-xl font-bold text-foreground mt-1 transition-colors hover:text-blue-600">
                Yitbarek K.
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Fullstack developer · Writing about what I learn as I build.
              </p>
            </div>
          </div>
        </footer>
      </Section>
    </main>
  );
}
