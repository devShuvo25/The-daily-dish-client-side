import React, { useState, useRef, useEffect } from "react";
import useAuth from "../../hooks/authentication/useAuth";
import useAxiosSecure from "../../axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import userDemoImage from "../../assets/man.png";
import ReviewCard from "../../components/Reviews/ReviewCard";

const MyReviews = () => {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();

  const { data: MyReviews = [], refetch } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-reviews?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-primary">My Reviews</h1>
        <p className="text-gray-500">Here are the reviews you given </p>
      </div>
      {MyReviews.length === 0 && (
        <div className="text-center py-14 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-primary">No Reviews Yet</h2>
          <p className="text-gray-500 mt-2">
            Start adding some reviews to your favourite meals
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {MyReviews.map((review, idx) => (
          <ReviewCard
            key={idx}
            review={review}
            isMyReview={true}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
