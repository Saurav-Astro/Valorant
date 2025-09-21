import data from "@/data/data.json";
import type { Character } from "@/components/CharacterCard";

const ContractsSection = () => {
  const characters = data.characters as Character[];
  return (
    <section id="contracts" className="py-16">
      <div className="container">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">{data.sections.contracts.title}</h2>
          <p className="text-muted-foreground">{data.sections.contracts.subtitle}</p>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {characters.map((c) => (
            <article key={c.slug} id={`contracts-${c.slug}`} className="rounded-lg border bg-card/60 backdrop-blur p-6">
              <h3 className="text-xl font-bold mb-1">{c.name} Contract</h3>
              <p className="text-sm text-muted-foreground mb-4">Progress to unlock cosmetic rewards for {c.name}.</p>
              <img src={c.images.thumb} alt={`${c.name} contract thumbnail`} loading="lazy" decoding="async" className="w-full h-32 object-cover rounded-md border mb-4" />
              <a href="#overview" className="story-link text-sm">Back to top</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractsSection;
