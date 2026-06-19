import { Reveal } from "@/components/Reveal";

type TestimonialCardProps = {
  quote: string;
  name: string;
  institution: string;
  initials: string;
  delay?: number;
};

export function TestimonialCard({ quote, name, institution, initials, delay = 0 }: TestimonialCardProps) {
  return (
    <Reveal delay={delay}>
      <figure className="card flex h-full flex-col justify-between p-6">
        <blockquote className="text-base leading-relaxed text-soft-gray">
          <span className="mb-3 block text-5xl font-bold leading-none text-trust-blue/15" aria-hidden="true">"</span>
          {quote}
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-trust-blue/10 text-sm font-bold text-trust-blue ring-1 ring-trust-blue/20">
            {initials}
          </div>
          <div>
            <div className="text-sm font-semibold text-ink-black">{name}</div>
            <div className="text-xs text-soft-gray">{institution}</div>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}
