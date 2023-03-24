/** @format */

import { Images } from "../services/variants/variants";

export interface CartItem {
  title: string;
  uni: string;
  price: number;
  color: string;
  size: string;
  img: Images;
  slug: string;
  id: string;
  qty: number;
  desc?: string;
  sellPrice: number;
}
