import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero hero-img -mt-36 bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className=" text-white">
          <h1 className="md:text-5xl text-xl font-bold">
            Discover Comfort & Style with Our Premium Chairs
          </h1>
          <p className="py-6">
            Upgrade your space with ergonomically designed, stylish chairs that
            offer both comfort and elegance. Whether you're working from home,
            relaxing, or adding a statement piece to your living room, we have a
            perfect chair for every occasion. Shop now to explore our wide range
            of office chairs, recliners, dining chairs, and more, crafted with
            quality materials to ensure long-lasting durability and ultimate
            comfort.
          </p>
          <Link to="/products">
            <button className="btn bg-[#1E99F5] text-white hover:text-[#1E99F5]">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
