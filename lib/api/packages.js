import apiClient from "../apiClient";

export const packagesApi = {
  list: (params) => apiClient.get("/packages", { params }),
  getById: (id) => apiClient.get(`/packages/${id}`),
};
