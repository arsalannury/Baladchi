import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Introduction = () => {
  const ourServices: string[] = [
    "گوشت با کیفیت از کجا بخرم؟",
    "میخوام موتور بخرم یه همراه میخوام",
    "میخوام خونه بخرم یه کار بلد میخوام",
    "مشاوره مهاجرتی میخوام",
    "مشاوره کاری میخوام",
    "از کجا آجیل خوب بگیرم؟",
    "میخوام سیستم جمع کنم چه CPU مناسبمه؟",
  ];

  const [currentService, setCurrentService] = useState<string>(ourServices[0]);
  const [isDisplay, setIsDisplay] = useState<boolean>(true);

  useEffect(() => {
    let index = 0;

    const calculateTextAnimation = setInterval(() => {
      setIsDisplay(true);
      index++;
      if (index >= ourServices.length) index = 0;

      setCurrentService(ourServices[index]);
      setTimeout(() => {
        setIsDisplay(false);
      },1500);
    }, 2000);

    return () => clearInterval(calculateTextAnimation);
  }, []);

  return (
    <>
      <div className="">
        <p className="text-center text-3xl">
          چجور{" "}
          <span className="text-sky-600 border-b-4 border-b-sky-600">کمک</span>{" "}
          هایی میتونی اینجا بگیری؟
        </p>
        <AnimatePresence>
          {isDisplay ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box"
              className="flex items-center justify-around mt-10 text-xl opacity-50"
            >
              {currentService}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Introduction;
