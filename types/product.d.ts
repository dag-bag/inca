/** @format */
export interface Variant {
  title: string;
  slug: string;
  img: {
    img: string;
    alt: string;
  }[];
  availableQty: number;
  color: string;
  price: number;
  sellPrice: number;
  metadesc: string;
  _id?: string;
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

export type VariantDetails = {
  _id: string;
  active: boolean;
  availableQty: number;
  color: string;
  img: {
    img: string;
    alt: string;
  }[];
  price: number;
  sellPrice: string;
  size: string[];
  slug: string;
};
