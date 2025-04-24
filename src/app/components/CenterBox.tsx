import React from "react";
import Image from "next/image";

const CenterBox: React.FC = () => {
  return (
    <div className="relative min-w-[85vw] min-h-[75vh] max-w-[1250px] max-h-[1000px] flex items-center justify-center ">
      <div className="absolute bottom-0">
        <Image
          src="/firecircle.png"
          alt="Circulo de fogo"
          width={1100}
          height={1000}
          className="animate-grow object-contain "
        />
      </div>
      <Image
        src="/heroina.png"
        alt="Heroina"
        width={1250}
        height={1000}
        className="absolute bottom-0 animate-grow-delay object-contain"
      />
    </div>
  );
};

export default CenterBox;
