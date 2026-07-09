import type { ImageMetadata } from "astro";

import htmlIcon from "../assets/technologiesIcons/html5.svg";
import cssIcon from "../assets/technologiesIcons/css.svg";
import javascriptIcon from "../assets/technologiesIcons/javascript.svg";
import typescriptIcon from "../assets/technologiesIcons/typescript.svg";
import reactIcon from "../assets/technologiesIcons/react.svg";
import tailwindIcon from "../assets/technologiesIcons/tailwindcss.svg";

import gitIcon from "../assets/toolsIcons/git.svg";
import githubIcon from "../assets/toolsIcons/github.svg";
import figmaIcon from "../assets/toolsIcons/figma.svg";
import vscodeIcon from "../assets/toolsIcons/vscode.svg";
import linuxIcon from "../assets/toolsIcons/linux.svg";
import dockerIcon from "../assets/toolsIcons/docker.svg";

import communicationIcon from "../assets/softSkillsIcons/communication.svg";
import teamworkIcon from "../assets/softSkillsIcons/teamWork.svg";
import problemSolvingIcon from "../assets/softSkillsIcons/problemSolving.svg";
import quickLearningIcon from "../assets/softSkillsIcons/quickLearning.svg";

export interface Skill {
  title: string;
  iconSrc: ImageMetadata;
  description?: string;
}

export const frontEndSkills: Skill[] = [
  {
    title: "HTML",
    iconSrc: htmlIcon,
  },
  {
    title: "CSS",
    iconSrc: cssIcon,
  },
  {
    title: "JavaScript",
    iconSrc: javascriptIcon,
  },
  {
    title: "TypeScript",
    iconSrc: typescriptIcon,
  },
  {
    title: "React",
    iconSrc: reactIcon,
  },
  {
    title: "Tailwind CSS",
    iconSrc: tailwindIcon,
  },
];

export const backEndSkills: Skill[] = [];

export const toolsSkills: Skill[] = [
  {
    title: "Git",
    iconSrc: gitIcon,
  },
  {
    title: "GitHub",
    iconSrc: githubIcon,
  },
  {
    title: "Figma",
    iconSrc: figmaIcon,
  },
  {
    title: "VS Code",
    iconSrc: vscodeIcon,
  },
  {
    title: "Linux",
    iconSrc: linuxIcon,
  },
  {
    title: "Docker",
    iconSrc: dockerIcon,
  },
];

export const softSkills: Skill[] = [
  {
    title: "Comunicação",
    iconSrc: communicationIcon,
    description: "Explicar ideias de forma clara e objetiva.",
  },
  {
    title: "Trabalho em equipe",
    iconSrc: teamworkIcon,
    description: "Colaborar e compartilhar conhecimento com o time.",
  },
  {
    title: "Resolução de problemas",
    iconSrc: problemSolvingIcon,
    description: "Analisar situações e encontrar soluções eficientes.",
  },
  {
    title: "Aprendizado contínuo",
    iconSrc: quickLearningIcon,
    description: "Buscar constantemente novos conhecimentos.",
  },
];