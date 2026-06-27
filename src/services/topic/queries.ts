import { useQuery } from "@tanstack/react-query";
import { getSingleTopic } from "./fetcher";

export const useSingleTopic = (id: string | undefined) =>
  useQuery({
    queryKey: ["get_all_topics"],
    queryFn: () => getSingleTopic(id),
    retry: true,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
