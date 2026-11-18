"use client";

import { useQuery } from "@tanstack/react-query";
import { flights } from "@/data/flights";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export function useFlights(params = {}) {
  return useQuery({
    queryKey: ["flights", params],
    queryFn: async () => {
      await wait(200);
      return flights;
    },
  });
}

export function useFlight(id) {
  return useQuery({
    queryKey: ["flight", id],
    queryFn: async () => {
      await wait(150);
      return flights.find((f) => f.id === id) ?? null;
    },
    enabled: !!id,
  });
}
