
import Section from "@/components/section";
import GearCard from "@/components/gear-card";

export default function GearPage() {
  const GEAR = [
    {
      name: "Personal Laptop",
      description:
        "My daily driver for coding, building web applications, studying programming, and working on personal projects.",
      src: "pc.webp",
      loading: "eager" as const,
    },
    {
      name: "UGREEN Uno 6-in-1 Hub (Violet)",
      description:
        "A compact USB hub that keeps my workspace connected and makes it easier to work with multiple peripherals.",
      src: "ugreen.webp",
    },
    {
      name: "ASUS TUF VG279QE5A",
      description:
        "My 27-inch Full HD monitor for a more comfortable coding workspace, multitasking, and reviewing projects.",
      src: "monitor.webp",
    },
    {
      name: "Gen 75 Elecfox Keyboard",
      description:
        "My main typing keyboard for writing code, working on projects, and everyday computer use.",
      src: "keyboard.webp",
    },
    {
      name: "Rakk Alti Mouse",
      description:
        "My everyday mouse for navigating applications, managing files, and working efficiently.",
      src: "mouse.webp",
    },
    {
      name: "Hand-built 60% Ortholinear Keyboard",
      description:
        "A custom ortholinear keyboard I built myself. Its compact layout makes it a unique part of my setup, and I may share the build process in the future.",
      src: "custom_keeb.webp",
      loading: "eager" as const,
    },
  ];

  return (
    <main className="pb-16">
      <Section>
        <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl">
          My Gear
        </h1>

        <p className="mb-8 text-lg font-medium text-foreground/80 sm:text-xl">
          A look at the hardware and peripherals I use for programming,
          building web applications, learning new technologies, and
          working on personal projects.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {GEAR.map((item) => (
            <GearCard
              key={item.name}
              name={item.name}
              description={item.description}
              src={item.src}
              loading={item.loading}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
