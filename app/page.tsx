import Link from "next/link";
import { industries } from "./template-data";

export default function Home() {
  const featuredNames = [
    "Casa Mare Goa",
    "Devdaar House Himalayan",
    "Mitti & Ember",
    "Quality Mint & Allied Chemicals",
    "Kesar Bagh Haveli",
  ];
  const allTemplates = industries.flatMap((industry) =>
    industry.templates.map((template) => ({ ...template, industry: industry.shortName }))
  );
  const featured = featuredNames.flatMap((name) => {
    const template = allTemplates.find((candidate) => candidate.name === name);
    return template ? [template] : [];
  });
  const hotels = industries.find((industry) => industry.slug === "hotels")!;

  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="TEAM-PSMPV template gallery home">
          <img src="/team-psmpv-logo.png" alt="" className="brand-mark" />
          <span>TEAM-PSMPV</span>
        </Link>
        <nav className="header-nav" aria-label="Primary navigation">
          <a href="#templates">Templates</a>
          <a href="#industries">Industries</a>
        </nav>
        <a className="header-cta" href="https://www.teampsmpv.com/contact-us">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero bento-hero" id="templates">
        <div className="hero-copy shell bento-hero-copy">
          <div className="eyebrow"><span className="eyebrow-mark" /> Curated web directions</div>
          <h1>Websites worth<br />stepping into.</h1>
          <p>Browse design-led website templates built for hospitality, healthcare, food, creative teams and more.</p>
          <a className="hero-button" href="#industries">Explore templates <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-gallery floating-collage" aria-label="Featured template previews">
          {featured.map((template, index) => (
            <a className={`hero-preview hero-preview-${index + 1}`} href={template.url} key={template.url}>
              <img src={template.preview} alt={`${template.name} website preview`} />
              <span><b>{template.name}</b><small>{template.industry}</small></span>
            </a>
          ))}
        </div>
      </section>

      <section className="industry-strip shell parallax-band" id="industries" aria-label="Browse by industry">
        <span>Browse by industry</span>
        <div>
          {industries.map((industry) => (
            <Link href={`/industry/${industry.slug}`} key={industry.slug}>{industry.shortName}</Link>
          ))}
        </div>
      </section>

      <section className="hotel-feature shell bento-feature" aria-labelledby="hotel-title">
        <div className="hotel-intro">
          <div className="eyebrow">Featured collection / Hotels</div>
          <h2 id="hotel-title">Timeless stays.<br />Unforgettable websites.</h2>
          <p>Immersive templates for hotels, retreats and places people remember.</p>
          <Link href="/industry/hotels">View all hotel templates <span aria-hidden="true">→</span></Link>
        </div>
        <div className="hotel-cards">
          {hotels.templates.map((template) => (
            <a href={template.url} className="hotel-card" key={template.url}>
              <img src={template.preview} alt={`${template.name} website preview`} loading="lazy" />
              <span><b>{template.name}</b><i aria-hidden="true">↗</i></span>
            </a>
          ))}
        </div>
      </section>

      <section className="directory shell bento-directory" aria-labelledby="directory-title">
        <div className="section-head">
          <div>
            <div className="eyebrow">/INDUSTRY DIRECTORY</div>
            <h2 id="directory-title">Every industry.<br />A distinct point of view.</h2>
          </div>
          <p>Each direction is designed to be adapted around your brand, content and business goals.</p>
        </div>

        <div className="industry-grid">
          {industries.map((industry, index) => (
            <Link
              href={`/industry/${industry.slug}`}
              className="industry-card"
              key={industry.slug}
              aria-label={`View ${industry.name} design templates`}
            >
              <div className="card-topline">
                <span>/{String(index + 1).padStart(2, "0")}</span>
                <span className={`availability ${industry.templates.length ? "is-live" : ""}`}>
                  {industry.templates.length ? `${industry.templates.length} LIVE` : "SOON"}
                </span>
              </div>
              <div className="industry-card-footer">
                <div>
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>
                </div>
                <span className="arrow-box" aria-hidden="true">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="closing shell bento-closing">
        <div className="eyebrow">/NOT SEEING YOUR INDUSTRY?</div>
        <h2>Bring the brief.<br />We&apos;ll design the direction.</h2>
        <a href="https://www.teampsmpv.com/contact-us" className="button-dark">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="footer shell">
        <div className="footer-brand">
          <img src="/team-psmpv-logo.png" alt="TEAM-PSMPV" />
          <div><strong>TEAM-PSMPV</strong><span>ENGINEERING THE ESSENTIAL</span></div>
        </div>
        <span>PRECISION SYSTEMS FOR MODERN PRODUCTS &amp; VISION</span>
        <span>© 2026 TEAM-PSMPV</span>
      </footer>
    </main>
  );
}
