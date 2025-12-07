import React from "react";
import { FaStar, FaMapMarkerAlt, FaClock, FaUser } from "react-icons/fa";
import useAxiosSecure from "../../axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import FavouriteMeals from "../Dashboard/MyFavourite";
const FavouriteMealsCard = ({ meal = {} ,refetch, }) => {
  const {axiosSecure} = useAxiosSecure()
  // const {} = useQuery()
  
  const {
  userEmail,
  _id,
  mealName,
  mealImage,
  chefId,
  chefName,
  price,
  addedTime
  } = meal;
  const handleRemoveFromFavourites=(_id)=>{
    axiosSecure.delete(`/favourite-meals/${_id}`)
    .then(res=>{
        console.log("Deleted Response", res.data)
        refetch();
    })
}
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="relative h-44 bg-gray-100">
        {mealImage ? (
          <img
            src={mealImage}
            alt={mealName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}

        <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full flex items-center gap-2">
          <FaStar className="text-accent" />
          <span className="font-semibold">{ "-"}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-secondary mb-1">{mealName}</h3>
        <p className="text-sm text-gray-600 mb-2">
          By <span className="font-semibold">{chefName}</span> •{" "}
          { "--"} yrs
        </p>

        <div className="flex items-center justify-between mb-3">
          <p className="text-primary font-bold">৳{price ?? "--"}</p>
          <div className="text-xs text-gray-500 flex items-center gap-3">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-primary" />{" "}
              {"---"}
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="text-primary" />{" "}
              {"--"}m
            </span>
          </div>
        </div>
{/* 
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
          {Array.isArray(ingredients)
            ? ingredients.join(", ")
            : ingredients || "Ingredients not listed"}
        </p> */}

        <div className="flex gap-2">
          <button
            
            className="btn btn-primary flex-1"
            aria-label={`Order ${mealName}`}
          >
            Order Now
          </button>
          <button
            className="btn btn-ghost"
            onClick={() =>handleRemoveFromFavourites(_id)}
           
          >
            
            Remove 
          </button>
        </div>
      </div>
    </article>
  );
};

export default FavouriteMealsCard;
