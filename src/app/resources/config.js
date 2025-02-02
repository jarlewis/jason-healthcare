const baseURL = "https://jason-healthcare.vercel.app";

const routes = {
  "/": true,
  "/about": true,
  "/work": false,  // Changed to false to hide Personal Projects
  "/blog": false,  // Changed to false to hide Blog
  "/gallery": true,
};

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

const style = {
  theme: "dark",
  neutral: "slate",
  brand: "neutral",     // Changed from 'blue' to 'neutral' for black theme
  accent: "zinc",       // Changed from 'cyan' to 'zinc' for monochromatic look
  solid: "contrast",    // Changed from 'color' to 'contrast' for black emphasis
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
};

const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 75,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "neutral-background-strong",  // Changed from brand to neutral
    colorEnd: "static-transparent",
    opacity: 70,
  },
  dots: {
    display: true,
    size: 2,
    color: "neutral-on-background-weak",  // Changed from brand to neutral
    opacity: 20,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
};

const display = {
  location: true,
  time: true,
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: false,
      x: 100,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      tilt: -45,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
      opacity: 100,
    },
    dots: {
      display: false,
      size: 24,
      color: "brand-on-background-weak",
      opacity: 100,
    },
    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
    grid: {
      display: true,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };
