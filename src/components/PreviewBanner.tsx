'use client';

export function PreviewBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-3 bg-[#0F172A] border-b border-white/10 px-4 py-2.5 text-xs font-medium text-white/70">
      <span className="inline-flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
        Preview — This site was built for you by Hydrogen Studio
      </span>
    </div>
  );
}
