/** @format */

export interface Main {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
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
