import { useSuspenseQuery } from "@tanstack/react-query";
import { getQuestions } from "./fetcher";

export const useQuestions = () =>
  useSuspenseQuery({
    queryKey: ["get_questions"],
    queryFn: getQuestions,
    retry: true,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });
