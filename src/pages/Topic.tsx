import { useSingleTopic } from "@/services/topic/queries";
import { useParams } from "react-router";

const Topic = () => {
  const {id} = useParams();
  const { data, isError, isLoading } = useSingleTopic(id);
 
  return <></>;
};

export default Topic;
