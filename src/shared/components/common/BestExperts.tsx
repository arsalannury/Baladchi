import { useBestContributors } from "@/services/bestContributors/queries";
import { Link } from "react-router";

const BestExperts = () => {
  const { data } = useBestContributors();
  return (
    <>
      {data?.map((user, index) => (
        <Link
          key={user.username}
          to={`/user/${user.username}`}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <span className="text-sm font-bold text-purple-600">
            #{index + 1}
          </span>
          <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            {user.avatar}
          </div>
          <div className="flex-1">
            <div className="font-medium text-slate-900">{user.name}</div>
            <div className="text-xs text-slate-600">
              {user.reputation.toLocaleString("fa-IR")} امتیاز
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default BestExperts;
