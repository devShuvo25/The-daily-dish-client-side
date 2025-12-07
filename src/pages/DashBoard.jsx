import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import useAxiosSecure from '../axios/useAxiosSecure';

const DashBoard = () => {

  const location = useLocation();
  const {axiosSecure} = useAxiosSecure();
 
  const Links = [
    { name: "My Meals", path: "/dashboard/my-meals" },
    { name: "Favourite Meals", path: "/dashboard/my-favourites" },
    { name: "Manage Orders", path: "/dashboard/manage-orders" },
  ];



  return (
    <div className="flex min-h-screen bg-base-200">

      {/*Left Sidebar */}
      <aside className="w-55 bg-primary text-white p-5 hidden md:block">
        <h2 className="text-xl font-bold mb-6">🍽 Dashboard</h2>

        <ul className="menu w-full">
          {Links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block p-3 rounded-lg transition-all duration-200
                ${location.pathname === link.path
                    ? "bg-white text-primary font-semibold"
                    : "hover:bg-primary-focus"
                  }`}
              >
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
