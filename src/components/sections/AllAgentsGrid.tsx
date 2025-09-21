import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AgentStoryModal from"@/components/AgentStoryModal";

interface AgentApiItem {
  uuid: string;
  displayName: string;
  description: string;
  fullPortrait: string | null;
  fullPortraitV2: string | null;
  displayIcon: string | null;
  backgroundGradientColors: string[] | null;
  role: { displayName: string } | null;
}

interface AgentWithStory extends AgentApiItem {
  story: string;
}

const AllAgentsGrid = () => {
  const [agents, setAgents] = useState<AgentWithStory[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<AgentWithStory | null>(null);

  useEffect(() => {
    // Fetch both agents and their stories
    Promise.all([
      fetch("/data/agents.json").then((res) => res.json()),
      fetch("/data/agents-story.json").then((res) => res.json()),
    ])
    .then(([agentsData, storiesData]) => {
      const agentList = (agentsData?.data ?? []) as AgentApiItem[];
      
      const agentsWithStories = agentList
        .map(agent => ({
          ...agent,
          story: storiesData[agent.displayName] || agent.description, // Fallback to description if no story
        }))
        .filter(Boolean)
        .sort((a, b) => a.displayName.localeCompare(b.displayName));
        
      setAgents(agentsWithStories);
    })
    .catch(() => setAgents([]));
  }, []);

  return (
    <>
      <section id="all-agents" className="py-16">
        <div className="container">
          <header className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">All Agents</h2>
            <p className="text-muted-foreground">Browse every agent with real official artwork from Valorant API.</p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {agents.map((agent, idx) => {
              const img = agent.fullPortrait || agent.fullPortraitV2 || agent.displayIcon || "";
              const gradient = (agent.backgroundGradientColors && agent.backgroundGradientColors.length >= 2)
                ? `linear-gradient(135deg, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[1]})`
                : `linear-gradient(135deg, hsl(var(--brand)), hsl(var(--brand-glow)))`;

              return (
                <motion.article
                  key={agent.uuid}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.25) }}
                  className="group relative overflow-hidden rounded-lg border bg-card/60 backdrop-blur cursor-pointer"
                  onClick={() => setSelectedAgent(agent)}
                >
                  <div className="absolute inset-0 opacity-60" style={{ background: gradient }} aria-hidden />
                  <img
                    src={img}
                    alt={`${agent.displayName} full portrait`}
                    loading="lazy"
                    decoding="async"
                    className="relative z-[1] w-full h-80 object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-[2] p-4 border-t bg-background/60 backdrop-blur">
                    <h3 className="text-lg font-semibold leading-none">{agent.displayName}</h3>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{agent.role?.displayName ?? "Agent"}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {selectedAgent && (
        <AgentStoryModal
          agent={{
            displayName: selectedAgent.displayName,
            fullPortrait: selectedAgent.fullPortrait || selectedAgent.fullPortraitV2 || "",
            role: selectedAgent.role?.displayName ?? "Agent",
            story: selectedAgent.story,
            gradient: (selectedAgent.backgroundGradientColors && selectedAgent.backgroundGradientColors.length >= 2)
              ? `linear-gradient(135deg, #${selectedAgent.backgroundGradientColors[0]}, #${selectedAgent.backgroundGradientColors[1]})`
              : `linear-gradient(135deg, hsl(var(--brand)), hsl(var(--brand-glow)))`,
          }}
          onClose={() => setSelectedAgent(null)}
        />
      )}
    </>
  );
};

export default AllAgentsGrid;