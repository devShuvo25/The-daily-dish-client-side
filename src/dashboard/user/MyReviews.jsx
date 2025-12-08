import React from 'react';
import useAuth from '../../hooks/authentication/useAuth';
import useAxiosSecure from '../../axios/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { FaStar } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";

const MyReviews = () => {
    const {user} = useAuth();
    const {axiosSecure} = useAxiosSecure();
    const {data:MyReviews =[]} = useQuery({
        queryKey:["user",user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-reviews?email=${user?.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <div>My reviews: {MyReviews.length}</div>
            <div className='flex flex-col gap-3'>
                {
                MyReviews.map(r => {
                    return <div className="w-full  bg-white shadow-md rounded-xl p-4 flex gap-4">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <img
                          src={r.mealImage || r.userDemoImage}
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
                
                        {/* Comment */}
                        <div className='flex justify-between items-center'>
                            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                          {r.comment}
                        </p>
                        <span><BsThreeDotsVertical /></span>
                        </div>
                      </div>
                    </div>
                })
            }
            </div>
        </div>
    );
};

export default MyReviews;