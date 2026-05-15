const Login = () => {
  const loginPageInputsClassName =
    "text-right outline-0 shadow-sm bg-white p-3 max-lg:w-full w-[50%] rounded-lg placeholder:text-gray-300 text-gray-300";

  return (
    <>
      <div className="h-screen grid grid-cols-2 bg-zinc-50">
        <div className="p-5 max-md:col-span-12">
          <div className="flex flex-col items-center justify-center h-full gap-5">
            <p className="font-bold text-3xl mb-5">
              به <span className="text-sky-600">پینه</span> خوش اومدی
            </p>
            <input
              type="text"
              className={loginPageInputsClassName}
              placeholder="نام کاربری"
            />
            <input
              type="text"
              className={loginPageInputsClassName}
              placeholder="رمز عبور"
            />
            <button
              onClick={() => {}}
              className="bg-sky-600 text-white px-10 py-3 rounded-lg cursor-pointer max-lg:w-full w-[50%] "
            >
              ورود
            </button>
          </div>
        </div>
        <div className="bg-sky-600 rounded-lg p-5 m-10 max-md:hidden"></div>
      </div>
    </>
  );
};

export default Login;
