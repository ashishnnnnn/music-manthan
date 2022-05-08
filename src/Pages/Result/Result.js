import { useUserDataContext } from "../../Context/UserData";
import { useNavigate } from "react-router";

export const Result = () => {
  const { userData } = useUserDataContext();
  const { questions, score } = userData;
  let navigate = useNavigate();
  const backGroundColor = (optionMarked, idx, answer) => {
    if (optionMarked === idx) {
      if (optionMarked === answer) {
        return "bg-lime-500	";
      } else {
        return "bg-red-600";
      }
    } else if (optionMarked !== idx) {
      if (idx === answer) {
        return "bg-lime-500";
      } else {
        return "bg-slate-700";
      }
    }
  };
  return (
    <div className="md:max-w-2xl w-11/12	mx-auto  flex flex-col	justify-center	 gap-3 p-1">
      <div className="text-5xl font-semibold mt-12 mb-1 text-center">
        Result
      </div>
      <div className="text-2xl font-semibold mt-4 mb-1 text-center">
        Score: {score}
      </div>

      <button
        onClick={() => {
          navigate("/");
        }}
        className="w-3/12  md:w-2/12	h-14 text-xl bg-slate-100 text-slate-900	rounded-xl md:text-2xl	font-semibold	mx-auto	"
      >
        Home
      </button>

      {questions.map((question, idx) => (
        <div className="flex flex-col justify-center	items-center" key={idx}>
          <div className=" w-full mt-6 mb-4 text-xl font-semibold">
            Q:{idx + 1} {question.ques_name}
          </div>
          {question?.options.map((ele, idx) => (
            <button
              key={idx}
              className={`text-center text-xl bg-slate-700	w-11/12 min-h-[5rem] rounded-xl	p-2	outline-transparent flex justify-center	items-center mb-2 ${backGroundColor(
                question.option_marked,
                idx,
                question.answer
              )}`}
            >
              {ele}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
