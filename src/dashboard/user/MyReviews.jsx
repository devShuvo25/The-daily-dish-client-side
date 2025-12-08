import React, { useState, useRef, useEffect } from 'react';
import useAuth from '../../hooks/authentication/useAuth';
import useAxiosSecure from '../../axios/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaStar } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import userDemoImage from "../../assets/man.png";

const MyReviews = () => {
    const { user } = useAuth();
    const { axiosSecure } = useAxiosSecure();

    const { data: MyReviews = [], refetch } = useQuery({
        queryKey: ["user", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-reviews?email=${user?.email}`);
            return res.data;
        }
    });

    // Dropdown state
    const [openIndex, setOpenIndex] = useState(null);
    const containerRefs = useRef([]);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            containerRefs.current.forEach((ref, index) => {
                if (ref && !ref.contains(e.target)) {
                    if (openIndex === index) setOpenIndex(null);
                }
            });
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openIndex]);
    const handleDeletReview = async (id) => {
        if(id){
            try{
          const res =  await  axiosSecure.delete(`/reviews/${id}`)
          console.log(res.data);
          refetch()
          setOpenIndex(null)
            }
            catch(error){
                console.log(error);
            }
        }

    }
    return (
        <div>
        <div className="mb-6">
        <h1 className="text-3xl font-bold text-primary">My Reviews</h1>
        <p className="text-gray-500">Here are the reviews you given </p>
      </div>
             {MyReviews.length === 0 && (
        <div className="text-center py-14 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-primary">No Reviews Yet</h2>
          <p className="text-gray-500 mt-2">Start adding some reviews to your favourite meals</p>
        </div>
      )}

            <div className='flex flex-col gap-3'>
                {
                    MyReviews.map((r, idx) => (
                        <div
                            key={r._id || idx}
                            className="w-full bg-white shadow-md rounded-xl p-4 flex gap-4 relative"
                            ref={(el) => (containerRefs.current[idx] = el)}
                        >
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                <img
                                    src={r.mealImage || userDemoImage}
                                    alt={r.reviewerName}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {/* Name + Time */}
                                <div className="flex justify-between items-start">
                                    <h3 className="font-semibold text-base sm:text-lg">{r.mealName || r.mealId}</h3>
                                    <span className="text-xs text-gray-500">{r.date.split('T')[0]}</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1 my-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            size={14}
                                            className={i < r.rating ? "text-yellow-400" : "text-gray-300"}
                                        />
                                    ))}
                                    <span className="text-sm font-medium ml-1">{r.rating}.0</span>
                                </div>

                                {/* Comment + Dropdown */}
                                <div className='flex justify-between items-center relative'>
                                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                                        {r.comment}
                                    </p>

                                    {user?.email === r.reviewerEmail && (
                                        <BsThreeDotsVertical
                                            className="cursor-pointer ml-2"
                                            onClick={() =>
                                                setOpenIndex(openIndex === idx ? null : idx)
                                            }
                                        />
                                    )}

                                    <AnimatePresence>
                                        {openIndex === idx && (
                                            <motion.ul
                                                key="dropdown"
                                                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                                transition={{ duration: 0.18, ease: "easeOut" }}
                                                className="absolute right-0 top-6 dropdown-content menu bg-base-100 rounded-lg w-40 p-2 shadow-lg border z-50"
                                            >
                                                <li><a>Edit Review</a></li>
                                                <li onClick={() => handleDeletReview(r._id)}><a className="text-red-500">Delete Review</a></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyReviews;
