const EXPERIENCE = [
  {
    period: "Current",
    role: "Product & Engineering",
    company: "Level2",
    acquisition: "Acquired by UnitedHealthcare",
    place: "New York City",
    detail: "Working across product and engineering on Level2’s digital health experience.",
    stack: "Product · Engineering · Health tech",
  },
  {
    period: "2023",
    role: "Software Engineer Intern",
    company: "UnitedHealth Group",
    acquisition: null,
    place: "Austin, TX",
    detail: "Resolving vulnerabilities across the enterprise.",
    stack: null,
  },
  {
    period: "2022",
    role: "Software Engineer Intern",
    company: "UnitedHealthcare",
    acquisition: null,
    place: "Dallas, TX",
    detail: "Connecting students to insurance.",
    stack: null,
  },
];

export default function PortfolioExperience() {
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#experience">
        Skip to experience
      </a>

      <main className="sky-main">
        <section className="identity" aria-labelledby="portfolio-title">
          <h1 id="portfolio-title">Taha Ahmed</h1>
          <span>New York City · ET</span>
        </section>

        <section id="experience" className="experience-grid" aria-label="Experience">
          {EXPERIENCE.map((item, index) => (
            <article className="experience-entry" key={item.company + "-" + item.period}>
              <div className="entry-index">
                <span>{item.period}</span>
                <span>0{index + 1}</span>
              </div>
              <h2>{item.role}</h2>
              <p className="entry-company">
                <strong>{item.company}</strong>
                <span>{item.place}</span>
              </p>
              {item.acquisition ? (
                <p className="entry-acquisition">{item.acquisition}</p>
              ) : null}
              <p className="entry-detail">{item.detail}</p>
              {item.stack ? <p className="entry-stack">{item.stack}</p> : null}
            </article>
          ))}
        </section>

        <footer className="site-footer">
          <a href="mailto:meet.taha.ahmed@gmail.com">
            <span>meet.taha.ahmed@gmail.com</span>
            <span aria-hidden="true">↗</span>
          </a>
          <span>© {new Date().getFullYear()} Taha Ahmed</span>
        </footer>
      </main>
    </div>
  );
}
