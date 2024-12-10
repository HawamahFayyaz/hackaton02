import React from "react";

const Featured = () => {
  return (
    <div>
      <div className="w-full h-auto flex justify-center items-center flex-col">
        <div className="flex justify-between items-center w-[90%] text-black">
          <h1 className="font-bold text-xl text-center sm:text-left">
            Featured
          </h1>
        </div>

        <div className="w-full flex justify-center items-center flex-row">
          <div className="text-black h-auto gap-[40px] flex flex-col justify-center items-center sm:items-start">
            {/* Img */}
            <div className="pt-4">
              <img
                src="/featured/IMG01.png"
                alt="featured img"
                className="w-full sm:w-auto"
              />
            </div>

            <div className="text-black w-[90%] gap-[8px] md:gap-[10px] h-[270px] md:h-[270px] flex flex-col justify-center items-center">
              <div>
                <h1 className="text-[32px] sm:text-[56px] font-bold text-center sm:text-left">
                  STEP INTO WHAT FEELS GOOD
                </h1>
              </div>

              <div className="flex justify-center items-center text-[15px] mt-2 gap-1">
                <p className="text-center sm:text-left">
                  Cause everyone should know the feeling of running in that
                  perfect pair.
                </p>
              </div>

              <div className="flex gap-2 my-3">
                <div>
                  <button className="py-[5px] px-[15px] rounded-full bg-[#111111] text-white">
                    Find Your Shoe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
