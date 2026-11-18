import apiClient from "../apiClient";

export const destinationsApi = {
  list: () => apiClient.get("/destinations"),
  getBySlug: (slug) => apiClient.get(`/destinations/${slug}`),
};

export const blogApi = {
  list: () => apiClient.get("/blog"),
  getBySlug: (slug) => apiClient.get(`/blog/${slug}`),
};
