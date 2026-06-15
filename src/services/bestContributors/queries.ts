import { useSuspenseQuery } from "@tanstack/react-query";
import { getBestContributors } from "./fetcher";

export const useBestContributors = () =>
  useSuspenseQuery({
    queryKey: ["get_best_contributors"],
    queryFn: getBestContributors,
    retry: true,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
