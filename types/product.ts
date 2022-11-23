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
export interface ProductType {
  title: string;
  tag: string;
  desc: string;
  category: string;
  _id?: string;
  variant: Variant[];
}

export type FetchedProductType = {
  _id: "string";
  active: boolean;
  category: string;
  desc: string;
  tag: string;
  title: string;
  variant: Variant[];
};
