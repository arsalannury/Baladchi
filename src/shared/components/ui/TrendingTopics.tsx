import { Link } from "react-router";

interface IProps {
  name: string;
  count: number;
  color: string;
  index: number;
}

const TrendingTopics = ({ name, color, count, index }: IProps) => {
  return (
    <>
      <Link
        key={name}
        to={`/topic/${name}`}
        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-slate-400">#{index + 1}</span>
          <span
            className={`px-2.5 py-1 rounded-lg text-sm font-medium ${color}`}
          >
            {name}
          </span>
        </div>
        <span className="text-xs text-slate-500">
          {count.toLocaleString("fa-IR")} سوال
        </span>
      </Link>
    </>
  );
};

export default TrendingTopics;
