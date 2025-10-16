const features = [
  {
    title: "Define Your Goal",
    description: "Tell our AI your objective in plain English. \"Why are trial users not converting?\" or \"What do customers love about our new feature?\"",
  },
  {
    title: "Share Your Evallo",
    description: "Evallo's dynamic AI generates the conversation flow and adapts it in real-time based on each user's unique answers. No coding, no logic maps.",
  },
  {
    title: "Get Deeper Understanding",
    description: "Receive a detailed analysis with themes, quotes, and actionable insights, not just a spreadsheet. See the \"why\" behind the data.",
  },
];

const Features02Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="grow w-full sm:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          How It Works: Insight, Simplified.
        </h2>
        <div className="w-full mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col text-start w-full"
            >
              <div className="mb-5 sm:mb-6 w-full aspect-4/5 bg-muted rounded-xl" />
              <span className="text-2xl font-semibold tracking-tight">
                {feature.title}
              </span>
              <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features02Page;
