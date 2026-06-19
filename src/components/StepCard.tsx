import { Reveal } from "@/components/Reveal";

type StepCardProps = {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  dark?: boolean;
};

export function StepCard({ step, title, description, icon, delay = 0, dark = false }: StepCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="relative flex flex-col items-center text-center">
        <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-trust-blue text-white shadow-soft">
          {icon}
          <span className={`absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-healing-teal text-xs font-bold text-white ${dark ? "ring-2 ring-white/20" : "ring-2 ring-clean-white"}`}>
            {step}
          </span>
        </div>
        <h3 className={`text-base font-bold ${dark ? "text-white" : "text-ink-black"}`}>{title}</h3>
        <p className={`mt-1 text-sm leading-relaxed ${dark ? "text-white/55" : "text-soft-gray"}`}>{description}</p>
      </div>
    </Reveal>
  );
}
