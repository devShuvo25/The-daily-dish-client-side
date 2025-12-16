import React from 'react';

const Loader = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 animate-pulse">
                        {/* Image Skeleton */}
                        <div className="h-44 bg-gray-200"></div>

                        {/* Content Skeleton */}
                        <div className="p-4 space-y-4">
                            {/* Title and Badge */}
                            <div className="flex justify-between items-center">
                                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-6 bg-gray-200 rounded w-12"></div>
                            </div>

                            {/* Author Row */}
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>

                            {/* Price and Details Row */}
                            <div className="flex justify-between items-center pt-2">
                                <div className="h-5 bg-gray-200 rounded w-20"></div>
                                <div className="flex gap-2">
                                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                                </div>
                            </div>

                            {/* Description Lines */}
                            <div className="space-y-2 pt-2">
                                <div className="h-3 bg-gray-200 rounded w-full"></div>
                                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3 pt-3">
                                <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
                                <div className="h-10 bg-gray-200 rounded-lg w-24"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Loader;