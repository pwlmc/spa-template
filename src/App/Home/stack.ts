type StackItem = {
  name: string;
  description: string;
  link?: { to: string; label: string };
};

export const stack: StackItem[] = [
  {
    name: "React & TypeScript",
    description: "Component-based UI with typed props and application state.",
  },
  {
    name: "Vite",
    description: "Local development, hot updates, and production builds.",
  },
  {
    name: "React Router",
    description: "Client-side routes with shared layout and browser history.",
  },
  {
    name: "Base UI & StyleX",
    description:
      "Headless interaction primitives styled with shared Night Owl tokens.",
  },
  {
    name: "Custom design system",
    description: "Reusable components maintained in this project.",
    link: { to: "/design-system", label: "Explore the design system" },
  },
  {
    name: "OK-FP",
    description: "Composable TypeScript effects for FP coding style.",
    link: { to: "/example", label: "Try safe division" },
  },
  {
    name: "Morando architecture",
    description: "Organizes code into domains and modules. ",
    link: { to: "https://morando.dev/", label: "Read the Morando docs" },
  },
  {
    name: "Vitest & Oxlint",
    description: "Automated tests and lint checks for the template.",
  },
];
