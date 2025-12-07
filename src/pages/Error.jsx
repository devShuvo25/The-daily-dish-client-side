import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
    return (
          <div className="min-h-screen bg-bg flex flex-col items-center justify-center  p-5">

      <motion.div
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-2xl p-10 max-w-md text-center"
      >

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="flex justify-center mb-4"
        >
          <FaExclamationTriangle className="text-primary text-6xl" />
        </motion.div>

        <h1 className="text-5xl font-bold text-primary mb-2">404</h1>
        <h2 className="text-xl font-semibold mb-3">Page Not Found</h2>

        <p className="text-sm text-gray-500 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary rounded-full px-8 text-white"
          >
            Back to Home
          </motion.button>
        </Link>

      </motion.div>

    </div>
    );
};

export default Error;