import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { db } from "../config/firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { UserAuth } from "../context/Authcontext";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const { user } = UserAuth();
  const [dbMovies, setDbMovies] = useState([]);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setDbMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const deleteShow = async(passedId)=>{
    try{
        const result = dbMovies?.filter((movie)=>movie !== passedId)
        await updateDoc(doc(db, "users", `${user?.email}`), {
            savedShows:result
        })
    }
    catch(error){
        console.log(error)
    }
    
  }

  return (
    <>
      <h2 className="p-4  font-bold md:text-xl text-white">My Shows</h2>
      <div className="text-white p-4 flex relative items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white rounded-full opacity-50 hover:opacity-100 z-10 hidden  group-hover:block cursor-pointer absolute text-black"
          size={40}
        />
        <div
          id={"slider"}
          className="overflow-x-scroll w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {dbMovies?.map((movie, id) => {
            return (
              <div
                className="text-white relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2"
                key={id}
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                  alt={movie.title}
                />
                <div className="hover:bg-black/80 w-full h-full opacity-0 absolute right-0 top-0 hover:opacity-100">
                  <p className="p-4 text-xs whitespace-normal md:text-sm text-center font-bold justify-center h-full w-full items-center flex">
                    {movie.title}
                  </p>
                  <p onClick={()=>{deleteShow(dbMovies?.id)}} className="absolute top-4 right-4 text-gray-300">
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
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

export default SavedShows;
