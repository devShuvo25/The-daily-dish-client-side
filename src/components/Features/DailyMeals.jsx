import React, { use, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from "framer-motion";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../axios/useAxiosSecure';
import { FaClock, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import Loader from '../Loader/Loader';
import MealsCard from '../cards/MealsCard';


const DailyMeals = () => {
    const navigate = useNavigate();
    const {axiosSecure} = useAxiosSecure();
 
      const { data: meals = [], isLoading: mealsLoading } = useQuery({
    queryKey: ["daily-meals"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/meals");
        return res.data;
      } catch {
        return [];
      }
    },
  });
  console.log(meals);
    const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
    return (
              <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
              <span className="text-primary">Today's</span> Fresh Meals
            </h2>
            <p className="text-neutral">
              Handpicked dishes from local chefs — updated daily.
            </p>
          </motion.div>

          {mealsLoading ? (
            <Loader/>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {meals.slice(0,6)?.map((meal, i) => (
                <motion.div
                  key={meal._id || i}
                  initial="hidden"
                  whileInView="visible"
                  variants={itemVariants}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  onClick={''}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105"
                >
                  <MealsCard meal={meal}/>

                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/meals")}
              className="btn btn-primary"
            >
              View All Meals
            </button>
          </div>
        </div>
      </section>
    );
};

export default DailyMeals;