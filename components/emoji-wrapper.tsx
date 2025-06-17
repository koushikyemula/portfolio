"use client";

import { Button } from "./ui/button";
import { Confetti } from "./ui/confetti";

const EmojiConfettiWrapper = ({ children }: { children: React.ReactNode }) => {
  const handleClick = () => {
    const scalar = 2;
    const unicorn = Confetti.shapeFromText({ text: "🤓", scalar });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn],
      scalar,
    };

    const shoot = () => {
      Confetti({
        ...defaults,
        particleCount: 30,
      });

      Confetti({
        ...defaults,
        particleCount: 5,
        flat: true,
      });

      Confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-auto p-0 text-zinc-400 hover:text-zinc-300 hover:bg-transparent transition-colors"
      onClick={handleClick}>
      {children}
    </Button>
  );
};

export default EmojiConfettiWrapper;
