import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { requests } from "../requests";

const Hero = () => {
  const { data: heroMovies } = useQuery(["heroMovies"], async () => {
    return await Axios.get(requests.requestPopular).then((res) => {
      return res.data.results;
    });
  });
  const movie = heroMovies?.[Math.floor(Math.random() * 20)];

  return (
    <div className="text-white w-full h-[550px]">
      <div className="text-white w-full h-full">
        <div className="bg-gradient-to-r from-black w-full h-[550px] absolute top-0 right-0"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="text-white absolute top-36 p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold w-full">
            {movie?.title}
          </h1>
          <div className="my-4">
            <button className="bg-white text-black px-5 py-2">Play</button>
            <button className=" ml-4 border-gray-100 border px-5 py-2">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm mb-2">{movie?.release_date}</p>
          <p className="w-full sm:w-[90%] md:max-w-[50%] lg:w-[50%] xl:max-w-[35%] text-gray-200">
            {movie?.overview.length > 300
              ? movie?.overview.slice(0, 300) +
                "..."  
                // (<button>Read More</button>)
              : movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
