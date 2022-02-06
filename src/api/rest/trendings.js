import { makeRequest } from "../requests";

const contentHeader = "application/vnd.github.v3.html+json";

export const getTrendings = () => {
  const week = 7 * 24 * 60 * 60 * 1000;
  const createdDate = new Date(Date.now() - week);
  const month =
    createdDate.getMonth() > 10
      ? createdDate.getMonth() + 1
      : `0${createdDate.getMonth() + 1}`;
  const queryDate = `${createdDate.getFullYear()}-${month}-${createdDate.getDate()}`;

  const params = new URLSearchParams();
  params.append("order", "desc");
  params.append("sort", "stars");
  params.append("per_page", "10");
  params.append("q", `language:javascript created:>${queryDate}`);

  return makeRequest({
    url: `/search/repositories?${params}`,
  });
};

export const onFollow = async ({ owner, repo }) => {
  const requestConfig = {
    method: "put",
    url: `https://api.github.com/user/starred/${owner}/${repo}`,
    headers: {
      accept: contentHeader,
    },
  };

  return makeRequest(requestConfig);
};

export const onDeleteFollow = async ({ owner, repo }) => {
  const requestConfig = {
    method: "delete",
    url: `https://api.github.com/user/starred/${owner}/${repo}`,
    headers: {
      accept: contentHeader,
    },
  };

  return makeRequest(requestConfig);
};
