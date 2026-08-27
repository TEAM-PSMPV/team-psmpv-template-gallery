import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustry, industries } from "../../template-data";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) notFound();

  return (
    <main>
      <header className="site-header detail-header">
        <Link href="/" className="brand" aria-label="TEAM-PSMPV template gallery home" target="_blank" rel="noopener noreferrer">
          <img src="/team-psmpv-logo.png" alt="" className="brand-mark" />
          <span>TEAM-PSMPV</span>
        </Link>
        <Link href="/" className="back-link" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">←</span> All industries</Link>
        <a className="header-cta" href="https://www.teampsmpv.com/contact-us" target="_blank" rel="noopener noreferrer">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="detail-hero shell bento-detail-hero">
        <div className="eyebrow"><span className="eyebrow-mark" /> /{industry.shortName.toUpperCase()} / WEB DIRECTIONS</div>
        <h1>{industry.name.toUpperCase()}<br />DESIGN TEMPLATES.</h1>
        <div className="detail-summary">
          <p>{industry.description}</p>
          <div>
            <strong>{String(industry.templates.length).padStart(2, "0")}</strong>
            <span>
              {industry.templates.length === 0
                ? "TEMPLATES IN PRODUCTION"
                : industry.templates.length === 1
                  ? "LIVE DIRECTION"
                  : "LIVE DIRECTIONS"}
            </span>
          </div>
        </div>
      </section>

      {industry.templates.length ? (
        <section className="templates shell bento-templates" aria-label={`${industry.name} templates`}>
          {industry.templates.map((template, index) => {
            const hostname = new URL(template.url).hostname;
            return (
              <article className="template-card" key={template.url}>
                <div className="browser-frame">
                  <div className="browser-bar">
                    <div className="browser-dots" aria-hidden="true"><span /><span /><span /></div>
                    <span className="browser-domain">{hostname}</span>
                    <span className="live-tag">LIVE PREVIEW</span>
                  </div>
                  <div className="preview-stage">
                    <img
                      src={template.preview}
                      alt={`${template.name} website preview`}
                      loading="lazy"
                    />
                    <a className="preview-link" href={template.url} aria-label={`Open ${template.name} live website`} target="_blank" rel="noopener noreferrer" />
                  </div>
                </div>
                <div className="template-meta">
                  <div className="template-number">/{String(index + 1).padStart(2, "0")}</div>
                  <div className="template-name">
                    <h2>{template.name}</h2>
                    <p>{template.note}</p>
                  </div>
                  <a href={template.url} className="view-link" target="_blank" rel="noopener noreferrer">View live website <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            );
          })}
        </section>
      ) : (
        <section className="coming-soon shell">
          <div className="soon-mark" aria-hidden="true">+</div>
          <div>
            <div className="eyebrow">/IN PRODUCTION</div>
            <h2>NEW DESIGN TEMPLATES<br />TO BE DEPLOYED SOON.</h2>
            <p>We&apos;re preparing new website directions for {industry.name.toLowerCase()}.</p>
          </div>
        </section>
      )}

      <section className="next-industry shell">
        <span>/KEEP EXPLORING</span>
        <Link href="/" target="_blank" rel="noopener noreferrer">Browse all industries <b aria-hidden="true">↗</b></Link>
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
