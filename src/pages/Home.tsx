import { Link } from "react-router";
import { TrendingUp, Award, MessageSquare } from "lucide-react";
import PostCard from "@/shared/components/common/PostCard";
import Tab from "@/shared/components/ui/Tab";
import { Suspense, useState } from "react";
import TrendingTopics from "@/shared/components/common/TrendingTopics";
import BestContributers from "@/shared/components/common/BestContributers";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { ErrorBoundary } from "react-error-boundary";
import ErrorCard from "@/shared/components/ui/ErrorCard";

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

const mockQuestions: Question[] = [
  {
    id: "1",
    title: "بهترین روش یادگیری برنامه‌نویسی برای مبتدی‌ها چیست؟",
    content:
      "من تازه می‌خواهم برنامه‌نویسی را شروع کنم و نمی‌دانم از کجا شروع کنم. آیا باید با پایتون شروع کنم یا جاوااسکریپت؟",
    author: {
      username: "sara_mohammadi",
      name: "سارا محمدی",
      avatar: "SM",
      reputation: 2547,
      badge: "expert",
    },
    topics: ["برنامه‌نویسی", "آموزش", "توسعه‌دهندگان"],
    votes: 124,
    answers: 18,
    views: 3421,
    timestamp: "۲ ساعت پیش",
    trending: true,
  },
  {
    id: "2",
    title: "چطور می‌توانم انگیزه خود را برای ادامه کار حفظ کنم؟",
    content:
      "همیشه با انگیزه شروع می‌کنم اما بعد از چند هفته انگیزه‌ام را از دست می‌دهم. چه کاری می‌توانم انجام دهم؟",
    author: {
      username: "ali_rezaei",
      name: "علی رضایی",
      avatar: "AR",
      reputation: 8932,
      badge: "master",
    },
    topics: ["زندگی", "روانشناسی", "بهره‌وری"],
    votes: 89,
    answers: 12,
    views: 2156,
    timestamp: "۵ ساعت پیش",
  },
  {
    id: "3",
    title: "تفاوت هوش مصنوعی و یادگیری ماشین چیست؟",
    content:
      "می‌خواهم در حوزه هوش مصنوعی کار کنم اما مفاهیم پایه را متوجه نمی‌شوم. لطفاً به زبان ساده توضیح دهید.",
    author: {
      username: "maryam_karimi",
      name: "مریم کریمی",
      avatar: "MK",
      reputation: 1823,
      badge: "contributor",
    },
    topics: ["هوش مصنوعی", "فناوری", "علم داده"],
    votes: 156,
    answers: 24,
    views: 5678,
    timestamp: "۱ روز پیش",
    trending: true,
  },
  {
    id: "4",
    title: "چگونه یک استارتاپ موفق راه‌اندازی کنیم؟",
    content:
      "یک ایده دارم اما نمی‌دانم از کجا شروع کنم. آیا اول باید محصول بسازم یا سرمایه‌گذار پیدا کنم؟",
    author: {
      username: "reza_ahmadi",
      name: "رضا احمدی",
      avatar: "RA",
      reputation: 5421,
      badge: "expert",
    },
    topics: ["کسب‌وکار", "استارتاپ", "کارآفرینی"],
    votes: 67,
    answers: 9,
    views: 1834,
    timestamp: "۳ ساعت پیش",
  },
  {
    id: "5",
    title: "بهترین کتاب‌های توسعه فردی که خوانده‌اید؟",
    content:
      "به دنبال کتاب‌هایی هستم که واقعاً تاثیرگذار باشند و زندگی را تغییر دهند. پیشنهادات شما چیست؟",
    author: {
      username: "fateme_hosseini",
      name: "فاطمه حسینی",
      avatar: "FH",
      reputation: 3245,
      badge: "expert",
    },
    topics: ["کتاب", "توسعه فردی", "یادگیری"],
    votes: 43,
    answers: 15,
    views: 987,
    timestamp: "۶ ساعت پیش",
  },
];

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
          {mockQuestions.map((question) => (
            <PostCard key={question.id} question={question} />
          ))}
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
                  <Skeleton lines={3} className="w-full h-11 space-y-8 bg-white" />
                }
              >
                <BestContributers />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-linear-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white">
          <h3 className="font-bold text-lg mb-2">سوال دارید؟</h3>
          <p className="text-purple-100 text-sm mb-4">
            از جامعه دانش‌یار بپرسید و پاسخ‌های کاربردی دریافت کنید.
          </p>
          <Link
            to="/ask"
            className="block w-full px-4 py-2.5 bg-white text-purple-600 rounded-lg font-medium text-center hover:shadow-lg transition-shadow"
          >
            پرسش جدید
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
