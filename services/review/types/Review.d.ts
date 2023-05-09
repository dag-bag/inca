export interface Main {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    rating:      number;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    url_path_id: string;
    text:        string;
    product_id:  number;
    recommended: boolean;
    verified:    boolean;
    title:       string;
    user:        User;
    url_path:    string;
}

export interface User {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    username:    string;
    email:       string;
    provider:    string;
    confirmed:   boolean;
    blocked:     boolean;
    createdAt:   Date;
    updatedAt:   Date;
    name:        string;
    image:       string;
    url_path_id: string;
    url_path:    string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
