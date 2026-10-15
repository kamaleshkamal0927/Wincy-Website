import { type Transition, type Variants } from 'framer-motion';

export const appleEase = [0.22, 1, 0.36, 1] as const;

export const springSmooth: Transition = {
  type: 'spring',
  stiffness: 220,
  damping: 26,
  mass: 1,
};

export const springSnappy: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
};

export const springGentle: Transition = {
  type: 'spring',
  stiffness: 170,
  damping: 28,
};

export const transitionFade: Transition = {
  duration: 0.35,
  ease: appleEase,
};

export const transitionReveal: Transition = {
  duration: 0.65,
  ease: appleEase,
};

export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: appleEase,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: appleEase,
    },
  },
};
