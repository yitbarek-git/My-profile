import {
  AtSign,
  GitBranch,
  Play,
  Music2,
} from "lucide-react";
import { EMAIL, GITHUB_PROFILE } from "@/constants";
import RollingLink from "../rolling-link";
import Section from "../section";

const CONTACT_LINKS = [
  {
    href: `mailto:${EMAIL}`,
    label: EMAIL,
    icon: AtSign,
  },
  {
    href: GITHUB_PROFILE,
    label: "GitHub",
    icon: GitBranch,
  },
  {
    href: "https://www.youtube.com/@aplusacademy1",
    label: "YouTube",
    icon: Play,
  },
  {
    href: "https://www.tiktok.com/@aplusacademy11",
    label: "TikTok",
    icon: Music2,
  },
];

export default function ContactSection({ id }: { id?: string }) {
  return (
    <Section id={id} sectionNumber={4} sectionTitle="Contact">
      <p className="mb-6 max-w-xl text-xl font-mono sm:text-2xl">
        Have a project in mind? Let&apos;s build something useful.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4">
        {CONTACT_LINKS.map(({ href, label, icon: Icon }) => (
          <div key={href} className="inline-flex items-center gap-2">
            <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
            <RollingLink
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-sm text-primary"
            >
              {label}
            </RollingLink>
          </div>
        ))}
      </div>
    </Section>
  );
}