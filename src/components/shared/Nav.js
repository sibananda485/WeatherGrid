import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
  
export default function Nav() {
  return (
    <nav className="flex shadow-lg px-5 py-3 items-center justify-center sm:justify-between">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-10" />
        <p className="font-bold text-gray-600 tracking-wider text-xl">
          <Link to="/"> WeatherGrid </Link>
        </p>
      </div>
      <ul className="hidden sm:flex gap-3">
        <li className="cursor-pointer text-gray text-lg font-semibold text-blue-500 hover:text-blue-600">
          <Link to="/mumbai">Mumbai</Link>
        </li>
        <li className="cursor-pointer text-gray text-lg font-semibold text-blue-500 hover:text-blue-600">
          <Link to="/delhi">Delhi</Link>
        </li>
        <li className="cursor-pointer text-gray text-lg font-semibold text-blue-500 hover:text-blue-600">
          <Link to="/bangalore">Bangalore</Link>
        </li>
      </ul>
    </nav>
  );
}
