import React from "react";
import Image from "next/image";
import Link from "next/link";

const DontMiss = () => {
  return (
    <div>
      <div className="w-full h-auto md:h-auto  flex justify-center items-center flex-col">
        <div className="flex justify-between  items-center w-[90%] md:h-[52px] text-black ">
          <h1 className="font-bold text-xl">Don't Miss</h1>
        </div>

        <div className="w-full  flex justify-center items-center flex-row">
          <div className="text-[#111111] h-auto gap-[40px] flex flex-col justify-center items-center ">
            {/* Img */}

            <div className="pt-4">
              <img src="/DontMiss/IMG01.png" alt="dont miss" />
            </div>

            <div className=" text-[#111111] w-[90%] gap-[8px] md:gap-[10px]  h-[270px] md:h-[270px] flex flex-col justify-center items-center ">
              <div>
                <h1 className="md:text-[56px] text-[30px] font-medium ">
                  FLIGHT ESSENTIALS
                </h1>
              </div>

              <div className="flex justify-center text-center items-center md:flex flex-col md:flex-row md:text-[16px] text-[13px] mt-2 gap-1">
                <p>Your built-to-last, all-week wears—but with style only</p>
                <p>Jordan Brand can deliver.</p>
              </div>

              <div className="flex gap-2 my-3 md:mt-5">
                <div>
                  <Link href="/Products">
                    <button className="md:py-[7.5px] py-[5px]  md:px-[22px]  px-[15px] rounded-full bg-black text-white hover:bg-[#3d3d3d]">
                      Shop
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontMiss;
