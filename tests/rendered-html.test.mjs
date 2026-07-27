import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://portfolio.example/", {
      headers: {
        accept: "text/html",
        host: "portfolio.example",
        "x-forwarded-host": "portfolio.example",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Taha Ahmed's portfolio and social metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Taha Ahmed — Product &amp; Engineering<\/title>/i);
  assert.match(html, /Taha/);
  assert.match(html, /Ahmed/);
  assert.match(html, /Ambitions start with 0s and end with 1s\./);
  assert.match(html, /Resolving vulnerabilities across the enterprise/);
  assert.match(html, /UnitedHealth Group/);
  assert.match(html, /Who is Taha Ahmed\?/);
  assert.match(html, /Connecting students to insurance/);
  assert.match(html, /meet\.taha\.ahmed@gmail\.com/);
  assert.match(html, /Product &amp; Engineering/);
  assert.match(html, /Level2/);
  assert.match(html, /Acquired by UnitedHealthcare/);
  assert.match(html, /New York City/);
  assert.match(html, />Taha</);
  assert.match(html, /https:\/\/portfolio\.example\/og-editorial\.png/);
  assert.doesNotMatch(html, /Publishing Concepts|skills\.json|projects\.tsx|ShoeTopia/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps the finished experience wired to its navigation", async () => {
  const [page, layout, portfolio, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/PortfolioExperience.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<PortfolioExperience \/>/);
  assert.match(layout, /generateMetadata/);
  assert.match(portfolio, /IntersectionObserver/);
  assert.match(portfolio, /aria-current/);
  assert.doesNotMatch(portfolio, /VisualLayer|LightweightFolder|showDesktop3D/);
  assert.doesNotMatch(packageJson, /"@react-three\/fiber"|"three"/);
  assert.doesNotMatch(portfolio, /TAHA-PORTFOLIO/);

  await access(new URL("../public/og-editorial.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", templateRoot)));
});
