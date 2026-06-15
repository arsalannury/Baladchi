import error from "@/assets/error1.png";

const ErrorCard = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={className}>
        <img src={error} alt="error" className="w-full h-full" />
      </div>
    </>
  );
};

export default ErrorCard;
