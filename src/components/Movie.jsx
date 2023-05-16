import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/Authcontext";
import { db } from "../config/firebase";
import { arrayUnion, updateDoc, doc } from "firebase/firestore";

const Movie = ({ rowMovie }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

const MovieId = doc(db, "users", `${user?.email}` )

const saveShow =async()=>{
    if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(MovieId, {
            savedShows:arrayUnion({
                id:rowMovie.id,
                title:rowMovie.title,
                img:rowMovie.backdrop_path,
            })
        })
    }else{
        alert("Please Login to save a Show")
    }
}

  return (
    <div
      className="text-white relative w-[168px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2"
      key={rowMovie.id}
    >
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${rowMovie?.backdrop_path}`}
        alt={rowMovie.title}
      />
      <div className="hover:bg-black/80 w-full h-full opacity-0 absolute right-0 top-0 hover:opacity-100">
        <p className="p-4 text-xs whitespace-normal md:text-sm text-center font-bold justify-center h-full w-full items-center flex">
          {rowMovie?.title}
        </p>
        <p onClick={saveShow}
         className="">
          {like ? (
            <FaHeart className="text-gray-300 absolute top-8 left-8" />
          ) : (
            <FaRegHeart className="text-gray-300 absolute top-8 left-8" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
