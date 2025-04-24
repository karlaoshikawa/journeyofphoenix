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
        className="bg-black/60 backdrop-blur-md rounded-lg p-8 max-w-md text-center relative 
                    shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.1)]"
      >
        {children}

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
          <h2 className="text-accent font-bold mb-4 text-2xl">{title}</h2>
          {description && <p className="text-secondary mb-4">{description}</p>}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link underline mb-4 block hover:text-accent"
            >
              Veja mais
            </a>
          )}
          {descriptionModal && (
            <div className="mt-4">
              <p className="text-secondary">{descriptionModal}</p>
            </div>
          )}
          {imagesModal && imagesModal.length > 0 && (
            <div className="mt-4">
              <h3 className="text-primary font-semibold mb-2">Gallery</h3>
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50" onClick={handleCloseModal}>
          <div className="relative">
            <button
              className="absolute top-1 right-2 text-white"
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
