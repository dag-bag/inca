/** @format */

export interface Main {
  data: MainDatum[];
  meta: Meta;
}

export interface MainDatum {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  userEmail: string;
  orderID: string;
  userId: null;
  address: Address;
  subTotal: number;
  total: number;
  deliveryCharges: null;
  status: string;
  paypalPaymentInfo: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  url_path_id: string;
  products: Product[];
  url_path: string;
}

export interface Address {
  __v: number;
  _id: string;
  city: string;
  email: string;
  phone: number;
  state: string;
  country: string;
  zipcode: number;
  address1: string;
  address2: string;
  lastName: string;
  createdAt: Date;
  firstName: string;
  updatedAt: Date;
  userEmail: string;
}

export interface Product {
  variant_id: number;
  product_id: number;
  title: string;
  uni: string;
  price: number;
  color: string;
  size: string;
  img: Img;
  slug: string;
  qty: number;
  category: string;
  sellPrice: number;
}

export interface Img {
  data: ImgDatum[];
}

export interface ImgDatum {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export enum EXT {
  Jpg = ".jpg",
}

export interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = "image",
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
