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
  color: string;
  size: string[];
  price: number;
  sellPrice: number;
  discount: null;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  url_path_id: string;
  slug: string;
  availableQty: number;
  shipping_price: number;
  images: Images;
  url_path: string;
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
  provider: Provider;
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

export enum Provider {
  Cloudinary = "cloudinary",
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
