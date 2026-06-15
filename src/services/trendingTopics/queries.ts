import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getTrendingTopics } from "./fetcher";

export const useTrendingTopics = () =>
  useSuspenseQuery({
    queryKey: ["get_trending_topics"],
    queryFn: getTrendingTopics,
    retry: true,
    staleTime: 10000,
    refetchOnWindowFocus: false
  });
