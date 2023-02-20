import React from "react";
import { IconType } from "react-icons/lib";

interface CardProps {
  title: string;
  icon: IconType;
}

const HomeCard = ({ title, icon: Icon }: CardProps) => {
  return (
    <div className=" py-4 px-4 w flex-col rounded bg-primary shadow-lg flex items-center md:w-1/3 lg:mx-12 lg:px-6 lg:py-9 transform hover:scale-105 transition-all duration-300 ease-out ">
        <Icon className="w-20 h-20"/>
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* <p className="text-gray-700 text-base">{description}</p> */}
    </div>
  );
};

export default HomeCard;
