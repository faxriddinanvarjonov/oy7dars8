import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Register() {
  let [Err, setErr] = useState("");
  let Password = useRef("");
  let RePassword = useRef("");
  let Email = useRef("");

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let card = {
      email: Email?.current?.value,
      password: Password?.current?.value,
    };

    if (Password.current.value == RePassword.current.value) {
      localStorage.setItem("token", JSON.stringify(card));
      navigate("/login");
    } else {
      setErr("Password must be same!");
    }
  }

  return (
    <section className="flex flex-col gap-4 sm:gap-20 items-center justify-center h-screen">
      <img width={32} height={25} src={logo} alt="logo" />
      <div className=" w-[90%] sm:w-[400px] bg-[#161D2F] rounded-2xl p-8">
        <h2 className="text-4xl text-white">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-[40px] flex flex-col gap-6">
          <div>
            <input
              ref={Email}
              className="bg-inherit text-white opacity-50 pb-4 border-b border-[#5A698F] w-full pl-4 outline-none"
              type="email"
              placeholder="Email address"
            />
          </div>
          <input
            ref={Password}
            className="bg-inherit text-white opacity-50 pb-4 border-b border-[#5A698F] w-full pl-4 outline-none"
            type="password"
            placeholder="Password"
          />
          <input
            ref={RePassword}
            className="bg-inherit text-white opacity-50 pb-4 border-b border-[#5A698F] w-full pl-4 outline-none"
            type="password"
            placeholder={`Repeat password                           ${Err}`}
          />
          <button className="btn bg-[#FC4747] border-none text-white text-[15px] font-normal hover:text-black transition-all duration-300">
            Create an account
          </button>
        </form>
        <p className="text-white flex justify-center mt-6 font-normal gap-2">
          Already have an account?
          <Link
            to={"/login"}
            className="text-[#FC4747] cursor-pointer hover:underline "
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
