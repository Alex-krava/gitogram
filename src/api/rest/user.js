import { makeRequest } from "../requests";

const url = "https://api.github.com/user";

export const getUser = async () => {
  const requestConfig = {
    url,
  };

  return makeRequest(requestConfig);
};

export const getUserLikes = async () => {
  const requestConfig = {
    url: "https://api.github.com/user/starred",
  };

  return makeRequest(requestConfig);
};

export const getIssues = async ({ owner, repo }) => {
  const requestConfig = {
    url: `https://api.github.com/repos/${owner}/${repo}/issues`,
  };

  return makeRequest(requestConfig);
};

export const getUserRepos = async ({ ownerLogin }) => {
  const requestConfig = {
    url: `https://api.github.com/users/${ownerLogin}/repos`,
  };

  return makeRequest(requestConfig);
};

export const getUserFollowers = async ({ ownerLogin }) => {
  const requestConfig = {
    url: `https://api.github.com/users/${ownerLogin}/followers`,
  };

  return makeRequest(requestConfig);
};
