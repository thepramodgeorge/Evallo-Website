import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlays for top and bottom fade to white */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-[5]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-[5]" />

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />

      <div className="relative z-10 text-center max-w-3xl px-6 w-full">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Stop Building Logic Trees. Start Having Conversations.
        </h1>
        <p className="mt-6 md:text-lg text-foreground/80">
          Typeform makes you play architect with complex branching logic. Evallo uses AI to conduct adaptive interviews that dig deeper, without the setup headache.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button size="lg" className="rounded-full text-base w-full sm:w-auto">
            Get Started for Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none w-full sm:w-auto"
          >
            See a Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
