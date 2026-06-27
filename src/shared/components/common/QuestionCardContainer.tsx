import { useQuestions } from "@/services/questions/queries";
import QuestionCard from "./QuestionCard";
import { motion } from "motion/react";

const QuestionCardContainer = () => {
  const { data } = useQuestions();
  return (
    <>
      {data?.map((question) => (
        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
          <QuestionCard key={question.id} question={question} />
        </motion.div>
      ))}
    </>
  );
};

export default QuestionCardContainer;
