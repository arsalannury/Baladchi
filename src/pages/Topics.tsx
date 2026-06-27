import { useAllTopics } from "@/services/topics/queries";
import ErrorCard from "@/shared/components/ui/ErrorCard";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Bookmark, Flag } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

const Topics = () => {
  const { data, isError, isLoading } = useAllTopics();

  return (
    <div className="space-y-14 py-10 grid ">
      {isLoading ? (
        <Skeleton className="w-full h-16 space-y-8" lines={20} />
      ) : isError ? (
        <ErrorCard />
      ) : (
        data?.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="flex flex-col py-2 px-5 rounded-lg
         hover:bg-slate-50 transition-colors group
         bg-white border border-slate-200 grid-cols-6 sm:grid-cols-12"
          >
            <Link to={`/topics/${topic.id}`}>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-400">
                    #{index + 1}
                  </span>

                  {topic.name}
                </div>

                <span className="text-xs text-slate-500">
                  {topic.count?.toLocaleString("fa-IR")} سوال
                </span>
              </div>

              <p className="font-light mt-5 text-slate-400">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              </p>
            </Link>
            <div className="flex items-center justify-end mt-3">
              <button className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>

              <button className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                <Flag className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default Topics;
