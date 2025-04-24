"use client";
import React, { useState } from "react";
import Image from "next/image";
import InformationBox from "./InformationBox";

interface SideBoxProps {
  title: string;
  image?: string;
  description?: string;
  descriptionModal?: string;
  imagesModal?: string[];
  link?: string;
}

const SideBox: React.FC<SideBoxProps> = ({
  title,
  image,
  description,
  descriptionModal,
  link,
  imagesModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="neomorphism h-1/3 p-4 relative hover:z-30 overflow-hidden">
      <div
        className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300"
        onClick={handleOpen}
      >
        {image && (
          <div className="relative w-full h-40">
            <Image
              src={image}
              alt="SideBox Image"
              fill
              className="absolute inset-0 z-10 object-cover rounded-[12px] hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        )}

        <h2 className="text-accent text-xl font-medium text-center pt-4">
          {title}
        </h2>
        <div className="overflow-y-auto pt-2">
          {description && <p>{description}</p>}
        </div>
      </div>
      {isOpen && (
      
            <InformationBox
              title={title}
              image={image}
              description={description}
              descriptionModal={descriptionModal}
              imagesModal={imagesModal}
              link={link}
            >
              <button
                className="absolute top-1 right-2 text-lightgray cursor-pointer"
                onClick={
                  handleClose
                }
              >
                ⓧ
              </button>
            </InformationBox>
     
      )}
    </div>
  );
};

export default SideBox;
