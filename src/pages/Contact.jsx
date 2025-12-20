import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri, 9am-6pm EST",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: "support@The Daily Dish.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Office",
      details: "123 Food Street, Culinary City, CC 12345",
      subtext: "Visit us in person",
    },
    {
      icon: FaClock,
      title: "Hours",
      details: "24/7 Service Available",
      subtext: "Customer support always ready",
    },
  ];

  return (
    <div ref={containerRef} className="bg-white font-inter overflow-hidden">
      <title>Contact Us</title>

      {/* HERO SECTION */}
      <div className="gsap-section bg-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have questions or feedback? We'd love to hear from you. Reach out to
            our team anytime!
          </motion.p>
        </div>
      </div>

      {/* CONTACT INFO CARDS */}
      <div className="gsap-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-primary/20 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <info.icon className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-800 font-semibold mb-1">
                  {info.details}
                </p>
                <p className="text-sm text-gray-600">{info.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT FORM & MAP SECTION */}
      <div className="gsap-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* CONTACT INFO & SOCIALS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Info Box */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you're a food lover interested in our services, a chef
                  wanting to join our community, or just have a general inquiry,
                  we're here to help! Our team reads every message and will get
                  back to you as soon as possible.
                </p>

                <div className="space-y-4 mb-8">
                  <p className="flex items-center gap-3 text-gray-600">
                    <FaClock className="text-primary text-lg flex-shrink-0" />
                    <span>Average response time: 24 hours</span>
                  </p>
                  <p className="flex items-center gap-3 text-gray-600">
                    <FaPhone className="text-primary text-lg flex-shrink-0" />
                    <span>Call us anytime for urgent matters</span>
                  </p>
                  <p className="flex items-center gap-3 text-gray-600">
                    <FaMapMarkerAlt className="text-primary text-lg flex-shrink-0" />
                    <span>Visit our office for in-person consultations</span>
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-2xl border border-primary/20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Follow Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with our latest meals, offers, and stories from
                  our chef community.
                </p>

                <div className="flex gap-4">
                  {[
                    { icon: FaFacebook, color: "hover:text-blue-600" },
                    { icon: FaTwitter, color: "hover:text-blue-400" },
                    { icon: FaInstagram, color: "hover:text-pink-600" },
                    { icon: FaLinkedin, color: "hover:text-blue-700" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 transition-colors ${social.color}`}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="gsap-section py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <p className="text-gray-600">
              Find answers to common questions about our service
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can I expect a response to my inquiry?",
                a: "We typically respond to all inquiries within 24 hours during business hours. For urgent matters, please call our support line.",
              },
              {
                q: "Can I order through the website without registering?",
                a: "You'll need to create an account to place orders, but the registration process is quick and simple. It helps us personalize your experience.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, digital wallets, and bank transfers. All transactions are secure and encrypted.",
              },
              {
                q: "How do I become a chef partner?",
                a: "Visit our website and fill out the chef registration form. Our team will review your application and contact you with next steps.",
              },
              {
                q: "Is there a delivery fee?",
                a: "Delivery fees vary based on your location and order size. You'll see the exact fee before checkout.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-lg border-l-4 border-primary"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
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
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience The Daily Dish?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join our community of food lovers and passionate home chefs today.
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
              Become a Chef
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
