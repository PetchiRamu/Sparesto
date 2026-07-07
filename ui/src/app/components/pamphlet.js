export default function PamphletDownload() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-4 text-4xl font-bold text-slate-900">
          Pamphlet PDF
        </h2>

        <p className="mb-8 text-gray-600">
          Download our company brochure and product information.
        </p>

        <a
          href="/pamphlet.pdf"
          download
          className="inline-flex items-center rounded-lg bg-[#0F766E] px-6 py-3 font-medium text-white transition hover:bg-[#0c615a]"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
}