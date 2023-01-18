/** @format */

export interface CartItem {
  title: string;
  uni: string;
  price: number;
  color: string;
  size: string;
  img: [{ img: string; alt: string }];
  slug: string;
  id: string;
  qty: number;
  desc?: string;
}
