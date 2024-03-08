import logo from "../../assets/logo.svg";
import icon1 from "../../assets/icon1.svg";
import icon2Act from "../../assets/icon2Act.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import hero from "../../assets/hero.svg";
import { Link } from "react-router-dom";

function Movies() {
  return (
    <section className="p-8">
      <div className="bg-[#161D2F] w-24 h-screen rounded-2xl flex flex-col items-center justify-between py-8 max-h-[960px]">
        <div className="flex flex-col items-center gap-4 sm:gap-10">
          <Link to="/">
            <img
              className="sm:mb-[74px]"
              width={32}
              height={25}
              src={logo}
              alt="logo"
            />
          </Link>
          <Link to={"/"}>
            <img width={20} height={20} src={icon1} alt="logo" />
          </Link>
          <Link to={"/movies"}>
            <img width={20} height={20} src={icon2Act} alt="logo" />
          </Link>
          <Link to={"/series"}>
            <img width={20} height={20} src={icon3} alt="logo" />
          </Link>
          <Link to={"/bookmarked"}>
            <img width={20} height={20} src={icon4} alt="logo" />
          </Link>
        </div>
        <img className="" width={32} height={25} src={hero} alt="logo" />
      </div>
      <div></div>
    </section>
  );
}

export default Movies;
