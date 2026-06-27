import { useQuery } from "@tanstack/react-query";
import { getSingleTopic } from "./fetcher";

export const useSingleTopic = (id: string | undefined) =>
  useQuery({
    queryKey: ["get_signle_topic"],
    queryFn: () => getSingleTopic(id),
    retry: true,
 
  });
