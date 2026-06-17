import { useQuery } from "@tanstack/react-query";
import { getAllTopics } from "./fetcher";

export const useAllTopics = () =>
  useQuery({
    queryKey: ["get_all_topics"],
    queryFn: getAllTopics,
    retry: true,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
