
"use client";

import { useState } from "react";
import FeaturedProjectItem from "@/components/featured-project-item";
import Items from "@/components/items";
import ProjectModal from "@/components/project-modal";
import Section from "@/components/section";

const projects = [
  {
    name: "Ethiomarket",
    description:
      "A marketplace web application focused on connecting users through an online platform. Explore the repository for implementation details and technologies.",
    href: "https://github.com/yitbarek-git/Ethiomarket-app",
  },
  {
    name: "Anchor Solution",
    description:
      "An educational and vocational learning platform designed to provide access to practical skills training and learning resources.",
    href: "https://github.com/yitbarek-git/anchor_solutions",
  },
  {
    name: "Restaurant System",
    description:
      "A C++ restaurant management application focused on menu selection, order handling, and billing operations.",
    href: "https://github.com/yitbarek-git/restaurant-system",
  },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(
    null,
  );

  return (
    <main className="pb-16">
      <Section>
        <h1 className="mb-4 font-mono text-4xl font-medium">
          Projects
        </h1>

        <p className="mb-4">
          Selected projects showcasing my work in web development,
          software engineering, and programming.
        </p>

        <FeaturedProjectItem
          name="Ethiomarket"
          description="A marketplace web application built as part of my full-stack development journey."
          src="/projects/ethiomarket.webp"
          alt="Ethiomarket project preview"
          googlePlayUrl="https://github.com/yitbarek-git/Ethiomarket-app"
        />

        <Items
          className="mt-4 gap-4"
          items={projects
            .filter((project) => project.name !== "Ethiomarket")
            .map((project) => ({
              ...project,
              id: project.name,
              target: "_blank" as const,
              onClick: undefined,
            }))}
        />
      </Section>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </main>
  );
}
