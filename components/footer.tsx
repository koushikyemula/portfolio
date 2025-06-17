import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { socials } from "@/config/socials";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-8 mt-16">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <Link
            href="https://drive.google.com/file/d/1QfYhuKGX1OLVFv6URueed2eBV3slRful/view?usp=sharing"
            target="_blank"
            className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors">
            © 2025 Koushik Yemula
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <TooltipProvider>
            {socials.map((social) => (
              <Tooltip key={social.tooltipContent} delayDuration={300}>
                <TooltipTrigger asChild>
                  <Link
                    target="_blank"
                    href={social.href}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors p-1 rounded-md hover:bg-zinc-800/50">
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.tooltipContent}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-zinc-900 border-zinc-700 text-zinc-300 text-xs px-2 py-1">
                  {social.tooltipContent}
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </footer>
  );
};
