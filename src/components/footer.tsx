
import Image from "next/image";

export default function Footer() {
  const images = [
    {
      src: "/88/1.gif",
      alt: "Retro web badge",
    },
    {
      src: "/88/anime.gif",
      alt: "Anime badge",
    },
    {
      src: "/88/bikobatanari.gif",
      alt: "Retro character badge",
    },
    {
      src: "/88/gameboy.png",
      alt: "Game Boy badge",
    },
  ];

  return (
    <footer className="container border-t border-foreground/15 py-8 text-center text-xs text-foreground/50">
      <div className="mb-4 flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={88}
            height={31}
            className="old-school-btns"
          />
        ))}
      </div>

      <p>© {new Date().getFullYear()} Yitbarek.K. All rights reserved.</p>
    </footer>
  );
}
