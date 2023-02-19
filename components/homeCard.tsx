import React from "react";
import { IconType } from "react-icons/lib";

interface CardProps {
  title: string;
  icon: IconType;
}

const HomeCard: React.FC<CardProps> = ({ title, icon: Icon }) => {
  return (
    <div className="px-6 py-9 w-96 min-h-max mx-12 gap-1 flex-col rounded bg-primary overflow-hidden shadow-lg flex items-center p-3 transform hover:scale-105 transition-all duration-300 ease-out ">
        <Icon className="w-20 h-20"/>
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* <p className="text-gray-700 text-base">{description}</p> */}
    </div>
  );
};

export default HomeCard;
