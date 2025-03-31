import { BackgroundBeams } from "./ui/background-beams";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function Review() {
  return (
    <section id="testimonials" className="relative py-16">
      <BackgroundBeams className="absolute inset-0 z-[-1]" />
      <div className="relative z-10 h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Rishabh displays exemplary professionalism and he learns quickly and proves to be an invaluable asset to any team. A remarkable problem solver and dedicated student, he is always ready to lend a helping hand, making him an outstanding team player",
    name: "Senior Professor",
    title: "HOD Computer Engineering",
  },
  {
    quote:
      "Working with Rishabh on our college magazine website was an absolute pleasure. His dedication, creativity, and attention to detail were evident throughout the development process, and their ability to seamlessly integrate feedback made the project a tremendous success.",
    name: "BVPCOE Editorial Board",
    title: "Editor-in-Chief",
  },
  {
    quote:
      "Rishabh demonstrated exceptional dedication and a strong desire to learn. He consistently approached challenges with enthusiasm, showcased excellent communication and coordination skills, and paid impressive attention to detail.",
    name: "Cognifyz Technologies",
    title: "Project Lead",
  },
  {
    quote:
      "Rishabh's technical expertise and creative problem-solving skills consistently drive projects forward. His commitment to excellence and collaborative approach make him a highly valued team member who elevates every project.",
    name: "Senior Professor",
    title: "Professor",
  },
];

export default Review;
