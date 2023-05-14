import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Authcontext";


const Navbar = () => {
  const navigate = useNavigate()
  
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  const {user, logOut } = UserAuth();
  return (
    <div className="flex justify-between align-middle text-center p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 font-bold text-4xl cursor-pointer uppercase">
          Netflix
        </h1>
      </Link>
      {!user?.email ? (
        <div>
          <Link to="/signIn">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signUp">
            <button className="text-white bg-red-600 px-4 py-2 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <Link to="/logout">
            <button
              onClick={handleLogOut}
              className="text-white bg-red-600 px-4 py-2 rounded"
            >
              Logout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
