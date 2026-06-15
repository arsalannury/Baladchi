import { useTrendingTopics } from "@/services/trendingTopics/queries";
import { Link } from "react-router";

const TrendingTopics = () => {
    const { data } = useTrendingTopics();
  return (
    <>
      {data?.map((topic, index: number) => (
        <Link
          key={topic.name}
          to={`/topic/${topic.name}`}
          className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-slate-400">
              #{index + 1}
            </span>
            <span
              className={`px-2.5 py-1 rounded-lg text-sm font-medium ${topic.color}`}
            >
              {topic.name}
            </span>
          </div>
          <span className="text-xs text-slate-500">
            {topic.count.toLocaleString("fa-IR")} سوال
          </span>
        </Link>
      ))}
    </>
  );
};

export default TrendingTopics;
