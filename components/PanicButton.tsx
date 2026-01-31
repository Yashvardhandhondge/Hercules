"use client";

export function PanicButton() {
  const handleQuickExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <button
      type="button"
      onClick={handleQuickExit}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[var(--kyb-charcoal)] px-4 py-2.5 text-sm font-medium text-white shadow-lg transition hover:bg-[var(--kyb-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--kyb-bronze)]"
      aria-label="Quick exit — leave this site"
    >
      <span aria-hidden>Quick Exit</span>
    </button>
  );
}
