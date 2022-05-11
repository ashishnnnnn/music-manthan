import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/ToastContext";
import { signupHandle } from "../../FirebaseCall/signupHandle";
import { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false);
  let navigate = useNavigate();

  const { handleaddtoast } = useToast();
  const signup = async () => {
    setIsloading(true);
    try {
      let val = await signupHandle({ email, password, handleaddtoast });
      setIsloading(false);
      if (val) {
        navigate("/");
        handleaddtoast({ message: "Welcome", type: "alert-success" });
        setPassword("");
        setEmail("");
      }
    } catch (err) {
      handleaddtoast({ message: err.message, type: "alert-dang" });
      setIsloading(false);
    }
  };
  return (
    <>
      {isloading ? (
        <div className="bg-slate-900	max-w-md 	mx-auto mt-20 flex flex-col	justify-center	items-center gap-3 p-4 text-5xl text-center">
          Signing in...
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signup();
          }}
          className="bg-slate-900	max-w-md 	mx-auto mt-20 flex flex-col	justify-center	items-center gap-3 p-4"
        >
          <div className="flex flex-col	justify-center	items-center">
            <span className="text-5xl	font-extrabold	">Music</span>
            <span className="text-2xl	font-semibold	">Mohala</span>
          </div>
          <div className="text-3xl	font-semibold">Signup To Music Mohala</div>

          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-slate-700	w-10/12 h-14 rounded-xl	p-2.5	outline-transparent"
            placeholder="Email"
            value={email}
          />

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-slate-700	w-10/12 h-14 rounded-xl	p-2.5	outline-transparent"
            placeholder="Password"
            value={password}
            type="password"
          />

          <button
            type="submit"
            className="w-10/12	h-14  bg-slate-100 text-slate-900	rounded-xl text-2xl	font-semibold	"
          >
            Signup
          </button>

          <button
            onClick={() => {
              navigate("/login");
            }}
            className="w-10/12	h-12 border-2	border-slate-100	rounded-xl text-lg"
          >
            Already Have An Account..
          </button>
        </form>
      )}
    </>
  );
};
