import type { ImageMetadata } from "astro";

import habitTracking from "../assets/projectThumbs/habit-tracking.png";
import landingPage from "../assets/projectThumbs/landing-page.png";
import ecommerce from "../assets/projectThumbs/ecommerce.png";
import taskManager from "../assets/projectThumbs/task-manager.png";

export type Technology =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Astro"
  | "Tailwind CSS"
  | "Node.js"
  | "Express"
  | "Prisma"
  | "PostgreSQL"
  | "MongoDB"
  | "Git"
  | "Docker";

export interface Project {
  title: string;
  description: string;
  imageSrc: ImageMetadata;
  technologies: Technology[];
  projectUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Habit Tracking",
    description:
      "Sistema para gerenciamento de hábitos com acompanhamento diário, estatísticas e autenticação de usuários.",
    imageSrc: habitTracking,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Prisma",
      "PostgreSQL",
    ],
    projectUrl: "https://habit-tracking.vercel.app",
    githubUrl: "https://github.com/seuusuario/habit-tracking",
  },

  {
    title: "Landing Page SaaS",
    description:
      "Landing page moderna desenvolvida para conversão, com foco em performance, responsividade e SEO.",
    imageSrc: landingPage,
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
    ],
    projectUrl: "https://landing-saas.vercel.app",
    githubUrl: "https://github.com/seuusuario/landing-page",
  },

  {
    title: "Minimal E-commerce",
    description:
      "Loja virtual minimalista com catálogo de produtos, carrinho de compras e checkout integrado.",
    imageSrc: ecommerce,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    projectUrl: "https://minimal-shop.vercel.app",
    githubUrl: "https://github.com/seuusuario/minimal-ecommerce",
  },

  {
    title: "Task Manager",
    description:
      "Aplicação para gerenciamento de tarefas com organização por prioridades e calendário.",
    imageSrc: taskManager,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    projectUrl: "https://task-manager.vercel.app",
    githubUrl: "https://github.com/seuusuario/task-manager",
  },

  {
    title: "Task Manager",
    description:
      "Aplicação para gerenciamento de tarefas com organização por prioridades e calendário.",
    imageSrc: taskManager,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    projectUrl: "https://task-manager.vercel.app",
    githubUrl: "https://github.com/seuusuario/task-manager",
  },

  {
    title: "Task Manager",
    description:
      "Aplicação para gerenciamento de tarefas com organização por prioridades e calendário.",
    imageSrc: taskManager,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    projectUrl: "https://task-manager.vercel.app",
    githubUrl: "https://github.com/seuusuario/task-manager",
  },

  {
    title: "Task Manager",
    description:
      "Aplicação para gerenciamento de tarefas com organização por prioridades e calendário.",
    imageSrc: taskManager,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    projectUrl: "https://task-manager.vercel.app",
    githubUrl: "https://github.com/seuusuario/task-manager",
  },

  {
    title: "Task Manager",
    description:
      "Aplicação para gerenciamento de tarefas com organização por prioridades e calendário.",
    imageSrc: taskManager,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    projectUrl: "https://task-manager.vercel.app",
    githubUrl: "https://github.com/seuusuario/task-manager",
  },

  {
    title: "Task Manager",
    description:
      "Aplicação para gerenciamento de tarefas com organização por prioridades e calendário.",
    imageSrc: taskManager,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    projectUrl: "https://task-manager.vercel.app",
    githubUrl: "https://github.com/seuusuario/task-manager",
  },

  {
    title: "Task Manager",
    description:
      "Aplicação para gerenciamento de tarefas com organização por prioridades e calendário.",
    imageSrc: taskManager,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    projectUrl: "https://task-manager.vercel.app",
    githubUrl: "https://github.com/seuusuario/task-manager",
  },
];