import { Button } from "@/components/ui/button";
import { ArrowRight, Blocks, Settings2 } from "lucide-react";
import Image from "next/image";

interface Features03Props {
  logicTreeText?: string;
  media1Src?: string;
}

const Features03 = ({
  logicTreeText = "Building a 20-path logic tree in Typeform is a nightmare.",
  media1Src = "https://5jw1znnm2c.ufs.sh/f/0HPmnuCEv8pSVOfklZ4u3fFn6TyYLzhtDqJ8GerAS2QsWb41"
}: Features03Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="w-full max-w-(--breakpoint-lg) mx-auto py-12 px-6">
        <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-13 font-semibold tracking-tight">
          Engage and Qualify <br />
          <span className="text-foreground/65">
            leads, customers, and users with AI-powered surveys
          </span>
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 1 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background rounded-xl overflow-hidden relative">
              <Image
                src={media1Src}
                alt="Evallo AI survey builder interface showing simple drag-and-drop survey creation"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <span className="text-xl font-semibold tracking-tight">
              Goodbye, Logic Map Spaghetti
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Settings2 className="shrink-0" />
                  <p className="-mt-0.5">
                    {logicTreeText}
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Blocks className="shrink-0" />
                  <p className="-mt-0.5">
                    With Evallo, you just describe your goal in plain English. Our AI handles the rest.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-8 w-full">
              Build Your First Evallo <ArrowRight />
            </Button>
          </div>
          {/* Media 1 Desktop */}
          <div className="hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden relative">
            <Image
              src={media1Src}
              alt="Evallo AI survey builder interface showing simple drag-and-drop survey creation"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Media 2 Desktop */}
          <div className="hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden relative">
            <Image
              src="https://5jw1znnm2c.ufs.sh/f/0HPmnuCEv8pSJvaG613pvGFhHrj4KeqZLtCWSwkfliNJAUEb"
              alt="Evallo survey planning dashboard with AI-powered question generation and flow optimization"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 2 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background rounded-xl overflow-hidden relative">
              <Image
                src="https://5jw1znnm2c.ufs.sh/f/0HPmnuCEv8pSJvaG613pvGFhHrj4KeqZLtCWSwkfliNJAUEb"
                alt="Evallo survey planning dashboard with AI-powered question generation and flow optimization"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <span className="text-xl font-semibold tracking-tight">
              Qualitative Depth at Quantitative Scale.
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Settings2 className="shrink-0" />
                  <p className="-mt-0.5">
                    Evallo bridges the gap between a shallow survey and a 30-minute Zoom interview.

                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Blocks className="shrink-0" />
                  <p className="-mt-0.5">
                    Get the &ldquo;why&rdquo; from 1,000 people simultaneously.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-8 w-full">
              Build your strategy <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features03;
