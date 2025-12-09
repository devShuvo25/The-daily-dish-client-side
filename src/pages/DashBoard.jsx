import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import useAxiosSecure from '../axios/useAxiosSecure';
import { MdOutlineDashboard, MdReviews } from "react-icons/md";
import { MdNoMeals } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";

const DashBoard = () => {

  const location = useLocation();
  const {axiosSecure} = useAxiosSecure();
 
  const Links = [
    { name: "My Meals", icon: <MdNoMeals />, path: "/dashboard/my-meals" },
    { name: "Favourite Meals", icon:<AiOutlineLike />, path: "/dashboard/my-favourites" },
    { name: "My Reviews", icon:<MdReviews />, path: "/dashboard/my-reviews" },
    { name: "Manage Orders", icon:<FiTruck />, path: "/dashboard/manage-orders" },
  ];



  return (
    <div className="flex min-h-screen bg-base-200">

      {/*Left Sidebar */}
      <aside className="w-55 bg-primary text-white p-5 hidden md:block">
        <h2 className="text-xl flex items-center gap-2 font-bold mb-6"><MdOutlineDashboard /> Dashboard</h2>

        <ul className="menu w-full">
          {Links.map((link) => (
            <li key={link.path}>
              
              <Link
                to={link.path}
                className={`block flex p-3 rounded-lg transition-all duration-200
                ${location.pathname === link.path
                    ? "bg-white text-primary font-semibold"
                    : "hover:bg-primary-focus"
                  }`}
              >
                <span>{link.icon}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* ✅ Right Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
};

export default DashBoard;
