export function PreviewBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white text-center py-2.5 px-4 text-sm font-medium">
      🔧 Free preview built by{' '}
      <span className="font-bold text-sky-400">Hydrogen Studio</span>.{' '}
      <a
        href="https://hydrogenstudio.co"
        className="underline text-sky-300 hover:text-white transition-colors cursor-pointer"
      >
        Claim your site →
      </a>
    </div>
  );
}
