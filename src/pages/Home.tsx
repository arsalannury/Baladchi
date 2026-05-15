import Banner from "../shared/components/ui/Banner";
import Header from "../shared/components/ui/Header";
import { useActionState, startTransition } from "react";
import Introduction from "../shared/components/ui/Introduction";

const Home = () => {

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

  return (
    <>
      <Header />
      <Banner />
      <div className="mx-28 mt-20">
        <Introduction />
      </div>
    </>
  );
};

export default Home;
