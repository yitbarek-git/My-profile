import SocialActions from "@/components/social-actions";
import Link from "next/link";
import Section from "@/components/section";

export const metadata = {
  title: "JavaScript: From a Simple Script to the Modern Web",
  description:
    "Explore the history, core fundamentals, and modern full-stack capabilities of JavaScript.",
};

const milestones = [
  {
    year: "1995",
    title: "The beginning",
    body: "Brendan Eich created JavaScript at Netscape (initially Mocha, then LiveScript) to bring basic interactivity to browsers.",
  },
  {
    year: "1997",
    title: "Standardization",
    body: "ECMAScript was established as a common language specification to ensure cross-browser consistency.",
  },
  {
    year: "2009",
    title: "Node.js expansion",
    body: "Node.js brought JavaScript to servers, unlocking backend APIs, automation, and command-line tooling.",
  },
  {
    year: "2015",
    title: "Modern JavaScript (ES6)",
    body: "Introduced game-changing features like let, const, arrow functions, promises, and modules.",
  },
  {
    year: "Today",
    title: "Full-stack dominance",
    body: "JavaScript powers everything from browser interfaces and backend services to desktop apps and automation tools.",
  },
];

const applications = [
  {
    title: "Frontend development",
    tag: "Browser",
    body: "Build dynamic, responsive user interfaces using React, Vue, or Angular.",
    example: "Handling clicks, validating forms, and updating views instantly.",
  },
  {
    title: "Backend development",
    tag: "Server",
    body: "Build robust APIs, handle authentication, and query databases using Node.js.",
    example: "Processing login requests and returning secure tokens.",
  },
  {
    title: "Full-stack development",
    tag: "End to end",
    body: "Bridge client and server logic seamlessly with unified frameworks like Next.js.",
    example:
      "Submitting a form, processing it on the server, and updating the database.",
  },
  {
    title: "Mobile & desktop apps",
    tag: "Applications",
    body: "Build native-feeling cross-platform apps using React Native or Electron.",
    example: "Running standalone software outside the browser window.",
  },
  {
    title: "Automation & testing",
    tag: "Productivity",
    body: "Automate repetitive workflows and test web UIs with tools like Playwright.",
    example: "Simulating user actions to automatically test login flows.",
  },
  {
    title: "Data vis & games",
    tag: "Creative",
    body: "Render interactive charts, canvas animations, and browser-based games.",
    example: "Displaying real-time financial charts via D3.js.",
  },
];

const fundamentals = [
  {
    title: "Variables & data types",
    body: "Master let, const, primitives (strings, numbers, booleans), and reference types (arrays, objects).",
  },
  {
    title: "Functions",
    body: "Write reusable logic using standard functions and arrow functions with clear arguments and returns.",
  },
  {
    title: "Arrays & array methods",
    body: "Transform and query data efficiently using map, filter, find, and reduce.",
  },
  {
    title: "The DOM & events",
    body: "Read, update, and manipulate HTML elements in response to user actions.",
  },
  {
    title: "Asynchronous JavaScript",
    body: "Handle delayed operations and network requests using promises and async/await.",
  },
  {
    title: "Modules & error handling",
    body: "Organize clean codebases across multiple files and handle exceptions gracefully.",
  },
];

export default function JavaScriptHistoryPage() {
  return (
    <main className="py-16 md:py-24">
      <Section>
        <div className="mx-auto max-w-4xl">
          <Link href="/blogs" className="text-sm text-blue-600 hover:underline">
            ← Back to blogs
          </Link>

          {/* Header */}
          <header className="mb-8 mt-8 border-b border-muted pb-10 md:mb-12">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-blue-600">
              JavaScript · Technology · Web Development
            </p>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl">
              JavaScript:
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                From Simple Scripts to the Modern Web
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Trace JavaScript&apos;s evolution from browser toy to a universal
              language powering the modern tech stack.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white">
                YK
              </div>
              <span className="font-medium text-foreground">Yitbarek K.</span>
              <span className="text-muted-foreground/40">•</span>
              <time dateTime="2026-10-25">Oct 25, 2026</time>
              <span className="text-muted-foreground/40">•</span>
              <span>7 min read</span>
            </div>
          </header>

          {/* Article */}
          <article
            className="
              prose prose-neutral max-w-none
              prose-headings:font-semibold prose-headings:tracking-tight
              prose-headings:mt-14 prose-headings:mb-5
              prose-h2:text-2xl prose-h2:md:text-3xl
              prose-h3:text-xl
              prose-p:my-6 prose-p:leading-8 prose-p:text-foreground/85
              prose-li:my-2 prose-li:leading-7
              prose-strong:text-foreground
              dark:prose-invert
            "
          >
            <p className="not-prose mb-10 border-l-4 border-blue-500 pb-2 pl-6 text-xl italic leading-relaxed text-foreground/90 md:pl-8 md:text-2xl">
              JavaScript powers everything from simple browser clicks to
              enterprise backend systems. Mastering the language beats
              memorizing frameworks every time.
            </p>

            <h2>1. What is JavaScript?</h2>

            <p>
              JavaScript is a high-level programming language that brings
              software to life. Alongside HTML (structure) and CSS
              (presentation), it forms the core trifecta of the web.
            </p>

            <p>
              While it started purely inside browsers to validate forms and
              handle button clicks, runtimes like Node.js now let JavaScript
              power servers, file systems, and developer tools.
            </p>

            <h2>2. The history of JavaScript</h2>

            <p>
              JavaScript went from a rushed 10-day browser script in 1995 to the
              most ubiquitous programming language in the world.
            </p>

            <div className="not-prose my-8 space-y-4">
              {milestones.map((item) => (
                <div
                  key={item.year}
                  className="rounded-2xl border border-muted bg-muted/20 p-5 transition-colors hover:bg-muted/40 md:p-6"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-600">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <h3>JavaScript vs. Java</h3>
            <p>
              Despite the names, they are entirely different languages. The
              similar moniker was purely a marketing move during Java&apos;s
              peak popularity in the 90s.
            </p>

            <h2>3. How JavaScript works</h2>

            <p>
              JavaScript executes inside an environment—like a browser (which
              provides DOM and Web APIs) or Node.js (which provides server-side
              file and network APIs).
            </p>

            <div className="not-prose my-8 overflow-hidden rounded-2xl border border-muted">
              <div className="border-b border-muted bg-muted/40 px-5 py-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Quick event listener example
                </span>
              </div>
              <pre className="overflow-x-auto bg-muted/20 p-5 text-sm leading-7">
                <code>{`const button = document.querySelector("#myButton");

button.addEventListener("click", () => {
  document.querySelector("#message").textContent =
    "JavaScript is working!";
});`}</code>
              </pre>
            </div>

            <p>
              Because network requests take time, JavaScript relies heavily on
              asynchronous programming (using <code>promises</code> and{" "}
              <code>async/await</code>) to keep applications responsive.
            </p>

            <h2>4. HTML, CSS, and JavaScript</h2>

            <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  name: "HTML",
                  role: "Structure",
                  body: "The skeleton: headings, paragraphs, and inputs.",
                },
                {
                  name: "CSS",
                  role: "Presentation",
                  body: "The skin: layout, styling, colors, and responsiveness.",
                },
                {
                  name: "JavaScript",
                  role: "Behavior",
                  body: "The brain: interactions, logic, and data updates.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-muted bg-muted/20 p-5"
                >
                  <p className="text-sm font-medium text-blue-600">
                    {item.role}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <h2>5. Modern uses of JavaScript</h2>

            <div className="not-prose my-8 space-y-4">
              {applications.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-muted bg-muted/20 p-5 md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <span className="rounded-full border border-muted px-2.5 py-1 text-xs text-muted-foreground">
                          {item.tag}
                        </span>
                      </div>
                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                        <strong>Example:</strong> {item.example}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>6. Core concepts worth mastering</h2>

            <p>
              Skip the framework tutorials until you have a firm grasp of these
              fundamentals:
            </p>

            <div className="not-prose my-8 space-y-3">
              {fundamentals.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 border-b border-muted py-4 last:border-b-0"
                >
                  <span className="pt-0.5 text-sm font-semibold text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2>7. Pros and limitations</h2>

            <h3>Advantages</h3>
            <ul>
              <li>Native execution in all modern browsers.</li>
              <li>
                Unified full-stack language footprint (frontend and backend).
              </li>
              <li>Massive ecosystem of libraries and open-source packages.</li>
              <li>
                Robust support for asynchronous, event-driven programming.
              </li>
            </ul>

            <h3>Limitations</h3>
            <ul>
              <li>
                Dynamic typing can conceal bugs until runtime (mitigated by
                TypeScript).
              </li>
              <li>Differing API sets between browser and server runtimes.</li>
            </ul>

            <h2>8. The future of JavaScript</h2>

            <p>
              JavaScript continues to evolve through annual ECMAScript updates,
              WebAssembly integrations, and lightning-fast toolchains. However,
              the best career investment you can make isn&apos;t learning the
              latest framework—it&apos;s truly understanding program flow, data
              structures, and problem-solving.
            </p>

            <h2>9. Conclusion</h2>

            <p>
              JavaScript evolved from a basic browser scripting language into
              the backbone of modern web engineering. Whether you want to build
              interactive UIs, powerful backend APIs, or full-stack web
              applications, mastering the fundamentals is your most reliable
              path forward.
            </p>
          </article>
          <SocialActions title="My Fullstack Development Journey" />
          {/* Author footer */}
          <footer className="mx-auto mt-16 max-w-3xl border-t border-muted pt-10 md:mt-20">
            <div className="flex items-center gap-5 rounded-2xl border border-muted bg-muted/20 p-6 md:p-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white">
                YK
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Written by
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground md:text-xl">
                  Yitbarek K.
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Full-stack developer · Writing about programming and what I
                  learn.
                </p>
              </div>
            </div>

            <Link
              href="/blogs"
              className="mt-8 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              ← Explore more articles
            </Link>
          </footer>
        </div>
      </Section>
    </main>
  );
}
