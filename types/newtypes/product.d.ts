/** @format */

export interface Main {
  data: MainDatum[];
  meta: Meta;
}
export interface SingleProduct {
  data: MainDatum;
  meta: Meta;
}

export interface MainDatum {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  category: string;
  url_path_id: string;
  desc: null;
  Seo: SEO;
  Variant: Variant[];
  url_path: string;
}

export interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: null;
  metaRobots: null;
  structuredData: null;
  metaViewport: null;
  canonicalURL: null;
}

export interface Variant {
  id: number;
  color: string;
  size: string[];
  slug: string;
  price: number;
  sellPrice: number;
  availableQty: number;
  discount: null;
  name: null;
  url: URL;
  images: Images;
}

export interface Images {
  data: ImagesDatum[];
}

export interface ImagesDatum {
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

export interface URL {
  data: Data;
}

export interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  url_path_id: string;
  url_path: string;
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
