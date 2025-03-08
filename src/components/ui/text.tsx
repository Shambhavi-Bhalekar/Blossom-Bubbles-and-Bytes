import { AnimatedGradientText } from "../magicui/animated-gradient-text";

export function AnimatedGradientTextDemo() {
  return (
    <AnimatedGradientText
      speed={2}
      colorFrom="#4ade80"
      colorTo="#FF0000"
      className="text-4xl font-semibold tracking-tight flex justify-center items-center sm:text-4xl"
    >
      Welcome to the Future of Shopping
    </AnimatedGradientText>
  );
}
