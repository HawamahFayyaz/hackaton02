import React from "react";

const Essentials = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto">
      <div className="flex items-center w-[90%] md:h-[52px] text-black">
        <h1 className="font-bold text-xl">The Essentials</h1>
      </div>

      <div className="flex w-[90%] justify-center items-center flex-col md:flex-row">
        <div className="text-[#111111] gap-[40px] grid grid-cols-1 md:grid-cols-3 justify-center items-center">
          {/* Img */}
          <div className="relative">
            <img
              src="/Essential/IMG01.png"
              alt="Mens"
              width={440}
              height={540}
              className="md:w-full h-auto w-auto md:h-[440px]"
            />
            <button className="absolute top-[80%] left-[10%] py-2 px-4 rounded-full bg-white text-black hover:bg-[#F5F5F5] transition">
              Mens
            </button>
          </div>

          <div className="relative">
            <img
              src="/Essential/IMG02.png"
              alt="Womens"
              width={440}
              height={540}
              className="md:w-full h-auto w-auto md:h-[440px]"
            />
            <button className="absolute top-[80%] left-[10%] py-2 px-4 rounded-full bg-white text-black hover:bg-[#F5F5F5] transition">
              Womens
            </button>
          </div>

          <div className="relative">
            <img
              src="/Essential/IMG03.png"
              alt="Kids"
              width={440}
              height={540}
              className="md:w-full h-auto w-auto md:h-[440px]"
            />
            <button className="absolute top-[80%] left-[10%] py-2 px-4 rounded-full bg-white text-black hover:bg-[#F5F5F5] transition">
              Kids
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[140vh] md:h-auto lg:h-auto flex justify-center items-center flex-row">
        <div className="w-[80%] gap-[70px] md:gap-[100px] h-[90vh] md:h-[60vh] flex md:flex-row flex-col justify-center items-center">
          <div className="flex flex-col gap-4 justify-center md:items-start items-center">
            <div className="font-medium text-[15px]">Icons</div>
            <div>
              <ul className="flex md:justify-start justify-center items-center md:items-start gap-4 flex-col text-[#757575]">
                <li>Air Force 1</li>
                <li>Huarache</li>
                <li>Air Max 90</li>
                <li>Air Max 95</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center md:items-start items-center">
            <div className="font-medium text-[15px]">Shoes</div>
            <div>
              <ul className="flex md:justify-start justify-center items-center md:items-start gap-4 flex-col text-[#757575]">
                <li>All Shoes</li>
                <li>Custom Shoes</li>
                <li>Jordan Shoes</li>
                <li>Running Shoes</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center md:items-start items-center">
            <div>Clothing</div>
            <div>
              <ul className="flex md:justify-start justify-center items-center md:items-start gap-4 flex-col text-[#757575]">
                <li>All Clothing</li>
                <li>Modest Wear</li>
                <li>Hoodies & Pullovers</li>
                <li>Shirts & Tops</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center md:items-start items-center">
            <div className="font-medium text-[16px]">Kids</div>
            <div>
              <ul className="flex md:justify-start justify-center items-center md:items-start gap-4 flex-col text-[#757575]">
                <li>Infant & Toddler Shoes</li>
                <li>Kids Shoes</li>
                <li>Kids Jordan Shoes</li>
                <li>Kids Basketball Shoes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
