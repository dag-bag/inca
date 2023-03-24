/** @format */

export interface PARAM_Main {
  data: Datum[];
  meta: Meta;
}

export interface Params {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  slug: string;
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
