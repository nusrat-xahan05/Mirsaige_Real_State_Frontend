import { ISectionHeading } from "@/types/sectionHeading.interface";

export default function SectionHeading({ title, subtitle }: ISectionHeading) {
  return (
    <section className="pb-4 px-6 text-center max-w-4xl mx-auto">
      <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-2.5">
        {title}
      </h1>

      <p className="font-sans text-base max-w-4xl text-slate-400 mx-auto leading-relaxed">
        {subtitle}
      </p>
    </section>
  );
}
