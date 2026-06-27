import { useQuery } from "@tanstack/react-query";
import { getTopExperts } from "./fetcher";

export const useTopExperts = () =>
  useQuery({
    queryKey: ["get_top_experts"],
    queryFn:  getTopExperts,
    retry: true,
  });
