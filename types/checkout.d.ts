/** @format */

export interface ICheckoutStepType {
  step: number;
  status: "active" | "pending" | "completed" | "edit";
  title: string;
  edit: boolean;
}
