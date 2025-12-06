import React from 'react';
import { motion } from "framer-motion";


const HIT = () => {
    return (
      <section className="py-16 px-4 ">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl text-secondary font-bold mb-3"
          >
            How it works
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-primary">Explore</h4>
              <p className="text-sm text-gray-600">
                Find dishes from talented local cooks, updated every day.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-primary">Order</h4>
              <p className="text-sm text-gray-600">
                Choose your meal, pay securely, and receive confirmations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-primary">Enjoy</h4>
              <p className="text-sm text-gray-600">
                Get your meal delivered and enjoy home-cooked goodness.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HIT;