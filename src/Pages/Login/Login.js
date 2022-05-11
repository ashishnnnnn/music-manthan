import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/ToastContext";
import { useState } from "react";

import { loginHandle } from "../../FirebaseCall/loginHandle";
// import { userLogin } from "../../ApiCalls";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false);
  let navigate = useNavigate();
  const { handleaddtoast } = useToast();
  const login = async (is_default) => {
    setIsloading(true);
    try {
      let val;
      if (is_default) {
        val = await loginHandle({
          email: "ashish@gmail.com",
          password: "ashishkumar",
          handleaddtoast,
        });
      } else {
        val = await loginHandle({ email, password, handleaddtoast });
      }

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
          Logging in...
        </div>
      ) : (
        <form
          className="bg-slate-900	max-w-md 	mx-auto mt-20 flex flex-col	justify-center	items-center gap-3 p-4"
          onSubmit={(e) => {
            e.preventDefault();
            login(false);
          }}
        >
          <div className="flex flex-col	justify-center	items-center">
            <span className="text-5xl	font-extrabold	">Music</span>
            <span className="text-2xl	font-semibold	">Manthan</span>
          </div>
          <div className="text-3xl	font-semibold	">Login To Music Manthan</div>
          <input
            className="bg-slate-700	w-10/12 h-14 rounded-xl	p-2.5	outline-transparent	"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="bg-slate-700	w-10/12	h-14 rounded-xl	p-2.5	outline-transparent	"
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="w-10/12	h-14  bg-slate-100 text-slate-900	rounded-xl text-2xl	font-semibold	"
          >
            Log In
          </button>
          <button
            className="w-10/12	h-12 border-2	border-slate-100	rounded-xl text-lg"
            onClick={(e) => {
              e.preventDefault();
              login(true);
            }}
          >
            Login With Test Credential
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="text-xl"
          >
            Don't Have An Account ? Sign Up..
          </button>
        </form>
      )}
    </>
  );
};
