import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/logos-06/logos";
import { Marquee } from "@/components/ui/marquee";

const Logos06Page = () => {
  return (
    <section className="flex items-center justify-center py-12 px-6">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto py-8">
        <h2 className="text-center text-xl font-medium">
          Trusted by teams at the top organizations
        </h2>

  <div className="mt-10 flex items-center justify-center gap-x-14 gap-y-10">
          <Marquee
            pauseOnHover
            className="[--duration:20s] [&_svg]:mr-10 mask-x-from-70% mask-x-to-90%"
          >
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Logos06Page;
