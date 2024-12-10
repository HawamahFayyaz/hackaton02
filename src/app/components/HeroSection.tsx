import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      {/* Text-Bar */}
      <div className="w-full bg-[#F5F5F5] h-full flex justify-center items-center flex-row">
        <div className="w-[90%] text-[#111111] h-[40px] md:h-[70px] flex flex-col justify-center items-center ">
          <div>
            <h1 className="text-2xl hidden font-semibold md:block">
              Hello Nike App
            </h1>
          </div>
          <div>
            <p className="text-[14px] md:flex md:gap-1">
              Download the app to access everything Nike.
              <span className="underline font-bold text-black">
                Get Your Great
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Img */}
      <div className="w-full flex justify-center items-center flex-row">
        <div className="text-black w-full flex flex-col justify-center items-center">
          <div>
            <Image
              src="/nike_banner.png"
              alt="section image"
              width={1344}
              height={700}
              className="w-full sm:w-auto"
            />
          </div>

          <div className="text-black pt-6 flex flex-col justify-center items-center">
            <div>
              <h1 className="font-medium text-[15px] pt-3">First Look</h1>
            </div>

            <div>
              <h1 className="text-[40px] md:text-[56px] font-bold">
                Nike Air Max Pulse
              </h1>
            </div>

            <div>
              <p className="text-center flex-col text-wrap text-[15px] mt-2 pt-2">
                <span className="block">
                  Extreme comfort. Hyper durable. Max volume. Introducing the
                  Air Max Pulse{" "}
                </span>
                <span className="block">
                  — designed to push you past your limits and help you go to the
                  max.
                </span>
              </p>
            </div>
            <div className="flex gap-2 my-3 md:mt-5">
              <div>
                <button className="md:py-[7.5px] py-[5px] md:px-[22px] px-[15px] rounded-full bg-[#111111] text-white hover:bg-[#313131]">
                  Notify Me
                </button>
              </div>
              <div>
                <button className="md:py-[7.5px] py-[5px] md:px-[22px] px-[15px] rounded-full bg-[#111111] text-white hover:bg-[#313131]">
                  Shop Air Max
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
