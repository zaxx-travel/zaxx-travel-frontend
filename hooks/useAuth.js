"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAuthActions() {
  const qc = useQueryClient();
  const login = useMutation({ mutationFn: async (payload) => payload, onSuccess: () => qc.invalidateQueries({ queryKey: ["me"] }) });
  const signup = useMutation({ mutationFn: async (payload) => payload });
  return { login, signup };
}
