import { StaticImageData } from "next/image";

export type NewsArticle = {
    id?: string;
    date?: string;
    subject?: string;
    title?: string;
    description?: string;
    thumbnail?: StaticImageData;
    path?: string;
  };
  