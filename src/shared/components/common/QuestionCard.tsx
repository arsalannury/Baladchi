import {
  Bookmark,
  ChevronDown,
  ChevronUp,
  Eye,
  MessageSquare,
  MoreHorizontal,
  Share2,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { getBadgeColor } from "../../../lib/utils";

interface Question {
  id: string;
  title: string;
  content: string;
  author: {
    username: string;
    name: string;
    avatar: string;
    reputation: number;
    badge: string;
  };
  topics: string[];
  votes: number;
  answers: number;
  views: number;
  timestamp: string;
  trending?: boolean;
}

const QuestionCard = ({ question }: { question: Question }) => {
  const [votes, setVotes] = useState(question.votes);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);

  const handleVote = (type: "up" | "down") => {
    if (userVote === type) {
      setVotes(question.votes);
      setUserVote(null);
    } else {
      setVotes(question.votes + (type === "up" ? 1 : -1));
      setUserVote(type);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
        {/* Vote Section */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <button
            onClick={() => handleVote("up")}
            className={`p-1.5 rounded-lg transition-colors ${
              userVote === "up"
                ? "bg-purple-100 text-purple-600"
                : "text-slate-400 hover:bg-slate-100"
            }`}
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <span
            className={`font-bold ${votes > 0 ? "text-purple-600" : "text-slate-700"}`}
          >
            {votes}
          </span>
          <button
            onClick={() => handleVote("down")}
            className={`p-1.5 rounded-lg transition-colors ${
              userVote === "down"
                ? "bg-red-100 text-red-600"
                : "text-slate-400 hover:bg-slate-100"
            }`}
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <Link to={`/question/${question.id}`} className="group">
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2 leading-tight">
              {question.trending && (
                <TrendingUp className="inline-block w-4 h-4 text-orange-500 ml-1 mb-1" />
              )}
              {question.title}
            </h2>
          </Link>

          {/* Content Preview */}
          <p className="text-slate-600 text-sm mb-3 line-clamp-2">
            {question.content}
          </p>

          {/* Topics */}
          <div className="flex flex-wrap gap-2 mb-3">
            {question.topics.map((topic) => (
              <Link
                key={topic}
                to={`/topic/${topic}`}
                className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-xs font-medium transition-colors"
              >
                {topic}
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-4">
              <Link
                to={`/user/${question.author.username}`}
                className="flex items-center gap-2 group"
              >
                <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {question.author.avatar}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-900 group-hover:text-purple-600 transition-colors">
                    {question.author.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">
                      {question.author.reputation.toLocaleString("fa-IR")}{" "}
                      امتیاز
                    </span>
                    <span
                      className={`px-1.5 py-0.5 text-[10px] font-medium rounded border ${getBadgeColor(question.author.badge)}`}
                    >
                      {question.author.badge === "master"
                        ? "استاد"
                        : question.author.badge === "expert"
                          ? "متخصص"
                          : "مشارکت‌کننده"}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                <span>{question.answers.toLocaleString("fa-IR")}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{question.views.toLocaleString("fa-IR")}</span>
              </div>
              <span className="hidden sm:block">{question.timestamp}</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
