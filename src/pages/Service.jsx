import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaTruck,
  FaShieldAlt,
  FaHeartbeat,
  FaCertificate,
  FaClock,
  FaUsers,
  FaLeaf,
  FaAward,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const Service = () => {
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

  const mainServices = [
    {
      icon: FaUtensils,
      title: "Custom Meal Ordering",
      description:
        "Browse and order from hundreds of authentic home-cooked meals prepared fresh by our chef community.",
      features: [
        "Real-time menu updates",
        "Customizable orders",
        "Dietary preferences",
      ],
    },
    {
      icon: FaTruck,
      title: "Fast & Reliable Delivery",
      description:
        "Get your meals delivered hot and fresh to your doorstep with our efficient delivery network.",
      features: [
        "Express delivery available",
        "Real-time tracking",
        "Insulated packaging",
      ],
    },
    {
      icon: FaHeartbeat,
      title: "Health & Quality Assured",
      description:
        "All meals meet our strict quality standards. No artificial preservatives or unhealthy additives.",
      features: [
        "Hygiene certified",
        "Fresh ingredients only",
        "Nutritional info provided",
      ],
    },
    {
      icon: FaShieldAlt,
      title: "Secure Transactions",
      description:
        "Your payments are protected with industry-leading encryption and security protocols.",
      features: [
        "Encrypted payments",
        "Secure data storage",
        "Money-back guarantee",
      ],
    },
  ];

  const chefServices = [
    {
      icon: FaCertificate,
      title: "Chef Verification",
      description:
        "All chefs undergo rigorous vetting and background checks to ensure quality and safety.",
    },
    {
      icon: FaAward,
      title: "Chef Support",
      description:
        "Dedicated support team to help chefs optimize their menus and manage their business.",
    },
    {
      icon: FaUsers,
      title: "Community Building",
      description:
        "Connect with other chefs, share recipes, and grow your customer base through our platform.",
    },
    {
      icon: FaClock,
      title: "Flexible Scheduling",
      description:
        "Create your own schedule and decide when to offer meals. Full control over your business.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Browse & Select",
      description: "Explore meals from verified chefs and select what you love",
    },
    {
      number: "2",
      title: "Customize",
      description: "Add special requests or modifications to your meal",
    },
    {
      number: "3",
      title: "Checkout",
      description: "Secure payment and order confirmation",
    },
    {
      number: "4",
      title: "Track",
      description: "Real-time delivery tracking to your location",
    },
    {
      number: "5",
      title: "Enjoy",
      description: "Receive hot, fresh meals prepared with care",
    },
    {
      number: "6",
      title: "Review",
      description: "Share your experience and help the community",
    },
  ];

  return (
    <div ref={containerRef} className="bg-bg font-inter overflow-hidden">
      <title>Our Services</title>

      {/* HERO SECTION */}
      <div className="gsap-section bg-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive solutions connecting food lovers with passionate home
            chefs. Experience authentic meals delivered right to your door.
          </motion.p>
        </div>
      </div>

      {/* MAIN SERVICES */}
      <div className="gsap-section py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              What We Offer
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From meal discovery to doorstep delivery, we handle everything to
              make your dining experience seamless
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-primary/20 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <service.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary text-sm flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FOR CHEFS */}
      <div className="gsap-section py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              For Aspiring Chefs
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Turn your passion for cooking into a thriving business with our
              comprehensive chef support system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {chefServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-primary text-lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6 text-lg">
              Ready to share your culinary passion with the world?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow inline-flex items-center gap-2"
            >
              Become a Chef Partner <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="gsap-section py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              How It Works
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to get delicious home-cooked meals delivered to you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl border border-primary/20 text-center h-full">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <FaArrowRight className="text-primary text-2xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PREMIUM FEATURES */}
      <div className="gsap-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Why Choose The Daily Dish
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaLeaf,
                title: "Fresh & Organic",
                description:
                  "All meals use fresh, locally-sourced, organic ingredients whenever possible",
              },
              {
                icon: FaClock,
                title: "Flexible Timing",
                description:
                  "Order meals for today, tomorrow, or schedule weekly deliveries on your terms",
              },
              {
                icon: FaUsers,
                title: "Support Local",
                description:
                  "90% of your payment goes directly to the chef, supporting local entrepreneurs",
              },
              {
                icon: FaHeartbeat,
                title: "Health First",
                description:
                  "Transparent nutritional information for every meal to support your health goals",
              },
              {
                icon: FaAward,
                title: "Quality Guaranteed",
                description:
                  "If you're not satisfied, get a full refund. Your happiness is our priority",
              },
              {
                icon: FaShieldAlt,
                title: "Safe & Secure",
                description:
                  "Industry-standard food safety protocols and secure payment processing",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="text-primary text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE AREAS */}
      <div className="gsap-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Serving Your Area
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're expanding rapidly. Check if we deliver to your location
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Currently Available In
              </h3>
              {[
                "New York City",
                "Los Angeles",
                "Chicago",
                "San Francisco",
                "Boston",
                "Seattle",
                "Austin",
                "Miami",
              ].map((city, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <FaCheckCircle className="text-primary text-lg flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl border border-primary/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                We're rapidly expanding to more cities. Enter your location to
                be notified when we arrive in your area.
              </p>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your zip code"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  Notify Me
                </motion.button>
              </div>

              <p className="text-xs text-gray-600 mt-4">
                We'll let you know as soon as we arrive in your area!
              </p>
            </motion.div>
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
          <h2 className="text-4xl font-bold mb-6">
            Experience The Daily Dish Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Discover authentic flavors and support local chefs in your
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Meals
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Partner With Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
