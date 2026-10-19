
"use client";

import Section from "@/components/section";
import Pill from "@/components/pill";

type Job = {
  role: string;
  company?: string;
  date: string;
  description: string[];
};

type TechCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Tools";

const TECH_STACK: { category: TechCategory; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React", "NextJS", "TailwindCSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "ExpressJS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Visual Studio Code", "Linux"],
  },
];

const JOBS: Job[] = [
  {
    role: "Full-stack Developer",
    company: "Personal Projects",
    date: "Ongoing",
    description: [
      "Develop web applications and build features across frontend and backend systems.",
      "Work with databases and APIs to build practical software solutions.",
      "Improve programming and software engineering skills through project development.",
    ],
  },
];

export default function ExperienceSection({ id }: { id?: string }) {
  return (
    <Section id={id} sectionNumber={3} sectionTitle="Experience">
      <div>
        <div className="relative ml-2 mt-2">
          <div className="absolute left-1.75 top-0 bottom-0 w-0.5 bg-primary/30" />

          {JOBS.map((job, i) => (
            <div
              key={`${job.company}-${i}`}
              className="relative pl-8 pb-10 last:pb-0"
            >
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background" />

              <div className="text-primary mb-1">{job.date}</div>

              <h3 className="font-bold">
                {job.role}
                {job.company && (
                  <span className="text-foreground/50 font-normal">
                    {" "}
                    @ {job.company}
                  </span>
                )}
              </h3>

              <ul className="text-sm mt-2 space-y-1 ml-4">
                {job.description.map((desc, i) => (
                  <li key={`${desc}-${i}`} className="list-disc">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-primary/20 p-4">
          <p className="text-md text-foreground mb-4">Tech stack</p>
          <div className="space-y-4">
            {TECH_STACK.map(({ category, items }) => (
              <div key={category}>
                <p className="text-xs text-foreground mb-2">{category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((t) => (
                    <Pill key={`${category}-${t}`} name={t} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
