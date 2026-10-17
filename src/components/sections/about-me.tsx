import Section from "../section";
import MyImage from "../my-image";

export function AboutMe({ id }: { id?: string }) {
  return (
    <Section id={id}>
      <div className="flex flex-col items-center gap-4 mb-4">
        <MyImage />
        <div className="text-center">
          <h1 className="text-2xl font-bold font-mono">
            Yitbarek.K
          </h1>
          <p>Full-stack Developer ✧ Software Enthusiast</p>
        </div>
      </div>

      <p className="mb-4">
        Hi! I&apos;m Yitbarek, a full-stack developer focused on building
        useful, reliable, and well-designed web applications. I&apos;m
        interested in both frontend development and backend systems,
        including how applications work with databases and APIs.
      </p>

      <p className="mb-4">
        I&apos;m developing my programming skills in{" "}
        <span className="font-mono">C++</span>,{" "}
        <span className="font-mono">Python</span>, and{" "}
        <span className="font-mono">Java</span>, while learning to design
        and work with databases using{" "}
        <span className="font-mono">MySQL</span>. I also enjoy exploring
        developer tools and applying what I learn to practical projects.
      </p>

      <p className="mb-8">
        My goal is to keep improving as a software developer by building
        projects, strengthening my problem-solving skills, and learning
        how to turn ideas into working applications.
      </p>

      <div className="grid grid-cols-3 text-center font-mono">
        <div className="border-r border-t p-4">
          <p className="text-4xl font-bold">C++</p>
          <p className="text-sm text-foreground/50">Programming</p>
        </div>
        <div className="p-4 border-t">
          <p className="text-4xl font-bold">SQL</p>
          <p className="text-sm text-foreground/50">Databases</p>
        </div>
        <div className="p-4 border-l border-t">
          <p className="text-4xl font-bold">Web</p>
          <p className="text-sm text-foreground/50">Development</p>
        </div>
      </div>
    </Section>
  );
}
