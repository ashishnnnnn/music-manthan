import { Category } from "../../Data/Category";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="text-3xl font-semibold mt-11 mb-6 text-center">
        Music Manthan
      </div>
      <div className="text-2xl font-medium mb-5 text-center">Category</div>
      <div className="w-11/12 md:w-9/12 mx-auto md:flex md:gap-8">
        {Category.map((ele) => (
          <div
            key={ele._id}
            className="bg-slate-700 rounded-3xl mb-8 flex-1 cursor-pointer hover:shadow-md hover:shadow-slate-300	"
            onClick={() => {
              navigate(`/in-category/${ele._id}`);
            }}
          >
            <img src={ele.src} className="w-full rounded-3xl	md:h-72" />
            <div className="w-11/12 mx-auto py-8">
              <p className="text-xl font-semibold mb-2">{ele.category_name}</p>
              <p className="text-gray-400">Take The Quiz To Test Yourself</p>
              <p className="text-gray-400">{ele.quizzes.length} Set of Quiz</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
