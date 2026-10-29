import SocialActions from "@/components/social-actions";
import Link from "next/link";
import Section from "@/components/section";

export const metadata = {
  title: "Python Programming: A Beginner's Guide | Yitbarek.K",
  description:
    "Learn Python programming fundamentals, features, syntax, and applications. Includes an Amharic Python tutorial for Ethiopian students and beginners.",
};

export default function PythonBeginnersGuidePage() {
  return (
    <main className="py-16 md:py-24">
      <Section>
        <article className="mx-auto max-w-3xl">
          <Link href="/blogs" className="text-sm text-blue-600 hover:underline">
            ← Back to blogs
          </Link>

          <header className="mt-8 mb-12 border-b border-muted pb-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
              Python · Programming · Amharic Learning
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Python Programming: A Beginner's Guide
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-foreground/70">
              Discover Python, one of the world's most popular programming
              languages, its core features, practical applications, and why it
              is a useful starting point for aspiring developers.
            </p>

            <p className="mt-5 text-sm text-muted-foreground">
              October 29, 2026 · 8 min read
            </p>
          </header>

          <div className="space-y-10 text-base leading-8 text-foreground/85">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                1. Introduction: What Is Python?
              </h2>

              <p>
                Python is a high-level, general-purpose programming language
                known for its readable syntax and wide range of applications. It
                allows developers to write instructions that computers can
                execute to solve problems, process information, and automate
                tasks.
              </p>

              <p className="mt-4">
                Python is commonly used in web development, data science,
                artificial intelligence, machine learning, automation,
                scientific computing, and software development. Its relatively
                straightforward syntax makes it a popular choice for people
                learning programming for the first time.
              </p>

              <p className="mt-4">
                However, Python is not only for beginners. Experienced
                developers also use it to build production systems, APIs,
                data-processing pipelines, testing tools, and complex
                applications.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                2. Learn Python in Amharic
              </h2>

              <p>
                Learning programming can be easier when difficult concepts are
                explained in a language you understand well. This introductory
                video is part of an Amharic Python course designed to help
                Ethiopian students follow the fundamentals step by step.
              </p>

              <p className="mt-4">
                The article remains a written reference, while the video
                provides an additional explanation for learners who prefer
                following lessons in Amharic.
              </p>

              <div className="mt-6 aspect-video overflow-hidden rounded-xl border border-muted">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID"
                  title="Python Programming in Amharic - Part 1"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Python programming tutorial in Amharic for Ethiopian students
                and beginners.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                3. Why Learn Python?
              </h2>

              <p>
                Python is a practical language for students who want to develop
                problem-solving skills and explore different areas of
                technology. Several characteristics make it useful for learning
                and professional development.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">Readable syntax</h3>

              <p>
                Python uses indentation and relatively simple expressions to
                organize instructions. Beginners can often focus more on
                understanding the problem instead of dealing with complicated
                syntax.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                A large ecosystem
              </h3>

              <p>
                Python has a large collection of libraries and frameworks.
                Django and Flask support web development, NumPy and pandas
                support data processing, and libraries such as PyTorch support
                machine learning.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">Automation</h3>

              <p>
                Python can automate repetitive tasks such as organizing files,
                processing spreadsheets, extracting information, and
                communicating with APIs. These skills are useful in education,
                business, and software development.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Beginner-friendly learning
              </h3>

              <p>
                Students can begin with variables, conditions, loops, and
                functions before moving into databases, web APIs, automation,
                and more advanced programming concepts.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                4. Understanding Basic Python Syntax
              </h2>

              <p>
                A good starting point is learning how to display information,
                store values, and perform calculations. Consider this simple
                example:
              </p>

              <pre className="overflow-x-auto rounded-xl bg-muted p-4 text-sm leading-6">
                {`name = "Yitbarek"
age = 21

print("Hello, " + name)
print("Next year you will be", age + 1)`}
              </pre>

              <p>
                The variable <code>name</code> stores text, while
                <code> age</code> stores a number. The
                <code> print()</code> function displays information in the
                output.
              </p>

              <p className="mt-4">
                The age in this example is illustrative. You can change the
                values and run the program to see how the output changes.
              </p>

              <p className="mt-4">
                Unlike languages that use braces to define most code blocks,
                Python uses indentation to represent structure. Correct
                indentation is therefore an important part of writing valid
                Python code.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                5. Important Python Concepts
              </h2>

              <p>
                Before building larger projects, learners should understand the
                fundamentals that most Python applications rely on.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Variables and data types:</strong> storing text,
                  numbers, Boolean values, and other data.
                </li>
                <li>
                  <strong>Conditions:</strong> using if, elif, and else to make
                  decisions.
                </li>
                <li>
                  <strong>Loops:</strong> repeating instructions with for and
                  while.
                </li>
                <li>
                  <strong>Functions:</strong> organizing reusable logic into
                  named blocks of code.
                </li>
                <li>
                  <strong>Data structures:</strong> working with lists, tuples,
                  sets, and dictionaries.
                </li>
                <li>
                  <strong>Object-oriented programming:</strong> organizing
                  related data and behavior using classes and objects.
                </li>
                <li>
                  <strong>Files and exceptions:</strong> reading and writing
                  files and handling errors deliberately.
                </li>
                <li>
                  <strong>Modules and packages:</strong> organizing code and
                  reusing functionality from other files and libraries.
                </li>
              </ul>

              <p className="mt-4">
                These concepts provide the foundation for writing maintainable
                programs and learning specialized Python frameworks.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                6. What Can You Build with Python?
              </h2>

              <h3 className="mb-2 text-xl font-medium">
                Web applications and APIs
              </h3>

              <p>
                Frameworks such as Django, Flask, and FastAPI help developers
                create websites, backend services, and APIs that connect
                applications to databases and other systems.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Data science and artificial intelligence
              </h3>

              <p>
                Python is widely used to analyze datasets, build visualizations,
                train machine learning models, and develop AI-powered
                applications. Libraries provide tools for numerical calculations
                and data processing.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Automation and bots
              </h3>

              <p>
                Python can automate repetitive tasks and power bots that
                interact with messaging platforms, APIs, and online services. It
                is also useful for creating scripts that process documents and
                manage files.
              </p>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Desktop applications and scientific computing
              </h3>

              <p>
                Developers use Python to create desktop tools, perform
                scientific calculations, run simulations, and support research.
                Its versatility allows it to serve many different technical
                fields.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                7. How to Start Learning Python
              </h2>

              <p>
                A structured learning path helps beginners avoid jumping between
                unrelated topics. Start with the fundamentals and build small
                projects as your understanding improves.
              </p>

              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <strong>Set up Python:</strong> install Python and choose a
                  code editor such as Visual Studio Code.
                </li>
                <li>
                  <strong>Learn the fundamentals:</strong> practice variables,
                  data types, operators, conditions, and loops.
                </li>
                <li>
                  <strong>Write functions:</strong> divide problems into
                  smaller, reusable parts.
                </li>
                <li>
                  <strong>Practice data structures:</strong> learn how to store,
                  search, and manipulate information.
                </li>
                <li>
                  <strong>Build small projects:</strong> try a calculator,
                  student grade system, expense tracker, or file organizer.
                </li>
                <li>
                  <strong>Choose a direction:</strong> explore backend
                  development, automation, data science, or AI after
                  understanding the basics.
                </li>
              </ol>

              <p className="mt-4">
                Ethiopian university students can combine written notes,
                practical exercises, and Amharic explanations to reinforce their
                understanding. The important part is to write and test your own
                code rather than only watching tutorials.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                8. Advantages and Limitations of Python
              </h2>

              <h3 className="mb-2 text-xl font-medium">Advantages</h3>

              <ul className="list-disc space-y-2 pl-6">
                <li>Readable syntax for many common programming tasks.</li>
                <li>A large community and extensive documentation.</li>
                <li>Libraries for web development, data science, and AI.</li>
                <li>
                  Useful for automation, scripting, and rapid prototyping.
                </li>
                <li>Available on major operating systems.</li>
              </ul>

              <h3 className="mt-6 mb-2 text-xl font-medium">
                Limitations and challenges
              </h3>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Some CPU-intensive tasks can run slower than comparable
                  implementations in compiled languages.
                </li>
                <li>
                  Dynamic typing can allow certain errors to appear at runtime.
                </li>
                <li>
                  Large projects still require good architecture, testing, and
                  dependency management.
                </li>
                <li>
                  Not every platform or application is best suited to Python.
                </li>
              </ul>

              <p className="mt-4">
                Python is a strong general-purpose choice, but selecting a
                programming language should depend on the problem, project
                requirements, and available tools.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">9. Conclusion</h2>

              <p>
                Python offers a practical path from basic programming concepts
                to real-world software development. Its readable syntax and
                broad ecosystem make it useful for students, beginners, and
                experienced developers.
              </p>

              <p className="mt-4">
                For Ethiopian students, learning Python through a combination of
                written explanations, hands-on practice, and Amharic tutorials
                can make the learning process more accessible. Start with the
                fundamentals, solve small problems, and gradually build projects
                that demonstrate your skills.
              </p>

              <p className="mt-4">
                Programming becomes easier through consistent practice.
                Understand each concept, experiment with code, and learn from
                the errors you encounter along the way.
              </p>
            </section>

            <SocialActions title="Python Programming: A Beginner's Guide" />

            <footer className="border-t border-muted pt-6">
              <p className="text-sm text-foreground/70">
                Learn the fundamentals. Practice consistently. Build useful
                software.
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
