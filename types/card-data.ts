import { StaticImageData } from "next/image";

type Image = {
  image: StaticImageData;
  alt: string;
};

export type CardData = {
  id?: string;
  backgroundImage?: StaticImageData;
  icon?: any;
  popular?: boolean;
  date?: string;
  source?: string;
  title?: string;
  description?: string;
  images?: Image[];
  bio?: {
    image: StaticImageData;
    name: string;
    title: string;
    office: string;
  };
  url?: string;
  type?: "Documents" | "People" | "Links";
};
