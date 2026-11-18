"use client";

import { useQuery } from "@tanstack/react-query";
import { buses, busSeats } from "@/data/buses";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export function useBuses(params = {}) {
  return useQuery({
    queryKey: ["buses", params],
    queryFn: async () => { await wait(200); return buses; },
  });
}

export function useBus(id) {
  return useQuery({
    queryKey: ["bus", id],
    queryFn: async () => { await wait(150); return buses.find((b) => b.id === id) ?? null; },
    enabled: !!id,
  });
}

export function useBusSeats(id) {
  return useQuery({
    queryKey: ["bus-seats", id],
    queryFn: async () => { await wait(120); return busSeats[id] ?? []; },
    enabled: !!id,
  });
}
