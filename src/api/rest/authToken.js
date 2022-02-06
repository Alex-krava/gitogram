import env from "@/env.js";
import { makeRequest } from "../requests";

const url = "https://webdev-api.loftschool.com/github";

export const getAuthToken = async (code) => {
  const requestConfig = {
    url,
    method: "post",
    data: {
      code,
      clientId: env.clientId,
      clientSecret: env.clientSecret,
    },
  };

  return makeRequest(requestConfig);
};
