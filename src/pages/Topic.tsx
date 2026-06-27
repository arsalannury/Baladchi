import { Link, useParams } from "react-router";
import {
  TrendingUp,
  MessageSquare,
  Eye,
  ChevronUp,
  Star,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { useSingleTopic } from "@/services/topic/queries";

const Topic = () => {
  const { id } = useParams();
  const [following, setFollowing] = useState(false);
  const {data, isLoading, isError} = useSingleTopic(id);

  const questions = [
    {
      id: "1",
      title: "بهترین روش یادگیری برنامه‌نویسی برای مبتدی‌ها چیست؟",
      author: {
        username: "sara_mohammadi",
        name: "سارا محمدی",
        avatar: "SM",
        reputation: 2547,
      },
      votes: 124,
      answers: 18,
      views: 3421,
      timestamp: "۲ ساعت پیش",
    },
    {
      id: "2",
      title: "چطور می‌توانم کد تمیزتری بنویسم؟",
      author: {
        username: "reza_ahmadi",
        name: "رضا احمدی",
        avatar: "RA",
        reputation: 5421,
      },
      votes: 89,
      answers: 12,
      views: 2156,
      timestamp: "۵ ساعت پیش",
    },
    {
      id: "3",
      title: "تفاوت برنامه‌نویسی شی‌گرا و تابعی چیست؟",
      author: {
        username: "maryam_karimi",
        name: "مریم کریمی",
        avatar: "MK",
        reputation: 1823,
      },
      votes: 67,
      answers: 9,
      views: 1834,
      timestamp: "۱ روز پیش",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Main Content */}
      <div className="lg:col-span-8">
        {/* Topic Header */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-16 h-16 bg-linear-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    {data?.name}
                  </h1>
                  <p className="text-slate-600">
                    {data?.followers.toLocaleString("fa-IR")} دنبال‌کننده •{" "}
                    {data?.questions.toLocaleString("fa-IR")} سوال
                  </p>
                </div>
              </div>
              <p className="text-slate-700">{data?.description}</p>
            </div>
            <button
              onClick={() => setFollowing(!following)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                following
                  ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  : "bg-linear-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg"
              }`}
            >
              {following ? "دنبال می‌کنید" : "دنبال کردن"}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-xl font-bold text-purple-600">
                {data?.questions.toLocaleString("fa-IR")}
              </div>
              <div className="text-sm text-slate-600">سوال</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-xl font-bold text-blue-600">
                {data?.followers.toLocaleString("fa-IR")}
              </div>
              <div className="text-sm text-slate-600">دنبال‌کننده</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-xl font-bold text-green-600">
                {data?.experts.length}
              </div>
              <div className="text-sm text-slate-600">متخصص</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl border border-slate-200 p-1 flex gap-1 mb-6">
          <button className="flex-1 px-4 py-2.5 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium">
            جدیدترین
          </button>
          <button className="flex-1 px-4 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">
            پرطرفدار
          </button>
          <button className="flex-1 px-4 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">
            بدون پاسخ
          </button>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {questions.map((question) => (
            <div
              key={question.id}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg transition-shadow"
            >
              <Link to={`/question/${question.id}`} className="group">
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-3">
                  {question.title}
                </h2>
              </Link>

              <div className="flex items-center justify-between flex-wrap gap-3">
                <Link
                  to={`/user/${question.author.username}`}
                  className="flex items-center gap-2 group"
                >
                  <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {question.author.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900 group-hover:text-purple-600 transition-colors">
                      {question.author.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {question.author.reputation.toLocaleString("fa-IR")}{" "}
                      امتیاز
                    </div>
                  </div>
                </Link>

                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <ChevronUp className="w-4 h-4" />
                    <span>{question.votes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>{question.answers}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{question.views.toLocaleString("fa-IR")}</span>
                  </div>
                  <span className="hidden sm:block">{question.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <button className="w-full mt-6 px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-slate-50 transition-colors">
          نمایش بیشتر
        </button>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4 space-y-4">
        {/* Top Experts */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600" />
            متخصصان برتر
          </h3>
          <div className="space-y-3">
            {data?.experts.map((expert, index) => (
              <Link
                key={expert.username}
                to={`/user/${expert.username}`}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm font-bold text-purple-600">
                  #{index + 1}
                </span>
                <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {expert.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">
                    {expert.name}
                  </div>
                  <div className="text-xs text-slate-600">
                    {expert.reputation.toLocaleString("fa-IR")} امتیاز
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Related Topics */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="font-bold text-slate-900 mb-4">موضوعات مرتبط</h3>
          <div className="flex flex-wrap gap-2">
            {data?.relatedTopics.map((relatedTopic) => (
              <Link
                key={relatedTopic}
                to={`/topic/${relatedTopic}`}
                className="px-3 py-1.5 bg-slate-100 hover:bg-purple-100 hover:text-purple-700 text-slate-700 rounded-lg text-sm font-medium transition-colors"
              >
                {relatedTopic}
              </Link>
            ))}
          </div>
        </div>

        {/* Activity Stats */}
        <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-5">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            آمار فعالیت
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">سوالات امروز</span>
              <span className="font-bold text-purple-600">۲۳</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">پاسخ‌های امروز</span>
              <span className="font-bold text-blue-600">۸۹</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">کاربران فعال</span>
              <span className="font-bold text-green-600">۱۵۴</span>
            </div>
          </div>
        </div>

        {/* Ask Question CTA */}
        <div className="bg-linear-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white">
          <h3 className="font-bold text-lg mb-2">سوالی دارید؟</h3>
          <p className="text-purple-100 text-sm mb-4">
            سوال خود را در موضوع {data?.name} بپرسید
          </p>
          <Link
            to="/ask"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white text-purple-600 rounded-lg font-medium hover:shadow-lg transition-shadow"
          >
            <Plus className="w-5 h-5" />
            <span>پرسش جدید</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
