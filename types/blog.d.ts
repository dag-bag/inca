/** @format */

export interface IBlog {
  _id: string;
  title: string;
  author: string;
  slug: string;
  img: string;
  text: string;
  category: string;
  comments: string[];
  date: string;
  createdAt: Date;
  updatedAt: Date;
}
