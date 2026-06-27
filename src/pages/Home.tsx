import { Link } from "react-router";
import { TrendingUp, Award, MessageSquare } from "lucide-react";
import Tab from "@/shared/components/ui/Tab";
import { Suspense, useState } from "react";
import TrendingTopics from "@/shared/components/common/TrendingTopics";
import BestContributers from "@/shared/components/common/BestContributers";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { ErrorBoundary } from "react-error-boundary";
import ErrorCard from "@/shared/components/ui/ErrorCard";
import QuestionCardContainer from "@/shared/components/common/QuestionCardContainer";
import CtaCard from "@/shared/components/common/CtaCard";

function Home() {
  const [activeTab, setActiveTab] = useState<"trending" | "recent" | "top">(
    "trending",
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Main Content */}
      <div className="lg:col-span-8 space-y-4">
        <Tab.Container>
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
            onClick={() => setActiveTab("top")}
            isActive={activeTab === "top"}
            icon={<Award className="w-4 h-4" />}
            title="برترین"
          />
        </Tab.Container>

        {/* Questions Feed */}
        <div className="space-y-4">
          <ErrorBoundary fallback={<ErrorCard />}>
            <Suspense
              fallback={
                <Skeleton lines={5} className="w-full h-40 space-y-8" />
              }
            >
              <QuestionCardContainer />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4 space-y-4">
        {/* Trending Topics */}

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            موضوعات پرطرفدار
          </h3>
          <div className="space-y-3">
            <ErrorBoundary fallback={<ErrorCard />}>
              <Suspense
                fallback={
                  <Skeleton lines={5} className="w-full h-11 space-y-8" />
                }
              >
                <TrendingTopics />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>

        {/* Top Contributors */}
        <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-5">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-600" />
            برترین مشارکت‌کنندگان
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
                <BestContributers />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>

        <CtaCard />
      </div>
    </div>
  );
}

export default Home;
