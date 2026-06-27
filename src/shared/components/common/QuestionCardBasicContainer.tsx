import { useQuestions } from "@/services/questions/queries";
import { motion } from "motion/react";
import QuestionCardBasic from "./QuestionCardBasic";

const QuestionCardBasicContainer = () => {
  const { data } = useQuestions();
  return (
    <>
      {data?.map((question) => (
        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
          <QuestionCardBasic key={question.id} question={question} />
        </motion.div>
      ))}
    </>
  );
};

export default QuestionCardBasicContainer;
