import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLeaf,
  FaHeart,
  FaTrophy,
  FaGlobeAmericas,
  FaChartLine,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const About = () => {
    const navigate = useNavigate()
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef();

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".gsap-section");
      sections.forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-white font-inter overflow-hidden">
      <title>About Us</title>

      {/* HERO SECTION */}
      <div className="gsap-section bg-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            About <span className="text-primary">The Daily Dish</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Connecting communities through authentic, homemade meals crafted
            with passion and delivered with love.
          </motion.p>
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="gsap-section py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl border border-primary/20"
            >
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                <FaHeart className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize the way people experience food by connecting
                home chefs with food lovers who crave authenticity, quality, and
                community. We believe every meal tells a story and every chef
                has a passion to share.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-bg p-8 rounded-2xl border border-primary/20"
            >
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                <FaGlobeAmericas className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To build a global community where culinary creativity thrives,
                supporting local entrepreneurs and promoting sustainable,
                healthy eating habits. We envision a world where home-cooked
                meals are celebrated and accessible to everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="gsap-section py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Why Choose The Daily Dish?
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We stand out by prioritizing quality, authenticity, and community
              values
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaLeaf,
                title: "Fresh & Quality",
                desc: "Every meal is prepared fresh with premium, locally-sourced ingredients",
              },
              {
                icon: FaTrophy,
                title: "Expert Chefs",
                desc: "Our network includes passionate home chefs with years of culinary experience",
              },
              {
                icon: FaUsers,
                title: "Community First",
                desc: "We support local entrepreneurs and build strong neighborhood connections",
              },
              {
                icon: FaChartLine,
                title: "Transparent Pricing",
                desc: "No hidden fees, fair prices that support both chefs and customers",
              },
              {
                icon: FaHeart,
                title: "Customer Care",
                desc: "24/7 support team dedicated to your satisfaction and concerns",
              },
              {
                icon: FaGlobeAmericas,
                title: "Sustainable",
                desc: "Eco-friendly packaging and supporting sustainable food practices",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM & STATS */}
      <div className="gsap-section py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our Impact by Numbers
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Active Chefs" },
              { number: "25K+", label: "Happy Customers" },
              { number: "150K+", label: "Meals Delivered" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-bg rounded-xl border border-primary/20"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <div className="gsap-section py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The Daily Dish was born from a simple observation: people craved
              authentic, homemade meals, but traditional restaurants couldn't
              deliver that personal touch. Meanwhile, talented home cooks in
              neighborhoods had no platform to share their culinary passion.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              In 2020, our founders brought together a team passionate about
              food, community, and entrepreneurship. What started as a small
              pilot program in one neighborhood has grown into a thriving
              platform connecting hundreds of chefs with thousands of food
              lovers across multiple cities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, The Daily Dish is more than a delivery app—it's a movement
              that celebrates homemade food, supports local entrepreneurs, and
              brings communities closer together, one delicious meal at a time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="gsap-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our Core Values
            </motion.h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Authenticity",
                desc: "We celebrate genuine home-cooked meals and the stories behind them. No compromises on quality or taste.",
              },
              {
                title: "Community",
                desc: "Building strong local connections is at our heart. We support our chefs and create a positive impact in neighborhoods.",
              },
              {
                title: "Sustainability",
                desc: "We are committed to eco-friendly practices, fair pricing, and supporting sustainable food production.",
              },
              {
                title: "Excellence",
                desc: "We constantly strive to improve our service, expand our network, and enhance customer experience.",
              },
              {
                title: "Transparency",
                desc: "Honest communication, fair dealing, and clear pricing are fundamental to our operations.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-6 p-6 bg-white rounded-lg border-l-4 border-primary"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="gsap-section py-16 bg-primary text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl font-bold mb-6">Join Our Community Today</h2>
          <p className="text-lg mb-8 opacity-90">
            Discover authentic flavors, support local chefs, and be part of a
            movement that celebrates homemade goodness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Order Your First Meal
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={navigate('/dashboard/my-profile')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Become a Chef
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
