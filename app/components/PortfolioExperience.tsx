"use client";

import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  FileCode2,
  FileText,
  Folder,
  FolderOpen,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { type ComponentType, useEffect, useMemo, useState } from "react";

type SectionDefinition = {
  id: string;
  folder: string;
  file: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const SECTIONS: SectionDefinition[] = [
  { id: "about", folder: "profile", file: "README.md", Icon: FileText },
  { id: "experience", folder: "career", file: "experience.ts", Icon: FileCode2 },
  { id: "contact", folder: "contact", file: "email.txt", Icon: Mail },
];

const EXPERIENCE = [
  {
    period: "Now",
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
    company: "Optum",
    acquisition: null,
    place: "Austin, TX",
    detail:
      "Built a Flask and React dashboard that unified hundreds of security vulnerabilities and multiple APIs into one remediation workflow.",
    stack: "React · Flask · API integration",
  },
  {
    period: "2022",
    role: "Software Engineer Intern",
    company: "UnitedHealthcare",
    acquisition: null,
    place: "Dallas, TX",
    detail:
      "Designed a modern Angular interface and connected C#, ASP.NET, SQL Server, and live data across a full-stack system.",
    stack: "Angular · C# · ASP.NET · SQL",
  },
];

function Explorer({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav className="tree" aria-label="Portfolio index">
      <p className="tree-caption">Directory</p>
      <div className="tree-root">
        <ChevronRight size={13} className="root-chevron" />
        <FolderOpen size={15} strokeWidth={1.6} />
        <span>taha</span>
      </div>
      <div className="tree-children">
        {SECTIONS.map((section, index) => {
          const active = section.id === activeId;
          const FolderIcon = active ? FolderOpen : Folder;

          return (
            <div className={`tree-group ${active ? "is-active" : ""}`} key={section.id}>
              <button
                className="folder-row"
                type="button"
                onClick={() => onNavigate(section.id)}
                aria-expanded={active}
              >
                <ChevronRight size={13} className="tree-chevron" />
                <FolderIcon size={15} strokeWidth={1.6} />
                <span>{section.folder}</span>
                <small>0{index + 1}</small>
              </button>
              <div className="file-reveal">
                <div className="file-reveal-inner">
                  <button
                    className="file-row"
                    type="button"
                    onClick={() => onNavigate(section.id)}
                    aria-current={active ? "location" : undefined}
                  >
                    <section.Icon size={14} strokeWidth={1.6} />
                    <span>{section.file}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span>{children}</span>
    </div>
  );
}

export default function PortfolioExperience() {
  const [activeId, setActiveId] = useState("about");
  const [mobileTreeOpen, setMobileTreeOpen] = useState(false);

  const activeIndex = useMemo(
    () => Math.max(0, SECTIONS.findIndex((section) => section.id === activeId)),
    [activeId],
  );
  const activeSection = SECTIONS[activeIndex];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(section.id);
        },
        { rootMargin: "-44% 0px -44% 0px", threshold: 0 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const navigate = (id: string) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    setActiveId(id);
    setMobileTreeOpen(false);
  };

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#about">
        Skip to portfolio
      </a>

      <aside className="explorer">
        <a href="#about" onClick={() => navigate("about")} className="brand-mark">
          <strong>Taha Ahmed</strong>
          <span>Product &amp; Engineering</span>
        </a>

        <Explorer activeId={activeId} onNavigate={navigate} />

        <div className="explorer-foot">
          <div>
            <span>Based in</span>
            <strong>New York City</strong>
          </div>
          <span>{String(activeIndex + 1).padStart(2, "0")} / 03</span>
        </div>
      </aside>

      <header className="mobile-header">
        <a href="#about" onClick={() => navigate("about")} className="mobile-brand">
          Taha
        </a>
        <button
          type="button"
          className="mobile-path"
          onClick={() => setMobileTreeOpen((value) => !value)}
          aria-expanded={mobileTreeOpen}
          aria-controls="mobile-explorer"
        >
          <span>{activeSection.folder}</span>
          <ChevronRight size={12} />
          <strong>{activeSection.file}</strong>
        </button>
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileTreeOpen((value) => !value)}
          aria-label={mobileTreeOpen ? "Close portfolio index" : "Open portfolio index"}
        >
          {mobileTreeOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>

      <div
        id="mobile-explorer"
        className={`mobile-explorer ${mobileTreeOpen ? "is-open" : ""}`}
      >
        <Explorer activeId={activeId} onNavigate={navigate} />
      </div>

      <main className="site-main">
        <div className="desktop-path" aria-hidden="true">
          <span>taha</span>
          <ChevronRight size={12} />
          <span>{activeSection.folder}</span>
          <ChevronRight size={12} />
          <strong>{activeSection.file}</strong>
          <span className="path-count">0{activeIndex + 1}</span>
        </div>

        <section id="about" className="content-section hero-section">
          <div className="hero-status">
            <span className="status-dot" />
            Product &amp; Engineering at Level2
          </div>
          <h1 aria-label="Taha Ahmed">
            <span>Taha</span>
            <span>Ahmed</span>
          </h1>
          <div className="hero-bottom">
            <p className="role-focus">
              <span>Current focus</span>
              <strong>FDE / SE roles</strong>
            </p>
            <button type="button" className="text-link" onClick={() => navigate("experience")}>
              View experience <ArrowDown size={16} />
            </button>
          </div>
        </section>

        <section id="experience" className="content-section experience-section">
          <header className="section-heading">
            <SectionLabel index="01">Career</SectionLabel>
            <h2>Experience</h2>
          </header>

          <div className="experience-list">
            {EXPERIENCE.map((item) => (
              <article className="experience-row" key={`${item.company}-${item.period}`}>
                <div className="experience-period">{item.period}</div>
                <div className="experience-content">
                  <div className="role-heading">
                    <h3>{item.role}</h3>
                    {item.acquisition ? (
                      <span className="acquisition-note">{item.acquisition}</span>
                    ) : null}
                  </div>
                  <p className="company-line">
                    <strong>{item.company}</strong>
                    <span>{item.place}</span>
                  </p>
                  <p className="role-detail">{item.detail}</p>
                  <p className="role-stack">{item.stack}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <SectionLabel index="02">Contact</SectionLabel>
          <div className="contact-copy">
            <h2>Reach out.</h2>
            <a className="email-link" href="mailto:taha.ahmed1786@gmail.com">
              <span>taha.ahmed1786@gmail.com</span>
              <ArrowUpRight size={28} />
            </a>
          </div>
          <footer className="site-footer">
            <span>New York City · ET</span>
            <span>© {new Date().getFullYear()} Taha Ahmed</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
