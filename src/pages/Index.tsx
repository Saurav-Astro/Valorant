import { useEffect, useState } from "react";
import data from "@/data/data.json";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import AbilitiesSection from "@/components/sections/AbilitiesSection";


const Index = () => {
  const [headerHue, setHeaderHue] = useState<string | undefined>(undefined);

  useEffect(() => {
    document.title = data.site.title;
  }, []);

  return (
    <main>
      <Header activeHue={headerHue} />
      <Banner onThemeChange={(h) => setHeaderHue(h)} />
      <AbilitiesSection />
      <footer className="py-10 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Valorant Agents Fan UI
        </div>
      </footer>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: data.site.title,
        description: data.site.description,
        url: data.site.canonical
      }) }} />
    </main>
  );
};

export default Index;

