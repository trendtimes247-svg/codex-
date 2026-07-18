export default function SearchPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <h1 className="font-display text-5xl font-semibold">Search Project Prometheus</h1>
      <form className="mt-8">
        <label className="sr-only" htmlFor="q">Search</label>
        <input id="q" name="q" className="min-h-12 w-full rounded-md border bg-surface px-4 text-foreground" placeholder="Search projects, reports, stories, and FAQs" />
      </form>
    </section>
  );
}
