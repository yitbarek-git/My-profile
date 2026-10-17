type SectionProps = {
  children: React.ReactNode;
  className?: string;
  sectionTitle?: string;
  sectionNumber?: number;
  id?: string;
};

export default function Section({
  children,
  className,
  sectionTitle,
  sectionNumber,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${className ?? ""} container mt-12 sm:mt-16 relative scroll-mt-24`}
    >
      {/* title will be display on the left side */}
      <div className="hidden sm:block absolute top-0 -left-28 font-mono">
        {sectionNumber && <p className="text-primary">0{sectionNumber}</p>}
        {sectionTitle && (
          <h1 className="text-sm">{sectionTitle.toUpperCase()}</h1>
        )}
      </div>

      {/* title will be display on the top */}

      {(sectionNumber || sectionTitle) && (
        <div className="flex items-center gap-2 sm:hidden mb-4">
          {sectionNumber && (
            <p className="text-primary text-xs">0{sectionNumber}</p>
          )}
          <p className="text-xs text-gray-500">{"//"}</p>
          {sectionTitle && (
            <h1 className="text-xs text-gray-500">
              {sectionTitle.toUpperCase()}
            </h1>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
