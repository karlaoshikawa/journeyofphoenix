import React, { useState } from "react";
import Image from "next/image";

interface InformationBoxProps {
  children?: React.ReactNode;
  title: string;
  image?: string;
  description?: string;
  descriptionModal?: string;
  imagesModal?: string[];
  link?: string;
}

const InformationBox: React.FC<InformationBoxProps> = ({
  children,
  title,
  image,
  description,
  descriptionModal,
  link,
  imagesModal,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-black/30 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md text-center relative 
                    shadow-[8px_8px_15px_rgba(0,0,0,0.2),-8px_-8px_15px_rgba(255,255,255,0.5)]"
      >
        {children}
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div>
          {image && (
            <div className="w-full h-auto mb-4 rounded-md overflow-hidden">
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="rounded-md"
              />
            </div>
          )}
          {description && <p className="text-gray-700 mb-4">{description}</p>}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mb-4 block"
            >
              Learn more
            </a>
          )}
          {descriptionModal && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">More Information</h3>
              <p className="text-gray-600">{descriptionModal}</p>
            </div>
          )}
          {imagesModal && imagesModal.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Gallery</h3>
              <div className="grid grid-cols-2 gap-2">
                {imagesModal.map((img, index) => (
                  <div
                    key={index}
                    className="w-full h-auto rounded-md overflow-hidden cursor-pointer"
                    onClick={() => handleImageClick(img)}
                  >
                    <Image
                      src={img}
                      alt={`Gallery image ${index + 1}`}
                      width={250}
                      height={150}
                      className="rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal para exibir a imagem ampliada */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="relative">
            <button
              className="absolute top-1 right-2 text-lightgray"
              onClick={handleCloseModal}
            >
              ⓧ
            </button>
            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InformationBox;
