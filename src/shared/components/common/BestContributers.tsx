import { Link } from "react-router";

interface IProps {
  username: string;
  avatar: string;
  name: string;
  reputation: number;
  index: number;
}

const BestContributers = ({
  username,
  avatar,
  name,
  reputation,
  index,
}: IProps) => {
  return (
    <>
      <Link
        key={username}
        to={`/user/${username}`}
        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/60 transition-colors"
      >
        <span className="text-sm font-bold text-purple-600">#{index + 1}</span>
        <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
          {avatar}
        </div>
        <div className="flex-1">
          <div className="font-medium text-slate-900">{name}</div>
          <div className="text-xs text-slate-600">
            {reputation.toLocaleString("fa-IR")} امتیاز
          </div>
        </div>
      </Link>
    </>
  );
};

export default BestContributers;
