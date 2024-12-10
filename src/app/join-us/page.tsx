import Image from "next/image";
import Link from "next/link";

export default function JoinUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-7">
      {/* Logo */}
      <div className="mb-6">
        <Image src="/nike_logo.png" alt="Nike Logo" width={80} height={80} />
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2 text-center">
        BECOME A NIKE MEMBER
      </h1>
      <p className="w-80 text-center text-[#8D8D8D] pb-5">
        Create your Nike Member profile and get first access to the very best of
        Nike products, inspiration and community.
      </p>

      {/* Input Fields */}
      <form className="w-full max-w-md mt-4">
        {/* Email Field */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* First Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <input
            placeholder="Date Of Birth"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Birthday Reward Notice */}
        <p className="text-xs text-[#8D8D8D] text-center mb-6">
          Get a Nike Member Reward every year on your Birthday.
        </p>

        {/* Country Selector */}
        <div className="mb-4 relative">
          <select
            className="w-full p-3 border border-gray-300 rounded text-[#8D8D8D] focus:outline-none focus:ring-2 focus:ring-gray-500"
            defaultValue="India"
          >
            <option>India</option>
            <option>Pakistan</option>
            <option>Bangladesh</option>
            <option>South Africa</option>
            <option>USA</option>
            <option>UK</option>
            <option>Australia</option>
            <option>Canada</option>
          </select>
        </div>

        {/* Gender Selection */}
        <div className="flex gap-5 mt-1">
          <div className="border-[#E5E5E5] rounded py-3 border-[2px] w-2/4 text-center text-[#8D8D8D]">
            Male
          </div>
          <div className="border-[#E5E5E5] rounded py-3 border-[2px] w-2/4 text-center text-[#8D8D8D]">
            Female
          </div>
        </div>

        {/* Email Updates Checkbox */}
        <label className="flex items-start space-x-2 pt-4 text-wrap mb-6">
          <input
            type="checkbox"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-gray-500"
          />
          <span className="text-sm text-[#8D8D8D]">
            Sign up for emails to get updates from Nike on products, offers and
            your Member benefits.
          </span>
        </label>

        <div>
          <p className="text-[#8D8D8D] text-sm text-center text-wrap pb-6">
            By creating an account, you agree to Nike's{" "}
            <Link className="underline" href="#">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link className="underline" href="#">
              Terms of Use
            </Link>
            .
          </p>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded"
        >
          Join Now
        </button>

        <p className="text-center">
          {" "}
          <span className="text-[#8D8D8D] text-sm">Already a Member? </span>
          <span className="underline text-sm">Sign In.</span>
        </p>
      </form>
    </div>
  );
}
