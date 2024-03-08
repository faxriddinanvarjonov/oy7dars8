import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useRef } from "react";

function Login() {
  let Password = useRef("");
  let Email = useRef("");
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let card = {
      email: Email?.current?.value,
      password: Password?.current?.value,
    };
    console.log(card);
    console.log(JSON.parse(localStorage.getItem("token")).email);

    // localStorage.setItem("token", JSON.stringify(card));

    if (
      card.email == JSON.parse(localStorage.getItem("token")).email &&
      card.password == JSON.parse(localStorage.getItem("token")).password
    ) {
      localStorage.setItem("boolean", true);
      navigate("/");
    }
  }
  return (
    <section className="flex flex-col gap-4 sm:gap-20 items-center justify-center h-screen">
      <img width={32} height={25} src={logo} alt="logo" />
      <div className=" w-[90%] sm:w-[400px]  bg-[#161D2F] rounded-2xl p-8">
        <h2 className="text-4xl text-white">Login</h2>
        <form onSubmit={handleSubmit} className="mt-[40px] flex flex-col gap-6">
          <input
            ref={Email}
            className="bg-inherit text-white opacity-50 pb-4 border-b border-[#5A698F] w-full pl-4 outline-none"
            type="email"
            placeholder="Email address"
          />
          <input
            ref={Password}
            className="bg-inherit text-white opacity-50 pb-4 border-b border-[#5A698F] w-full pl-4 outline-none"
            type="password"
            placeholder="Password"
          />
          <button className="btn bg-[#FC4747] border-none text-white text-[15px] font-normal hover:text-black transition-all duration-300">
            Login to your account
          </button>
        </form>
        <p className="text-white flex justify-center mt-6 font-normal gap-2">
          Don’t have an account?
          <Link
            to={"/register"}
            className="text-[#FC4747] cursor-pointer hover:underline "
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
