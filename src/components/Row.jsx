import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Movie from "./Movie";
const Row = ({ title, fetchUrl, rowId }) => {

  const { data: rowMovies } = useQuery([fetchUrl], async () => {
    return await Axios.get(fetchUrl).then((res) => {
      return res.data.results;
    });
  });

  const slideLeft = ()=>{
    let slider = document.getElementById("slider" + rowId)
    slider.scrollLeft =slider.scrollLeft-500 
  }
  const slideRight = ()=>{
    let slider = document.getElementById("slider" + rowId)
    slider.scrollLeft =slider.scrollLeft + 500 
  }


  return (
    <>
      <h2 className="px-4 py-2 font-bold md:text-xl text-white">{title}</h2>
      <div className="text-white p-4 flex relative items-center group">
        <MdChevronLeft
        onClick={slideLeft}
          className="bg-white rounded-full opacity-50 hover:opacity-100 z-10 hidden  group-hover:block cursor-pointer absolute text-black"
          size={40}
        />
        <div
          id={"slider" + rowId}
          className="overflow-x-scroll w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {rowMovies?.map((rowMovie, id) => {
            return (
                <Movie key={id} rowMovie={rowMovie}/>
            );
          })}
        </div>
        <MdChevronRight
        onClick={slideRight}
          className="bg-white rounded-full opacity-50 hover:opacity-100 z-10 hidden  group-hover:block cursor-pointer absolute text-black right-4"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
