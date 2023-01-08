/** @format */

export const InputData = (type?: "checkout" | "login" | "signup") => {
  let InputsData = [
    type === "signup" && {
      type: "name",
      name: "name",
      placeholder: "Name",
      label: "Name",
    },

    {
      type: "email",
      name: "email",
      placeholder: "Email",
      label: "Email Address",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      label: "Password",
    },
  ];
  return InputsData;
};
