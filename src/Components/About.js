import React from "react";
import heroImage from '/Users/saikrishna/Documents/Abhiram/Projects/e-comm/src/images/main2.jpg';// Replace with your hero image
import featureImage1 from '/Users/saikrishna/Documents/Abhiram/Projects/e-comm/src/images/mob3.jpg';
import featureImage2 from '/Users/saikrishna/Documents/Abhiram/Projects/e-comm/src/images/pod4.jpg';
import Navbar from "./Navbar";

const About = () => {
  return (
    <><Navbar/>
    <div className="bg-gray-100 mt-8 text-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={heroImage}
          alt="Electronics Showcase"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl fontsss font-bold mb-4">Welcome to ElectroShop</h1>
          <p className="text-lg">
            A React-based platform showcasing modern web development and
            cutting-edge electronics.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Who We Are */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold fontsss text-center mb-6">Who We Are</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            ElectroShop is a demonstration project built to highlight my React
            development skills. It serves as a realistic e-commerce platform for
            showcasing electronic products, crafted with a focus on clean and
            responsive UI.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl fontsss font-semibold text-center mb-6">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
              <img
                src={featureImage1}
                alt="Responsive Design"
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h3 className="text-xl font-medium mb-2">Responsive Design</h3>
              <p>
                Experience seamless browsing on any device with our fully
                responsive and adaptive design.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
              <img
                src={featureImage2}
                alt="Dynamic Functionality"
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h3 className="text-xl font-medium mb-2">Dynamic Functionality</h3>
              <p>
                Enjoy smooth and interactive navigation, powered by React's
                component-based architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center fontsss mb-6">Our Mission</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            ElectroShop is designed to blend modern design principles with
            state-of-the-art front-end technology, providing a realistic and
            engaging e-commerce experience.
          </p>
        </section>
      </div>
    </div></>
  );
};

export default About;
