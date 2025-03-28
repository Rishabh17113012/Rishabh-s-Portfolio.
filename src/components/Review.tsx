import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Review() {
  const testimonials = [
    {
      quote:
        "Rishabh displays exemplary professionalism and he learns quickly and proves to be an invaluable asset to any team. A remarkable problem solver and dedicated student, he is always ready to lend a helping hand, making him an outstanding team player",
      name: "Senior Professor",
      designation: "HOD Computer Engineering",
      src: "/system-administrator-login-installation-avatar-user-wiki-silhouette-neck-human-behavior-icons.png",
    },
    {
      quote:
        "Working with Rishabh on our college magazine website was an absolute pleasure. His dedication, creativity, and attention to detail were evident throughout the development process, and their ability to seamlessly integrate feedback made the project a tremendous success.",
      name: "BVPCOE Editorial Board",
      designation: "Editor-in-Chief",
      src: "/images.png",
    },
    {
      quote:
        "Rishabh demonstrated exceptional dedication and a strong desire to learn. He consistently approached challenges with enthusiasm, showcased excellent communication and coordination skills, and paid impressive attention to detail.",
      name: "Cognifyz Technologies",
      designation: "Project Lead",
      src: "/cognifyz_techonologies_logo.jpeg",
    },
  ];

  return (
    <section id="testimonials" className="py-16">
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}

export default Review;
