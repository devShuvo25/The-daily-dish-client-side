import React from "react";
import {
  MdReviews,
  MdRestaurant,
  MdAddCircleOutline,
  MdFormatListBulleted,
  MdBarChart,
  MdFavorite,
  MdLocalShipping,
  MdAccountCircle,
  MdGroup,
  MdOutlinePendingActions,
  MdRateReview,
  MdReceiptLong,
} from "react-icons/md";
import { FaUser, FaUsers } from "react-icons/fa";
import useUserData from "../userRole/useRole";

const useLinks = () => {
  const { role } = useUserData();
  // const role = "Chef" // Testing
  let links = [];
  if (role === "Chef") {
    links = [
      {
        name: "My Profile",
        icon: <MdAccountCircle />,
        path: "/dashboard/my-profile",
      },
      { name: "My Meals", icon: <MdRestaurant />, path: "/dashboard/my-meals" },
      {
        name: "Create a Meals",
        icon: <MdAddCircleOutline />,
        path: "/dashboard/create-meal",
      },
      {
        name: "Order Request",
        icon: <MdFormatListBulleted />,
        path: "/dashboard/order-request",
      },
    ];
  } else if (role === "Admin") {
    links = [
      {
        name: "My Profile",
        icon: <MdAccountCircle />,
        path: "/dashboard/my-profile",
      },

      {
        name: "Manage User",
        icon: <MdGroup />,
        path: "/dashboard/manage-users",
      },
      {
        name: "Mange request",
        icon: <MdOutlinePendingActions />,
        path: "/dashboard/manage-request",
      },
      {
        name: "Statistics",
        icon: <MdBarChart />,
        path: "/dashboard/statistics",
      },
    ];
  } else {
    links = [
      { name: "My Profile", icon: <FaUser />, path: "/dashboard/my-profile" },
      {
        name: "Favourite Meals",
        icon: <MdFavorite />,
        path: "/dashboard/my-favourites",
      },
      {
        name: "My Reviews",
        icon: <MdRateReview />,
        path: "/dashboard/my-reviews",
      },
      {
        name: "My Orders",
        icon: <MdReceiptLong />,
        path: "/dashboard/my-orders",
      },
    ];
  }
  return { links };
};
export default useLinks;
