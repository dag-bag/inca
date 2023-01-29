/** @format */

export interface ICheckoutStepType {
  step: number;
  status: "active" | "pending" | "completed" | "edit";
  title: string;
  edit: boolean;
}
export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;

  address1: string;
  address2: string;
  city: string;
  country: string;
  state: string;
  zipcode: number;
  phone: number;
}
