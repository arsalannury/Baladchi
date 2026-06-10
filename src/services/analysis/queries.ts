import { useQuery } from "@tanstack/react-query";
import { getTrendingTopics } from "./fetcher";

export const useTrendingTopics = () =>
  useQuery({
    queryKey: ["get_trending_topics"],
    queryFn: getTrendingTopics,
    retry: true,
    staleTime: 10000,
    refetchOnWindowFocus: false
  });
