import { Separator } from "@/components/ui/separator";
import {
  LinkedinIcon,
  TwitterIcon,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Product",
    links: [
      {
        title: "Pricing",
        href: "/#pricing",
      },
      {
        title: "How it works",
        href: "/#how-it-works",
      },
      {
        title: "Industries",
        href: "/#industries",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        href: "/about-us",
      },
    ],
  },
  {
    title: "Compare",
    links: [
      {
        title: "vs Typeform",
        href: "/vs-typeform",
      },
      {
        title: "vs SurveyMonkey",
        href: "/vs-surveymonkey",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full xl:col-span-2">
              {/* Logo */}
              <Image
                src="/Evallo Logo.png"
                alt="Evallo Logo"
                width={124}
                height={32}
                className="h-8 w-auto"
              />

              <p className="mt-4 text-muted-foreground">
                Create intelligent surveys with AI-powered logic, advanced analytics, and seamless integrations. The modern alternative to traditional survey platforms.
              </p>
            </div>

            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-semibold">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Subscribe Newsletter - Coming Soon */}
            <div className="col-span-2">
              <h6 className="font-semibold">Stay up to date</h6>
              <p className="mt-2 text-sm text-muted-foreground">
                Follow us on social media for the latest updates on AI-powered surveys and product features.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Link 
                  href="https://twitter.com/evallo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow Evallo on Twitter"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://linkedin.com/company/evallo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow Evallo on LinkedIn"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://discord.gg/K32YGWADZW" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Join Evallo Discord community"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/">
                Evallo
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link 
                href="https://twitter.com/evallo" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow Evallo on Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link 
                href="https://linkedin.com/company/evallo" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow Evallo on LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link 
                href="https://discord.gg/K32YGWADZW" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Join Evallo Discord community"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
