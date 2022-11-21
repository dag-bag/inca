/** @format */
export interface Variant {
  title: string;
  slug: string;
  img: string[];
  availableQty: number;
  color: string;
  price: number;
  sellPrice: number;
  metadesc: string;
}
export interface Product {
  title: string;
  tag: string;
  desc: string;
  category: string;
  variant: Variant[];
}
