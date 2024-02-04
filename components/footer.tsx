import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { socials } from "@/config/socials";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col w-full max-w-xl mt-20">
      <div className="border-t border-gray-500 h-1" />
      <div className="flex w-full items-center justify-between py-5">
        <h2>Koushik Yemula</h2>
        <div className="flex items-center justify-center gap-x-4 pr-2">
          {socials.map((social) => (
            <TooltipProvider key={social.tooltipContent}>
              <Tooltip delayDuration={1}>
                <TooltipTrigger asChild>
                  <Link target="_blank" href={social.href}>
                    <social.icon className="h-4 w-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-background">
                  <p className="text-zinc-400 text-sm">{social.tooltipContent}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );
};
