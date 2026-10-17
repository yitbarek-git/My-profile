
import Card from "../card";
import Deck from "../deck";
import Section from "../section";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "../button";

export default function ProjectsSection({ id }: { id?: string }) {
  return (
    <Section id={id} sectionNumber={2} sectionTitle="Projects">
      <Deck>
        <Card src="/ethiomarket.jpg" alt="Ethiomarket">
          <h1 className="font-mono font-bold text-base sm:text-2xl">
            Ethiomarket
          </h1>
          <hr className="my-2" />
          <p className="text-sm sm:text-base">
            A marketplace project focused on connecting users with products
            through a web-based platform.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href="https://github.com/yitbarek-git/Ethiomarket-app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center font-mono text-sm text-primary"
            >
              View on GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Card>

        <Card src="/anchor-solution.jpg" alt="Anchor Solution">
          <h1 className="font-mono font-bold text-base sm:text-2xl">
            Anchor Solution
          </h1>
          <hr className="my-2" />
          <p className="text-sm sm:text-base">
            A software development project demonstrating practical
            problem-solving and application development.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href="https://github.com/yitbarek-git/anchor_solutions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center font-mono text-sm text-primary"
            >
              View on GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Card>

        <Card src="/restaurant-system.jpg" alt="Restaurant System">
          <h1 className="font-mono font-bold text-base sm:text-2xl">
            Restaurant System
          </h1>
          <hr className="my-2" />
          <p className="text-sm sm:text-base">
            A restaurant management software project focused on organizing
            restaurant operations and information.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href="https://github.com/yitbarek-git/restaurant-system"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center font-mono text-sm text-primary"
            >
              View on GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Card>
      </Deck>

      <div className="text-center mb-4">
        <Link href="/projects">
          <Button size="lg" className="cursor-pointer">
            More Projects
          </Button>
        </Link>
      </div>
    </Section>
  );
}
