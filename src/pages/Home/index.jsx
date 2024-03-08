import logo from "../../assets/logo.svg";
import icon1Act from "../../assets/icon1Act.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import hero from "../../assets/hero.svg";
import searchbtn from "../../assets/search.svg";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./index.css";

function Home() {
  let [data, setData] = useState(null);
  let search = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://api.kinopoisk.dev/v1.4/movie/search?query=${search.current.value}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "0PZQNTC-2ARMDN8-MJ2DE6W-E4K37WK",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }
  console.log(data);
  return (
    <section className="p-8 flex gap-9 mx-auto">
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
            <img width={20} height={20} src={icon1Act} alt="logo" />
          </Link>
          <Link to={"/movies"}>
            <img width={20} height={20} src={icon2} alt="logo" />
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
      <div className="flex flex-col gap-8 marginContainer">
        <form onSubmit={handleSubmit} className="flex gap-6 mt-8">
          <button>
            <img src={searchbtn} alt="search btn" />
          </button>
          <input
            ref={search}
            className="bg-inherit outline-none opacity-50 text-2xl font-normal"
            type="text"
            placeholder="Search for movies"
          />
        </form>
        <h1 className="text-4xl text-white my-8">Movies</h1>
        <div className="flex gap-5 flex-wrap max-w-[1250px]">
          {data &&
            data.docs.map((data, index) => {
              return (
                data.backdrop.url && (
                  <div
                    className="sm:w-[280px] h-56 rounded-xl flex flex-col items-center"
                    key={index}
                  >
                    <img
                      className="rounded-xl sm:w-[280px] h-[174px]"
                      src={data.backdrop.url}
                      alt="poster"
                    />
                    <div className="flex gap-3">
                      <p className="text-white">{data.year}</p>
                      <p className="text-white text-xl">{data.name}</p>
                    </div>
                  </div>
                )
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Home;
