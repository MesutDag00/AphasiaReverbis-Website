type AccordionItemProps = {
  question: string;
  answer: string;
};

export function AccordionItem({ question, answer }: AccordionItemProps) {
  return (
    <details className="group rounded-xl bg-white ring-1 ring-soft-line">
      <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-ink-black [&::-webkit-details-marker]:hidden">
        {question}
        <span className="ml-auto shrink-0 text-soft-gray transition-transform duration-200 group-open:rotate-45">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </summary>
      <div className="px-5 pb-5 pt-1 text-base leading-relaxed text-soft-gray">
        {answer}
      </div>
    </details>
  );
}
