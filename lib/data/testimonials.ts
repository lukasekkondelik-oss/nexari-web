export interface Testimonial {
  slug: string;
  quote: string;
  name: string;
  role: string;
  projectSlug?: string;
  photo?: string;
}

/**
 * Real, attributable testimonials only — nothing here is invented. The
 * component that renders these hides the whole section when the array is
 * empty, so this list grows in step with real feedback from clients.
 */
export const testimonials: Testimonial[] = [];
