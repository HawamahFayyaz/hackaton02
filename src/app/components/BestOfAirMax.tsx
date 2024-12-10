import React from "react";
import Image from "next/image";
import { prOductDeatils } from "../productDetails/[id]";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const BestOfAirMax = () => {
  return (
    <div>
      <div className="w-full min-h-screen flex justify-center items-center flex-col">
        <div className="flex justify-between items-center w-[90%] md:h-[52px] text-black">
          <div>
            <h1 className="font-bold text-xl">Best of Air Max</h1>
          </div>
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-[15px]">Shop</h1>
            <div className="flex gap-2">
              <div className="bg-[#E5E5E5] rounded-full p-1">
                <ChevronLeft className="text-[#CCCCCC]" />
              </div>
              <Link href="/allProduct">
                <div className="bg-[#E5E5E5] rounded-full p-1">
                  <ChevronRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 mt-5 md:grid-cols-3 gap-3">
          {prOductDeatils.slice(0, 3).map((item) => {
            return (
              <div key={item.id} className="pb-4 m-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={441}
                  height={441}
                  className="w-full h-auto sm:w-[100%] md:w-[441px] md:h-[441px] cursor-pointer"
                />
                <div className="px-1 pt-1">
                  <div className="flex justify-between items-center">
                    <h1 className="text-black font-medium text-[15px]">
                      {item.title}
                    </h1>
                    <p>{item.price}</p>
                  </div>
                  <p className="text-[15px] text-[#757575] pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestOfAirMax;
