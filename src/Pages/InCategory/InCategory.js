import { Category } from "../../Data/Category";
import { useParams, useNavigate } from "react-router-dom";
import { useUserDataContext } from "../../Context/UserData";

export const InCategory = () => {
  const { category_id } = useParams();
  const { setUserData } = useUserDataContext();
  const curr_quiz_obj = Category.find(
    (category) => category._id === category_id
  );
  let navigate = useNavigate();
  return (
    <div>
      <div className="text-3xl font-semibold mt-11 mb-6 text-center">
        Music Manthan
      </div>
      <div className="text-2xl font-medium mb-5 text-center">
        {curr_quiz_obj.category_name}
      </div>
      <div className="w-11/12 md:w-9/12 mx-auto md:flex md:gap-8">
        {curr_quiz_obj.quizzes.map((ele) => (
          <div
            key={ele._id}
            className="bg-slate-700 rounded-3xl mb-8 flex-1 cursor-pointer hover:shadow-md  hover:shadow-slate-300	"
            onClick={() => {
              setUserData({ type: "RESET" });
              setUserData({
                type: "SET_QUESTIONS",
                payload: {
                  title: curr_quiz_obj.category_name,
                  questions: ele.questions,
                },
              });
              navigate(`/rules`);
            }}
          >
            <img src={ele.src} className="w-full rounded-3xl	md:h-72" />
            <div className="w-11/12 mx-auto py-8">
              <p className="text-xl font-semibold mb-2">{ele.name}</p>
              <p className="text-gray-400">Take The Quiz To Test Yourself</p>
              <p className="text-gray-400">
                {ele.questions.length} Set of Questions
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
