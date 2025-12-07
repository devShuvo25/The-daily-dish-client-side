import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/authentication/useAuth";
import useAxiosSecure from "../../axios/useAxiosSecure";
import MealsCard from "../cards/MealsCard";
import FavouriteMealsCard from "../cards/favouriteMealsCard";

const FavouriteMeals = () => {
const {user} = useAuth();
const {axiosSecure} = useAxiosSecure();
  const {data: favouriteMeals =[],refetch,isLoading} = useQuery({
    queryKey: ['favourite-meals',user?.email],
    queryFn: async () => {
        const res  = await axiosSecure.get(`/favourite-meals?userEmail=${user?.email}`);
        return res.data;
    }
  })
  {isLoading && <p>Loading...</p>  }
  return (
    <div>

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Favourite Meals</h1>
        <p className="text-gray-500">Here are the meals you liked most</p>
      </div>

      {/* Empty State */}
      {favouriteMeals.length === 0 && (
        <div className="text-center py-14 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">No Favourite Meals Yet</h2>
          <p className="text-gray-500 mt-2">Start adding some meals to your favourites 🍽</p>
        </div>
      )}

      {/* Meal Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {favouriteMeals.map((meal) => (
          <FavouriteMealsCard key={meal._id} meal={meal} refetch={refetch} />
        ))}
      </div>

    </div>
  );
};

export default FavouriteMeals;
