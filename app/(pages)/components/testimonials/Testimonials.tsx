import { Container } from "@/app/shared/components/container";
import { SectionTitleWithChip } from "@/app/shared/components/section-title-with-chip";
import { testimonials } from "./Testimonials.utils";
import { Testimonial } from "./testimonial";

export function Testimonials() {
  return (
    <Container className="py-[128px]">
      <SectionTitleWithChip
        chipLabel="Success Stories"
        chipColor="green"
        title="Loved by teams worldwide"
        subtitle="See how Pulse AI is transforming the daily operations of leading product organizations."
      />

      <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-[30px]">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </Container>
  );
}
