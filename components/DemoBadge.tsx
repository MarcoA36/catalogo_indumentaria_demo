export default function DemoBadge() {
  return (
    <div className="text-center fixed bottom-4 right-4 bg-black/70 text-white text-sm px-4 py-2 rounded-lg shadow-lg z-50 pointer-events-auto">
       🌐 Sitio de ejemplo:{" "}
      <a
        href="https://zonaweb.site"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent transition"
      >
        zonaweb.site
      </a>
    </div>
  );
}