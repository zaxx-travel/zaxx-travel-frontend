import apiClient from "../apiClient";

export const busesApi = {
  search: (params) => apiClient.get("/buses/search", { params }),
  getById: (id) => apiClient.get(`/buses/${id}`),
  getSeats: (id) => apiClient.get(`/buses/${id}/seats`),
};
