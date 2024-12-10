"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <Image
        className="pb-5"
        src="nike_logo.png"
        width={40}
        height={10}
        alt="Logo"
      />
      <h2 className="uppercase w-40 text-center font-bold pb-5">
        YOUR ACCOUNT FOR EVERYTHING NIKE
      </h2>
      <form action="" className="flex flex-col w-full max-w-md px-4">
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="password"
          placeholder="Password"
        />
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <input type="checkbox" id="remember" />
            <label
              className="ml-2 pl-2 cursor-pointer text-[#8D8D8D]"
              htmlFor="remember"
            >
              Keep me signed in
            </label>
          </div>
          <div>
            <span>
              <a href="#" className="text-[#BCBCBC]">
                Forgotten your password?
              </a>
            </span>
          </div>
        </div>
        <p className="text-[#8D8D8D] text-center pb-6">
          By logging in, you agree to Nike&apos;s{" "}
          <Link className="underline" href="#">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="underline" href="#">
            Terms of Use
          </Link>
          .
        </p>
        <button className="rounded py-3 bg-black text-white">SIGN IN</button>
        <p className="text-center">
          <span className="text-[#8D8D8D]">Not a Member? </span>
          <span className="underline">Join Us.</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
