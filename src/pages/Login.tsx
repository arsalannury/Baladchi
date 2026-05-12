import { useActionState, startTransition } from "react";

const Login = () => {
  const [state, dispatchAction, isPending] = useActionState(login, null);

  function login(state): object {
    return {
      userName: "Arsalan",
      password: "123456",
    };
  }

  function handleClickOnLogin() {
    startTransition(() => {
      dispatchAction();
    });
  }

  const loginPageInputsClassName =
    "text-right outline-0 shadow-sm bg-white p-3 max-lg:w-full w-[50%] rounded-lg placeholder:text-gray-400 text-gray-400";

  return (
    <>
      <div className="h-screen grid grid-cols-2 bg-zinc-50">
        <div className="p-5 max-md:col-span-12">
          <div className="flex flex-col items-center justify-center h-full gap-5">
            <p className="font-bold text-3xl mb-5">
              به <span className="text-yellow-500">نیکی پز</span> خوش اومدی
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
              onClick={handleClickOnLogin}
              className="bg-yellow-500 text-white px-10 py-3 rounded-lg cursor-pointer max-lg:w-full w-[50%] "
            >
              {isPending ? "...در حال ورود" : "ورود"}
            </button>
          </div>
        </div>
        <div className="bg-yellow-500 rounded-lg p-5 m-10 max-md:hidden"></div>
      </div>
    </>
  );
};

export default Login;
