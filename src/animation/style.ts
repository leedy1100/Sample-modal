const spring = {
  extraSlow: {
    type: "spring",
    duration: 0.6,
    bounce: 0.7,
  },
  slow: {
    type: "spring",
    duration: 0.5,
    bounce: 0.5,
  },
  medium: {
    type: "spring",
    duration: 0.4,
    bounce: 0.6,
  },
  fast: {
    type: "spring",
    duration: 0.3,
    bounce: 0.4,
  },
  extraFast: {
    type: "spring",
    duration: 0.2,
    bounce: 0.3,
  },
};

const delay = {
  none: { delay: 0.0 },
  extraShort: { delay: 0.1 },
  short: { delay: 0.3 },
  semiShort: { delay: 0.5 },
  medium: { delay: 0.7 },
  semiLong: { delay: 0.9 },
  long: { delay: 1.1 },
  extraLong: { delay: 1.3 },
};

const duration = {
  none: { duration: 0.0 },
  extraShort: { duration: 0.1 },
  short: { duration: 0.3 },
  semiShort: { duration: 0.5 },
  medium: { duration: 0.7 },
  semiLong: { duration: 0.9 },
  long: { duration: 1.1 },
  extraLong: { duration: 1.3 },
};

const scale = {
  none: { scale: 0.0 },
  extraSmall: { scale: 0.5 },
  small: { scale: 0.7 },
  semiSmall: { scale: 0.9 },
  normal: { scale: 1.1 },
  semiLarge: { scale: 1.3 },
  large: { scale: 1.5 },
  extraLarge: { scale: 1.7 },
};

export { spring, delay, duration, scale };
