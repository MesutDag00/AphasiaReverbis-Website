type PlaceholderImageProps = {
  label: string;
  aspectRatio?: string;
  className?: string;
};

export function PlaceholderImage({ label, aspectRatio = "16/9", className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200 ${className}`}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-10 w-10 text-slate-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
        <span className="text-center text-xs font-semibold text-slate-400">{label}</span>
      </div>
    </div>
  );
}
