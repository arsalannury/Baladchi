import { Link } from "react-router";

const CtaCard = () => {
  return (
    <>
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
    </>
  );
};

export default CtaCard;
