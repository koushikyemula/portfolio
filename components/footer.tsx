import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

const links = [
  {
    icon: Github,
    href: "https://github.com/BlitZSenpai",
    tooltipContent: "Github",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/koushik-yemula/",
    tooltipContent: "Linkedin",
  },
  {
    icon: Mail,
    href: "https://github.com/BlitZSenpai",
    tooltipContent: "Mail",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/koushikyemula",
    tooltipContent: "X (formarly known as twitter)",
  },
];

export const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="border-t border-gray-500 h-1" />
      <div className="flex w-full items-center justify-between p-6">
        <div>
          <h2>Koushik Yemula</h2>
        </div>
        <div className="flex items-center justify-center gap-x-4 pr-2">
          {links.map((link) => (
            <TooltipProvider key={link.href}>
              <Tooltip>
                <TooltipTrigger>
                  <Link target="_blank" href={link.href}>
                    <link.icon className="h-4 w-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-background">
                  <p className="text-zinc-400 text-sm">{link.tooltipContent}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );
};
