import { createFileRoute } from "@tanstack/react-router";
import { BackgroundField } from "@/components/folio/BackgroundField";
import { Nav } from "@/components/folio/Nav";
import { Hero } from "@/components/folio/Hero";
import { Marquee } from "@/components/folio/Marquee";
import { About } from "@/components/folio/About";
import { Work } from "@/components/folio/Work";
import { Play } from "@/components/folio/Play";
import { Resume } from "@/components/folio/Resume";
import { Contact } from "@/components/folio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abenezer Niguse — Full-Stack Software Engineer" },
      { name: "description", content: "Abenezer Niguse — Full-stack software engineer and Haramaya University graduate building warm, human web apps with React, Node.js and PostgreSQL." },
      { property: "og:title", content: "Abenezer Niguse — Full-Stack Engineer" },
      { property: "og:description", content: "Full-stack software engineer building warm, human products." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <BackgroundField />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Play />
      <Resume />
      <Contact />
    </main>
  );
}
