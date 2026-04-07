export const fadeInUpTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const fadeInUpOnMount = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: fadeInUpTransition,
};

export const fadeInUpOnScroll = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: fadeInUpTransition,
};
