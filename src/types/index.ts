// src/types/index.ts
export type Milestone = {
  year: string;
  title: string;
  text?: string;
};

export type Post = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  source: string;
  url: string;
  tags?: string[];
  readMins?: number;
  cover?: string;
};

export type EventItem = {
  id: number;
  title: string;
  date: string;
  info: string;
  location?: string;
};