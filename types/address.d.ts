/** @format */

import { interpolateAs } from "next/dist/shared/lib/router/router";

export interface Address {
  _id?: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: number;
  country: string;
  lastName: string;
  firstName: string;
  phone: number;
  email: string;
}
