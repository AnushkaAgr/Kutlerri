export type BlogPost = {
  id: string;
  tag?: string;
  title: string;
  description: string;
  date: string | null;
  href: string | null;
  /** Path to the card image (relative to /public). Set to null if not ready yet. */
  image: string | null;
  comingSoon?: boolean;
};

/**
 * The large featured post shown at the top of the blog index page.
 * Swap `image` to any path under /public/images/ when updating.
 */
export const featuredBlog: BlogPost = {
  id: "doordash-vs-catering",
  tag: "The Secret Sauce",
  title:
    "Paying 25% to DoorDash on Every Order? There's a Channel Delivery Apps Can't Touch.",
  description:
    "You're doing $800 in delivery revenue but only seeing $600 in your account. DoorDash kept the rest. Multiply that across every order, every location, every week of the year and you are looking at hundreds of thousands of dollars walking out the door through a platform you do not own. What if there was an entire revenue channel that charges no commission, builds relationships you actually keep, and that delivery platforms cannot touch and never will?",
  date: "February 24, 2026",
  href: "/blog/doordash-vs-catering",
  image: "/images/blogPageImages/doordash.png",
};

/**
 * The three-column grid of blog cards beneath the featured post.
 * Add more items to extend the grid. Set `comingSoon: true` for placeholder cards.
 * Set `image` to null for coming-soon cards with no illustration yet.
 */
export const blogPosts: BlogPost[] = [
  {
    id: "catering-playbook",
    title:
      "The Catering Playbook: How to Build a Revenue Channel That Runs Without Chaos",
    description:
      "Most restaurants capture 4 to 8% of their catering potential. The benchmark for operators running it as a real channel is 20%. What is sitting uncaptured within ten miles of your location right now?",
    date: "February 24, 2026",
    href: "/blog/catering-playbook",
    image: "/images/blogPageImages/catering-playbook.png",
  },
  {
    id: "catering-goldmine",
    title:
      "Your Restaurant Is Sitting on a Catering Goldmine. Here's What's Blocking It.",
    description:
      "Most restaurants don't have a catering operation. They have a catering habit. What would change if every inquiry, every quote, and every follow-up ran through the same system every single time?",
    date: "February 23, 2026",
    href: "/blog/catering-goldmine",
    image: "/images/blogPageImages/catering-goldmine.png",
  },
  {
    id: "coming-soon-1",
    title: "We are COOKING more playbooks for you. Wait for it.",
    description: 'Most "resources" are marketing. Ours will be instructions.',
    date: null,
    href: null,
    // Replace with image path when the illustration is ready
    image: null,
    comingSoon: true,
  },
];
