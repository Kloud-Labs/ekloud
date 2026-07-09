export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-accent/20 font-sans leading-relaxed selection:text-white lowercase scroll-smooth">
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-text mb-6 uppercase tracking-tighter leading-none italic">
            404 — Page indisponible
          </h1>
          <p className="text-text-muted text-xl leading-relaxed italic opacity-80">
            Cette page est temporairement désactivée. Veuillez réessayer ultérieurement.
          </p>
          <p className="mt-6 text-sm text-text-muted/90">
            Statut: maintenance (désactivation temporaire).
          </p>
        </div>
      </div>
    </div>
  );
}

