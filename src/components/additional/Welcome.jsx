import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaHeart, FaLeaf } from 'react-icons/fa';

const Welcome = () => {
    return (
        <section className="py-24 bg-white font-inter overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
                        >
                            Welcome to LocalChefBazaar
                        </motion.span>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6"
                        >
                            Homemade Meals, <br/>
                            <span className="text-primary relative inline-block">
                                Delivered with Love
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7956 2.87181 20.6533 1.09613 63.8562 2.76611C87.6517 3.68595 142.176 1.70059 197.971 6.99997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                            </span>
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 mb-8 leading-relaxed"
                        >
                            LocalChefBazaar connects you with passionate home cooks in your neighborhood. 
                            Experience authentic flavors, healthy ingredients, and the warmth of a homemade dinner 
                            without the cooking. We believe good food brings communities together.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-8"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-green-50 rounded-full text-green-600">
                                    <FaLeaf className="text-xl" />
                                </div>
                                <span className="font-medium text-secondary">Fresh Ingredients</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-red-50 rounded-full text-red-500">
                                    <FaHeart className="text-xl" />
                                </div>
                                <span className="font-medium text-secondary">Made with Passion</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-orange-50 rounded-full text-orange-500">
                                    <FaUtensils className="text-xl" />
                                </div>
                                <span className="font-medium text-secondary">Authentic Taste</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative Visual */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <div className="bg-primary/5 rounded-2xl p-6 h-40 flex items-center justify-center">
                                     <div className="text-center">
                                        <span className="block text-4xl font-bold text-primary mb-1">500+</span>
                                        <span className="text-sm text-gray-600">Home Chefs</span>
                                     </div>
                                </div>
                                <div className="bg-secondary text-white rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                    <div className="text-center relative z-10">
                                        <span className="block text-4xl font-bold mb-1">10k+</span>
                                        <span className="text-sm text-gray-100">Meals Served</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-orange-500 text-white rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden">
                                     <div className="text-center relative z-10">
                                        <span className="block text-4xl font-bold mb-1">4.9</span>
                                        <span className="text-sm text-gray-100">User Rating</span>
                                    </div>
                                </div>
                                <div className="bg-gray-100 rounded-2xl p-6 h-40 flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="block text-4xl font-bold text-gray-800 mb-1">100%</span>
                                        <span className="text-sm text-gray-600">Satisfaction</span>
                                     </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Blob Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-secondary/10 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
