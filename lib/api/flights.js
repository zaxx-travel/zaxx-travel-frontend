import apiClient from "../apiClient";

export const flightsApi = {
  search: (params) => apiClient.get("/flights/search", { params }),
  getById: (id) => apiClient.get(`/flights/${id}`),
};
