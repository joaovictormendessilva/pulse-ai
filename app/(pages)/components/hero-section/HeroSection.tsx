import { Container } from "@/app/shared/components/container";
import { HeroPresentation } from "./hero-presentation";

export function HeroSection() {
  return (
    <Container className="mt-[96px]">
      <HeroPresentation />
    </Container>
  );
}
