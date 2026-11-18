"use client";

import { useQuery } from "@tanstack/react-query";
import { blogPosts, bookings, destinations, wishlist } from "@/data/content";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export function useDestinations() {
  return useQuery({ queryKey: ["destinations"], queryFn: async () => { await wait(120); return destinations; } });
}
export function useDestination(slug) {
  return useQuery({ queryKey: ["destination", slug], queryFn: async () => { await wait(120); return destinations.find((d) => d.slug === slug) ?? null; }, enabled: !!slug });
}
export function useBlogPosts() {
  return useQuery({ queryKey: ["blog"], queryFn: async () => { await wait(120); return blogPosts; } });
}
export function useBlogPost(slug) {
  return useQuery({ queryKey: ["blog", slug], queryFn: async () => { await wait(120); return blogPosts.find((p) => p.slug === slug) ?? null; }, enabled: !!slug });
}
export function useBookings() {
  return useQuery({ queryKey: ["bookings"], queryFn: async () => { await wait(120); return bookings; } });
}
export function useWishlist() {
  return useQuery({ queryKey: ["wishlist"], queryFn: async () => { await wait(120); return wishlist; } });
}
