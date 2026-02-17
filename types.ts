
export enum ThemeType {
  HACKER = 'HACKER',
  LAMBO = 'LAMBO',
  BATMAN = 'BATMAN'
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}
