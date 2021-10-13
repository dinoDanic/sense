export const pageTransitionAni = {
  initial: { y: -30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -30, opacity: 0 },
};

export const shopItemsAni = {
  boxAni: {
    hover: { scale: 0.97 },
    tap: { scale: 1 },
  },
  imgAni: {
    hover: { scale: 1.05, x: -15 },
    tap: { scale: 1, x: 0 },
  },
  infoAni: {
    hover: { scale: 1.05, x: 15 },
    tap: { scale: 1, x: 0 },
  },
};
