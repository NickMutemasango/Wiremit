"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiStar, FiBookOpen, FiZap, FiArrowRight } from "react-icons/fi";

const ads = [
  {
    id: 1,
    title: "Special Student Discount",
    description: "Get 10% off on textbooks with our partner bookstore",
    icon: <FiBookOpen className="text-[#248FA0]" size={24} />,
    bgColor: "bg-[#248FA0]/10",
  },
  {
    id: 2,
    title: "Wiremit Premium",
    description: "Upgrade to Premium for lower fees and priority support",
    icon: <FiStar className="text-[#2F3765]" size={20} />,
    bgColor: "bg-[#2F3765]/10",
  },
];

export default function AdsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: "slick-dots !bottom-4",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#2F3765]">Special Offers</h2>
        <div className="w-8 h-8 rounded-full bg-[#248FA0]/10 flex items-center justify-center">
          <FiZap className="text-[#248FA0]" size={16} />
        </div>
      </div>

      <Slider {...settings} className="rounded-xl overflow-hidden">
        {ads.map((ad) => (
          <div key={ad.id} className="px-1">
            <div className={`${ad.bgColor} p-6  rounded-xl  flex flex-col justify-center items-center text-center`}>
              <div className="mb-3 p-2 rounded-full bg-white shadow-sm">
                {ad.icon}
              </div>
              <h3 className="text-lg font-medium mb-2 text-[#2F3765]">{ad.title}</h3>
              <p className="text-[#2F3765]/80 mb-4">{ad.description}</p>
              <button className="flex items-center px-4 py-2 bg-[#248FA0] text-white rounded-lg hover:bg-[#1a6f7c] transition">
                Learn More
                <FiArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}