/** @format */

// import { notifications } from "@mantine/notifications";
import { type StrapiRegistrationData } from "strapi-sdk-js";
import strapi from "../../utils/strapi";

interface type extends StrapiRegistrationData {
  username: string;
  email: string;
  password: string;
  name: string;
}
export const createUser = async (userData: type) => {
  const { username, password, name, email } = userData;
  const { user, jwt } = await strapi.register({
    email: email,
    username: username,
    name: name,
    password: password,
  } as any);

  return { user, password };
};
