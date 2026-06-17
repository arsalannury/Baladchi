import { useQuestions } from "@/services/questions/queries";
import PostCard from "./PostCard";
import { motion } from "motion/react";

const PostCardContainer = () => {
  const { data } = useQuestions();
  return (
    <>
      {data?.map((question) => (
        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
          <PostCard key={question.id} question={question} />
        </motion.div>
      ))}
    </>
  );
};

export default PostCardContainer;
