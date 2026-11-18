"use client";

import { useQuery } from "@tanstack/react-query";
import { packages } from "@/data/packages";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export function usePackages(params = {}) {
  return useQuery({
    queryKey: ["packages", params],
    queryFn: async () => { await wait(200); return packages; },
  });
}

export function usePackage(slug) {
  return useQuery({
    queryKey: ["package", slug],
    queryFn: async () => { await wait(150); return packages.find((p) => p.slug === slug) ?? null; },
    enabled: !!slug,
  });
}
