import { Link, useParams } from "react-router";
import {
  TrendingUp,
  MessageSquare,
  Star,
  Plus,
  MessageSquareQuote,
} from "lucide-react";
import { Suspense, useState } from "react";
import { useSingleTopic } from "@/services/topic/queries";
import { useTopExperts } from "@/services/topExperts/queries";
import { ErrorBoundary } from "react-error-boundary";
import ErrorCard from "@/shared/components/ui/ErrorCard";
import { Skeleton } from "@/shared/components/ui/skeleton";
import BestExperts from "@/shared/components/common/BestExperts";
import Tab from "@/shared/components/ui/Tab";
import QuestionCardBasicContainer from "@/shared/components/common/QuestionCardBasicContainer";
import CtaCard from "@/shared/components/common/CtaCard";

const Topic = () => {
  const { id } = useParams();
  const [following, setFollowing] = useState(false);
  const { data } = useSingleTopic(id);
  const { data: expertsData } = useTopExperts();
  const [activeTab, setActiveTab] = useState<string>("trending");

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
                    {data?.followers?.toLocaleString("fa-IR")} دنبال‌کننده •{" "}
                    {data?.questions?.toLocaleString("fa-IR")} سوال
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
                {data?.questions?.toLocaleString("fa-IR")}
              </div>
              <div className="text-sm text-slate-600">سوال</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-xl font-bold text-blue-600">
                {data?.followers?.toLocaleString("fa-IR")}
              </div>
              <div className="text-sm text-slate-600">دنبال‌کننده</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-xl font-bold text-green-600">
                {expertsData?.length}
              </div>
              <div className="text-sm text-slate-600">متخصص</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <Tab.Container containerClassName="mb-6">
          <Tab
            tabId="trending"
            onClick={() => setActiveTab("trending")}
            isActive={activeTab === "trending"}
            icon={<TrendingUp className="w-4 h-4" />}
            title="پرطرفدار"
          />
          <Tab
            tabId="trending"
            onClick={() => setActiveTab("recent")}
            isActive={activeTab === "recent"}
            icon={<MessageSquare className="w-4 h-4" />}
            title="جدیدترین"
          />
          <Tab
            tabId="trending"
            onClick={() => setActiveTab("noAnswer")}
            isActive={activeTab === "noAnswer"}
            icon={<MessageSquareQuote className="w-4 h-4" />}
            title="بدون پاسخ"
          />
        </Tab.Container>

        {/* Questions List */}
        <div className="space-y-4">
          <ErrorBoundary fallback={<ErrorCard />}>
            <Suspense
              fallback={
                <Skeleton lines={5} className="w-full h-40 space-y-8" />
              }
            >
              <QuestionCardBasicContainer />
            </Suspense>
          </ErrorBoundary>
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
            <ErrorBoundary fallback={<ErrorCard />}>
              <Suspense
                fallback={
                  <Skeleton
                    lines={3}
                    className="w-full h-11 space-y-8 bg-white"
                  />
                }
              >
                <BestExperts />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>

        {/* Related Topics */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="font-bold text-slate-900 mb-4">موضوعات مرتبط</h3>
          <div className="flex flex-wrap gap-2">
            {data?.relatedTopics?.map((relatedTopic) => (
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

        <CtaCard />
      </div>
    </div>
  );
};

export default Topic;
