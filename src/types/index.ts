// 项目类型定义

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  duration?: string;
  pages: ProjectPage[];
  coverDescription?: string;
}

export interface ProjectPage {
  id: string;
  title: string;
  background: string;
  coreActions?: string[];
  images?: string[];
  results?: string[];
}

export interface AbilityBlock {
  id: string;
  title: string;
  keywords: string[];
  route: string;
  icon: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  wechat: string;
}

export interface MarketInsight {
  category: string;
  image: string;
  link: string;
}

export type Section = 'home' | 'ability' | 'projects' | 'insights' | 'about';
