import logo from "../../assets/logo.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import Icon3Act from "../../assets/Icon3Act.svg";
import icon4 from "../../assets/icon4.svg";
import hero from "../../assets/hero.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Series() {
  let [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.kinopoisk.dev/v1.4/movie?type=movie`, {
      method: "GET",
      headers: {
        "X-API-KEY": "0PZQNTC-2ARMDN8-MJ2DE6W-E4K37WK",
      },
    })
      .then((res) => res.json())
      .then((data2) => {
        setData(data2);
      })
      .catch((err) => console.log(err));
  }, [data]);

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
            <img width={20} height={20} src={icon2} alt="logo" />
          </Link>
          <Link to={"/series"}>
            <img width={20} height={20} src={Icon3Act} alt="logo" />
          </Link>
          <Link to={"/bookmarked"}>
            <img width={20} height={20} src={icon4} alt="logo" />
          </Link>
        </div>
        <img width={32} height={25} src={hero} alt="logo" />
      </div>
      <div className="flex flex-col gap-8 marginContainer">
        <h1 className="text-4xl text-white my-8">Recomended for you</h1>
        <div className="flex gap-5 max-w-[1250px] flex-wrap rounded-box">
          {data &&
            data.docs.map((data, index) => {
              return (
                <div key={index}>
                  <div className="sm:w-[280px] h-[230px] rounded-xl flex flex-col items-center relative bg-white">
                    <img
                      src={data.backdrop.url}
                      className="rounded-xl sm:w-[470px] h-[230px] object-cover"
                    />
                  </div>
                  <div className="flex gap-3 items-center opacity-75 text-white bottom-7 ">
                    <p className="text-white">{data.year}</p>
                    <p>&#x2022;</p>
                    <div className="gap-2 flex">
                      <img src={icon2} alt="movie" />
                      <p className="text-white">{data.type}</p>
                    </div>
                    <p>&#x2022;</p>
                    <p className="text-white text-xl">{data.type}</p>
                  </div>
                  <h2 className="text-white text-2xl  bottom-0 font-bold">
                    {data.name}
                  </h2>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Series;
