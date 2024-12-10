"use client";
import React from "react";
import Image from "next/image";
import { FaSquare, FaSlidersH } from "react-icons/fa";
import { prOductDeatils } from "../productDetails/[id]";
import { ChevronUp, ChevronDown } from "lucide-react";
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet";
const products = () => {
  return (
    <div>
      <div className="w-full  md:h-[233vh]  flex  items-center flex-col">
        <div className="flex justify-between  items-center w-[90%] md:h-[62px] text-black ">
          <div>
            <h1 className="md:text-[22px] text-[18px] font-semibold">
              New (500)
            </h1>
          </div>
          <div className="flex justify-center items-center gap-2 ">
            <div className="flex gap-5">
              <div className="flex justify-center gap-5 items-center">
                <div>
                  <h1 className="text-[15px] font-thin">Hide Filters</h1>
                </div>
                <div>
                  <FaSlidersH
                    size={25}
                    color="#111111"
                    className="font-mono md:flex hidden"
                  />
                  <div>
                    <Sheet>
                      <SheetTrigger className="md:hidden">
                        <FaSlidersH className="size-[20px]" />
                      </SheetTrigger>
                      <SheetContent>
                        <div className="flex flex-col justify-start ">
                          <div className="flex items-start flex-col mt-10 border-t-slate-400 border-t text-black ">
                            <div className="flex flex-row pt-1 text-black gap-[100px] justify-center  items-center ">
                              <h1 className="text-[16px] font-medium">
                                Gender
                              </h1>
                              <ChevronUp />
                            </div>
                            <div className="flex justify-center items-start gap-2 font-thin mt-5 flex-col ">
                              <div className="flex justify-center items-center gap-2">
                                <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                                <h1 className="font-normal">Men</h1>
                              </div>
                              <div className="flex justify-center items-center gap-2">
                                <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                                <h1 className="font-normal">Women</h1>
                              </div>
                              <div className="flex justify-center items-center gap-2">
                                <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                                <h1 className="font-normal">Unisex</h1>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start flex-col mt-10 border-t-slate-400 border-t text-black ">
                            <div className="flex flex-row pt-1 text-black gap-[122px] justify-center  items-center ">
                              <h1 className="text-[16px] font-medium">Kids</h1>
                              <ChevronUp />
                            </div>
                            <div className="flex justify-center items-start gap-2 font-thin mt-5 flex-col ">
                              <div className="flex justify-center items-center gap-2">
                                <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                                <h1 className="font-normal">Boys</h1>
                              </div>
                              <div className="flex justify-center items-center gap-2">
                                <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                                <h1 className="font-normal">Girls</h1>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start flex-col mt-10 border-t-slate-400 border-t text-black ">
                            <div className="flex flex-row pt-1 text-black gap-[50px] justify-center  items-center ">
                              <h1 className="text-[16px] font-medium">
                                Shop By Price
                              </h1>
                              <ChevronUp />
                            </div>
                            <div className="flex justify-center items-start gap-2 font-thin mt-5 flex-col ">
                              <div className="flex justify-center items-center gap-2">
                                <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                                <h1 className=" font-normal">
                                  Under ₹ 2 500.00
                                </h1>
                              </div>
                              <div className="flex justify-center items-center gap-2">
                                <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                                <h1 className="font-normal ">
                                  ₹ 2 501.00 - ₹ 7 500.00
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-5 items-center">
                <div>
                  <h1 className="text-[15px] font-thin">Sort By</h1>
                </div>

                <div>
                  <ChevronDown />
                  <Sheet>
                    <SheetTrigger className="md:hidden">
                      <ChevronDown />
                    </SheetTrigger>
                    <SheetContent>
                      <div className="flex flex-col justify-start ">
                        <div className="flex mt-8 flex-col gap-2 text-[15px] justify-start">
                          <p>Shoes</p>
                          <p>Sport Bras</p>
                          <p>Tops & T-Shirts</p>
                          <p>Hoodies & Sweatshirts</p>
                          <p>Jackets</p>
                          <p>Trousers & Tights</p>
                          <p>Shorts</p>
                          <p>Tracksuits</p>
                          <p>Jumpsuits & Rompers</p>
                          <p>Skirts & Dresses</p>
                          <p>Socks</p>
                          <p>Accessories & Equipment</p>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex justify-between  ">
          <div className="w-[15%] hidden md:flex flex-col justify-start ">
            <div className="flex flex-col gap-2 text-[15px] justify-start">
              <p>Shoes</p>
              <p>Sport Bras</p>
              <p>Tops & T-Shirts</p>
              <p>Hoodies & Sweatshirts</p>
              <p>Jackets</p>
              <p>Trousers & Tights</p>
              <p>Shorts</p>
              <p>Tracksuits</p>
              <p>Jumpsuits & Rompers</p>
              <p>Skirts & Dresses</p>
              <p>Socks</p>
              <p>Accessories & Equipment</p>
            </div>

            <div className="flex items-start flex-col mt-10 border-t-slate-400 border-t text-black ">
              <div className="flex flex-row pt-1 text-black gap-[100px] justify-center  items-center ">
                <h1 className="text-[16px] font-medium">Gender</h1>
                <ChevronUp />
              </div>
              <div className="flex justify-center items-start gap-2 font-thin mt-5 flex-col ">
                <div className="flex justify-center items-center gap-2">
                  <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                  <h1 className="font-normal">Men</h1>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                  <h1 className="font-normal">Women</h1>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                  <h1 className="font-normal">Unisex</h1>
                </div>
              </div>
            </div>

            <div className="flex items-start flex-col mt-10 border-t-slate-400 border-t text-black ">
              <div className="flex flex-row pt-1 text-black gap-[122px] justify-center  items-center ">
                <h1 className="text-[16px] font-medium">Kids</h1>
                <ChevronUp />
              </div>
              <div className="flex justify-center items-start gap-2 font-thin mt-5 flex-col ">
                <div className="flex justify-center items-center gap-2">
                  <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                  <h1 className="font-normal">Boys</h1>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                  <h1 className="font-normal">Girls</h1>
                </div>
              </div>
            </div>

            <div className="flex items-start flex-col mt-10 border-t-slate-400 border-t text-black ">
              <div className="flex flex-row pt-1 text-black gap-[50px] justify-center  items-center ">
                <h1 className="text-[16px] font-medium">Shop By Price</h1>
                <ChevronUp />
              </div>
              <div className="flex justify-center items-start gap-2 font-thin mt-5 flex-col ">
                <div className="flex justify-center items-center gap-2">
                  <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                  <h1 className=" font-normal">Under ₹ 2 500.00</h1>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <FaSquare className="text-white  border-[1.5px] rounded-sm text-[20px]" />
                  <h1 className="font-normal ">₹ 2 501.00 - ₹ 7 500.00</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[75%] w-full justify-center items-center  flex-col grid grid-cols-1 mt-5 md:grid-cols-3 gap-3 ">
            {prOductDeatils.slice(7, 16).map((item) => {
              return (
                <div key={item.id} className="pb-4 m-1 shadow-lg rounded-lg ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={441}
                    height={341}
                    className="w-full  cursor-pointer "
                  />
                  <div className="px-1 pt-1 text-[15px] ">
                    <p className="text-[#9E3500] font-bold">{item.check}</p>
                    <h1 className=" text-black font-medium text-[15px]">
                      {item.title}
                    </h1>
                    <p className="text-[12px] text-[#757575] font-thing pt-1">
                      {item.description}
                    </p>
                    <p className="text-[#757575]">{item.color}</p>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;