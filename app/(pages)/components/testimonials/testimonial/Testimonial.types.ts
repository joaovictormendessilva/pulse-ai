import { testimonials } from "../Testimonials.utils";

export type TestimonialProps = {
  testimonial: (typeof testimonials)[number];
};
