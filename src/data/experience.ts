export interface TimelineItem {
  title: string;
  subtitle: string;
  start: number;
  end: number | "Atual";
}

export const graduations: TimelineItem[] = [
  {
    title: "Universidade Federal do Rio Grande do Sul",
    subtitle: "Bacharelado em Ciência da Computação",
    start: 2023,
    end: "Atual",
  },
  {
    title: "Instituto Federal do Rio Grande do Sul",
    subtitle: "Técnico em Informática",
    start: 2020,
    end: 2022,
  },
];

export const jobExperiences: TimelineItem[] = [
  {
    title: "Google",
    subtitle: "Software Engineer",
    start: 2024,
    end: "Atual",
  },
  {
    title: "Rocketseat",
    subtitle: "Frontend Developer",
    start: 2022,
    end: 2024,
  },
];