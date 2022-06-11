const size = {
  h1: 24,
  h2: 22,
  h3: 20,
  h4: 18,
  large: 23,
  normal: 21,
  regular: 19,
  medium: 17,
  small: 15,
  extraSmall: 13,
  tiny: 11,
};

const style = {
  h1: {
    fontWeight: "bold",
    fontSize: size.h1,
  },
  h2Bold: {
    fontWeight: "bold",
    fontSize: size.h2,
  },
  h2: {
    fontWeight: "500",
    fontSize: size.h2,
  },
  h3bold: {
    fontWeight: "bold",
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  normal: {
    fontSize: size.regular,
  },
  description: {
    fontSize: size.medium,
  },
};

export default {
  size,
  style,
};
