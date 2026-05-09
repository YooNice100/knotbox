import { patternLinks } from "../data/patternLinks";

function PatternsPage() {
  const categories = [
    ...new Set(patternLinks.map((pattern) => pattern.category)),
  ];

  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">KnotBox</p>
        <h1>Pattern Library</h1>
        <p>Quick access to product instructions and crochet patterns.</p>
      </header>

      {categories.map((category) => {
        const categoryPatterns = patternLinks.filter(
          (pattern) => pattern.category === category
        );

        return (
          <section className="category-section" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {categoryPatterns.map((pattern) => (
                <a
                  className="pattern-card"
                  key={pattern.id}
                  href={pattern.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>{pattern.name}</h3>
                  <p>Open instructions ↗</p>
                </a>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default PatternsPage;