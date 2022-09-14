import { baseURL } from "./url";

export const FetchData = async (data) => {
  try {
    const response = await fetch(`${baseURL}${data.url}`);
    return response.json();
  } catch (error) {
    throw error;
  }
};
