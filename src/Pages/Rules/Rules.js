import { useNavigate } from "react-router-dom";

export const Rules = () => {
  let navigate = useNavigate();
  const rulse = [
    "You Will Face 5 Question",
    "Right Answer Will Give You 5 Points",
    "Wrong answer will deduct 1 marks from your Aggregated Score",
  ];
  return (
    <div>
      <div className="text-3xl font-semibold mt-20 mb-6 text-center">Rules</div>
      <div className="max-w-md 	mx-auto mt-5 flex flex-col	justify-center	items-center gap-5">
        {rulse.map((ele, idx) => (
          <div
            key={idx}
            className="text-center text-xl bg-slate-700	w-11/12 min-h-[4rem] rounded-xl	p-2.5	outline-transparent flex justify-center	items-center"
          >
            {ele}
          </div>
        ))}
        <button
          type="submit"
          className="w-4/12	h-14  bg-slate-100 text-slate-900	rounded-xl text-2xl	font-semibold	"
          onClick={() => {
            navigate(`/quizPage`);
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};
