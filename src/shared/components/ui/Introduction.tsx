import Box from "../common/Box";

const Introduction = () => {
  return (
    <>
      <div className="">
        <p className="text-right text-2xl">
          چجور{" "}
          <span className="text-sky-600 border-b-4 border-b-sky-600">کمک</span>{" "}
          هایی میتونی اینجا بگیری؟
        </p>
        <div className="flex items-center justify-around mt-10">
          <Box boxTitle="کمک کن" />
          <Box boxTitle="کمک کن" />
          <Box boxTitle="کمک کن" />
          <Box boxTitle="کمک کن" />
          <Box boxTitle="کمک کن" />
          <Box boxTitle="کمک کن" />
          <Box boxTitle="کمک کن" />
        </div>
      </div>
    </>
  );
};

export default Introduction;
