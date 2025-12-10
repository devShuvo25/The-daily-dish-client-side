import React from "react";
import FullWidthSlider from "../components/banner/Banner";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Banner from "../components/banner/Banner";
import DailyMeals from "../components/Features/DailyMeals";
import CustommerReviews from "../components/Reviews/CustommerReviews";
import HIT from "../components/additional/HIT";
import Action from "../components/additional/Action";
import useUserData from "../hooks/userRole/useRole";

const Home = () => {
  const { role } = useUserData();
  console.log(role);

  return (
    <div className="bg-bg font-inter">
      {/* HERO / BANNER */}
      <Banner />
      {/* DYNAMIC DAILY MEALS */}
      <DailyMeals />

      {/* CUSTOMER REVIEWS */}
      <CustommerReviews />

      {/* EXTRA SECTION: HOW IT WORKS (ADDITIONAL) */}
      <HIT />

      <Action />
    </div>
  );
};

export default Home;
