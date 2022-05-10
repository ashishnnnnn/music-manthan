import { useUserDataContext } from "../../Context/UserData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const QuizPage = () => {
  const { userData, setUserData } = useUserDataContext();
  const { index, questions, score } = userData;
  const [currOption, setCurrentOption] = useState(-1);
  let navigate = useNavigate();
  const backGroundColor = (currOption, idx, answer) => {
    if (currOption === -1) {
      return "bg-slate-700";
    } else if (currOption === idx) {
      if (currOption === answer) {
        return "bg-lime-500	";
      } else {
        return "bg-red-600";
      }
    } else if (currOption !== idx) {
      if (idx === answer) {
        return "bg-lime-500";
      } else {
        return "bg-slate-700";
      }
    }
  };

  const optionClickHandle = (idx) => {
    setCurrentOption(idx);
    setTimeout(() => {
      setUserData({ type: "CLICK_OPERATION", payload: idx });
      if (index === questions.length - 1) {
        navigate("/result");
      } else {
        setCurrentOption(-1);
      }
    }, 1000);
  };

  return (
    <div>
      <div className="text-3xl font-semibold mt-12 mb-1 text-center">
        {userData?.title}
      </div>

      <div className="md:max-w-2xl w-11/12	mx-auto  flex flex-col	justify-center	items-center gap-3 p-1">
        <div className="w-full flex mt-8 justify-between text-xl font-semibold">
          <p>
            <span className="text-gray-400">Question:</span> {index + 1} /{" "}
            {questions.length}
          </p>
          <p>
            <span className="text-gray-400">Score:</span> {score}
          </p>
        </div>
        <div className=" w-full mt-6 mb-4 text-xl font-semibold">
          {questions[index]?.ques_name}
        </div>
        {questions[index]?.options.map((ele, idx) => (
          <button
            key={idx}
            className={`text-center text-xl bg-slate-700	w-11/12 min-h-[4rem] rounded-xl	p-2.5	outline-transparent flex justify-center	items-center mb-2 ${backGroundColor(
              currOption,
              idx,
              questions[index]?.answer
            )}`}
            onClick={() => {
              optionClickHandle(idx);
            }}
          >
            {ele}
          </button>
        ))}
      </div>
    </div>
  );
};
