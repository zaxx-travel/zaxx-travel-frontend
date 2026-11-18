import apiClient from "../apiClient";

export const bookingsApi = {
  list: () => apiClient.get("/bookings"),
  create: (payload) => apiClient.post("/bookings", payload),
  getById: (id) => apiClient.get(`/bookings/${id}`),
};
