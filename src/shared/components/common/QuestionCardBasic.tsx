import { Eye, MessageSquare, TrendingUp } from "lucide-react";
import { Link } from "react-router";

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

const QuestionCardBasic = ({ question }: { question: Question }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCardBasic;
