import SocialActions from "@/components/social-actions";
import Link from "next/link";
import Section from "@/components/section";

export const metadata = {
  title: "JavaScript: From a Simple Script to the Modern Web",
  description:
    "Explore JavaScript's history, evolution, features, modern applications, and role in web development.",
};

export default function JavaScriptHistoryPage() {
  return (
    <main className="py-16 md:py-24">
      <Section>
        <article className="mx-auto max-w-3xl">
          <Link href="/blogs" className="text-sm text-blue-600 hover:underline">
            ← Back to blogs
          </Link>

          <header className="mt-8 mb-12 border-b border-muted pb-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
              JavaScript · Technology
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              JavaScript: From a Simple Script to the Modern Web
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-foreground/70">
              How a language created to make web pages interactive evolved into
              a technology powering websites, servers, applications, developer
              tools, and more.
            </p>

            <p className="mt-5 text-sm text-muted-foreground">
              October 25, 2026 · 9 min read
            </p>
          </header>

          <div className="space-y-10 text-base leading-8 text-foreground/85">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                1. Introduction: What Is JavaScript?
              </h2>

              <p>
                JavaScript is a high-level programming language widely used to
                create interactive and dynamic software. It is best known as one
                of the core technologies of the web, alongside HTML and CSS.
              </p>

              <p className="mt-4">
                HTML defines the structure of a web page, CSS controls its
                presentation, and JavaScript adds behavior. For example,
                JavaScript can respond to a button click, validate a form,
                update content without reloading the page, or fetch information
                from a server.
              </p>

              <p className="mt-4">
                However, JavaScript is no longer limited to browsers. With
                environments such as Node.js, developers can also use it for
                backend services, command-line tools, automation, and other
                software.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                2. The History of JavaScript
              </h2>

              <h3 className="mb-2 text-xl font-medium">The beginning: 1995</h3>

              <p>
                JavaScript was created by Brendan Eich at Netscape in 1995. It
                was developed in a very short period to make web pages more
                interactive. Its original name was Mocha, followed by
                LiveScript, before it became JavaScript.
              </p>

              <p className="mt-4">
                Despite the similar names, JavaScript and Java are distinct
                programming languages. Their naming history reflects the
                marketing context of the time, not a shared identity.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Standardization: 1997
              </h3>

              <p>
                As JavaScript spread across browsers, compatibility became
                increasingly important. In 1997, the language was standardized
                under the name ECMAScript by Ecma International. ECMAScript
                defines the language specification that JavaScript
                implementations follow.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                A period of rapid evolution
              </h3>

              <p>
                JavaScript's growth was uneven during its early years. Different
                browsers sometimes implemented features differently, making
                reliable web development challenging. Libraries and frameworks
                later helped developers manage these differences and build more
                complex applications.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Modern JavaScript: ES2015 and beyond
              </h3>

              <p>
                ECMAScript 2015, commonly called ES6, introduced major features
                including let and const, arrow functions, classes, template
                literals, modules, promises, and destructuring. These additions
                made JavaScript code easier to organize and helped developers
                manage increasingly sophisticated applications.
              </p>

              <p className="mt-4">
                Since then, ECMAScript has continued to evolve through regular
                annual releases, adding capabilities while maintaining
                compatibility with the existing language.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                3. How JavaScript Works
              </h2>

              <p>
                JavaScript is commonly executed by a JavaScript engine. For
                example, Chrome uses V8, while Firefox uses SpiderMonkey. These
                engines parse and execute JavaScript code, with many using
                just-in-time compilation to improve performance.
              </p>

              <p className="mt-4">
                In a browser, JavaScript can interact with the Document Object
                Model (DOM), which represents the page's structure. It can read
                or change elements, listen for user actions, and communicate
                with servers.
              </p>

              <pre className="overflow-x-auto rounded-xl bg-muted p-4 text-sm leading-6">
                {`const button = document.querySelector("#myButton");

button.addEventListener("click", () => {
  document.querySelector("#message").textContent =
    "JavaScript is working!";
});`}
              </pre>

              <p>
                When the user clicks the button, the event handler executes and
                changes the text on the page. This small example demonstrates
                how JavaScript connects user interaction to program behavior.
              </p>

              <p className="mt-4">
                JavaScript also supports asynchronous operations. Promises and
                async/await allow programs to handle tasks such as network
                requests without blocking the main flow of execution while
                waiting for a result.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                4. The Three Main Web Technologies
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">HTML — Structure</h3>
                  <p>
                    Defines elements such as headings, paragraphs, images,
                    links, and forms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">CSS — Presentation</h3>
                  <p>
                    Controls colors, spacing, layouts, typography, responsive
                    behavior, and animations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">JavaScript — Behavior</h3>
                  <p>
                    Handles events, calculations, validation, dynamic content,
                    data fetching, and application logic.
                  </p>
                </div>
              </div>

              <p className="mt-4">
                Together, these technologies form the foundation of most modern
                browser-based experiences.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                5. Modern Uses of JavaScript
              </h2>

              <h3 className="mb-2 text-xl font-medium">
                Frontend web development
              </h3>

              <p>
                JavaScript powers interactive interfaces, dashboards, online
                stores, social platforms, and browser-based tools. Libraries and
                frameworks such as React, Vue, Angular, and Svelte help
                developers organize complex interfaces into reusable components.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Backend development
              </h3>

              <p>
                Node.js allows JavaScript to run outside the browser. Developers
                can build APIs, authentication systems, database-connected
                services, real-time applications, and command-line programs.
                Frameworks such as Express and NestJS provide additional
                structure for backend projects.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Full-stack development
              </h3>

              <p>
                JavaScript can be used on both the frontend and backend.
                Frameworks such as Next.js combine frontend rendering with
                server-side capabilities, while a database such as MySQL or
                PostgreSQL stores persistent application data.
              </p>

              <p className="mt-4">
                Using one language across several layers can simplify code
                sharing and development workflows, although developers still
                need to understand networking, security, databases, and system
                architecture.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Mobile and desktop applications
              </h3>

              <p>
                Frameworks such as React Native and Ionic use JavaScript to
                build mobile applications. Electron allows developers to build
                desktop applications using web technologies. These tools expand
                JavaScript's reach beyond traditional websites.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Automation, testing, and developer tools
              </h3>

              <p>
                JavaScript is used to automate repetitive tasks, test web
                applications, process files, and build development tools. Tools
                such as Playwright support browser automation, while build tools
                and package managers help developers develop and ship software.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Data visualization and creative projects
              </h3>

              <p>
                Libraries such as D3.js and Chart.js help visualize data. The
                Canvas API and WebGL support graphics, animations, simulations,
                and browser-based games. JavaScript can therefore be used for
                both practical business applications and creative experiments.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                6. Important JavaScript Concepts
              </h2>

              <p>
                Learning modern JavaScript involves more than memorizing syntax.
                Some essential concepts include:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Variables and data types:</strong> storing and
                  representing information with let, const, strings, numbers,
                  booleans, arrays, and objects.
                </li>
                <li>
                  <strong>Functions:</strong> packaging reusable logic into
                  named functions or arrow functions.
                </li>
                <li>
                  <strong>Arrays and objects:</strong> organizing collections of
                  data and related properties.
                </li>
                <li>
                  <strong>Array methods:</strong> using map, filter, find, and
                  reduce to transform, select, search, and combine data.
                </li>
                <li>
                  <strong>DOM manipulation:</strong> reading and updating
                  browser page elements.
                </li>
                <li>
                  <strong>Asynchronous JavaScript:</strong> working with
                  promises, async/await, and network requests.
                </li>
                <li>
                  <strong>Modules and error handling:</strong>
                  separating code into files and handling failures deliberately.
                </li>
              </ul>

              <p className="mt-4">
                These concepts provide a foundation for learning frameworks and
                building complete applications.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                7. Advantages and Limitations
              </h2>

              <h3 className="mb-2 text-xl font-medium">Advantages</h3>

              <ul className="list-disc space-y-2 pl-6">
                <li>Runs natively in modern web browsers.</li>
                <li>Has a large ecosystem of libraries and tools.</li>
                <li>Can be used for frontend and backend development.</li>
                <li>Supports interactive, event-driven applications.</li>
                <li>Has extensive documentation and a large community.</li>
              </ul>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Limitations and challenges
              </h3>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Dynamic typing can allow certain errors to appear at runtime
                  rather than during development.
                </li>
                <li>
                  Browser and runtime environments have different capabilities
                  and APIs.
                </li>
                <li>
                  Asynchronous programming can be difficult to understand
                  without a solid foundation.
                </li>
                <li>
                  Poorly designed applications can suffer from performance,
                  security, and maintainability problems.
                </li>
              </ul>

              <p className="mt-4">
                TypeScript addresses some common development challenges by
                adding static type checking to JavaScript, while still relying
                on JavaScript execution environments at runtime.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                8. The Future of JavaScript
              </h2>

              <p>
                JavaScript continues to evolve through the ECMAScript
                standardization process and through improvements in browser
                engines and runtime environments. Developers can expect
                continued work on language ergonomics, performance, security,
                tooling, and web platform capabilities.
              </p>

              <p className="mt-4">
                TypeScript, server-side rendering, edge runtimes, WebAssembly
                integration, and AI-enabled development tools are also shaping
                how JavaScript applications are built. These technologies do not
                replace the need to understand programming fundamentals.
              </p>

              <p className="mt-4">
                The most useful long-term skill is not simply knowing a
                particular framework. It is understanding how programs work, how
                data flows, how errors are handled, and how to choose
                appropriate tools for a problem.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">9. Conclusion</h2>

              <p>
                JavaScript began as a way to add interactivity to web pages and
                developed into a general-purpose language used across a broad
                range of software. Its history reflects the growth of the web
                itself: from simple documents to complex, data-driven
                applications.
              </p>

              <p className="mt-4">
                For anyone learning programming, JavaScript offers a practical
                path from basic variables and functions to browser interfaces,
                APIs, databases, and full-stack development. Progress comes from
                understanding each concept, writing code, testing it, and
                learning from mistakes.
              </p>
            </section>
            <SocialActions title="JavaScript: From a Simple Script to the Modern Web" />
            <footer className="border-t border-muted pt-6">
              <p className="text-sm text-foreground/70">
                Keep learning. Keep building. Understand the code you write.
              </p>

              <Link
                href="/blogs"
                className="mt-5 inline-block font-medium text-blue-600 hover:underline"
              >
                ← Explore more articles
              </Link>
            </footer>
          </div>
        </article>
      </Section>
    </main>
  );
}
