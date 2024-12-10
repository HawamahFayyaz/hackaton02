import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="uppercase text-xl font-semibold mt-8">Get Help</h2>
      <div className="flex px-4 py-3 rounded w-[30%] border-2 border-text-secondary-gray mt-4 justify-between">
        <input
          className="focus-visible:outline-none text-sm w-[64%]"
          type="text"
          placeholder="What can we help you with?"
        />
        <Search className="text-[#757575]" />
      </div>
      <div className="grid grid-cols-12 px-8 md:px-16 py-9 bg-white text-gray-800">
        <div className="col-span-9 border-r-[1.3px] pr-4 border-text-secondary-gray">
          <h2 className="text-2xl font-medium mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="mb-4 pt-2 text-sm">
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>
          <ul className="pl-6 text-sm mb-6 space-y-2">
            <li>
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </li>
            <li>
              If you enter your PAN information at checkout, you'll be able to
              pay for your order with PayTM or a local credit or debit card.
            </li>
            <li>Apple Pay</li>
          </ul>
          <p className="mb-6 text-sm text-wrap">
            <Link href="#" className="underline font-semibold text-base">
              Nike Members
            </Link>{" "}
            can store multiple debit or credit cards in their profile for faster
            checkout. If you're not already a Member,{" "}
            <Link href="#" className="underline font-semibold text-base">
              join us
            </Link>{" "}
            today.
          </p>
          <div className="flex mt-4 gap-4">
            <button className="rounded-full pl-5 pr-5 bg-black text-white py-2">
              Join Us
            </button>
            <button className="rounded-full pl-5 pr-5 bg-black text-white py-2">
              Shop Nike
            </button>
          </div>
          <div>
            <h3 className="text-base font-bold pt-4 mb-3">FAQs</h3>
            <div className="mb-6">
              <h4 className="text-base font-bold mb-2">
                Does my card need international purchases enabled?
              </h4>
              <p className="text-base text-wrap">
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
              <p className="mt-2 text-sm">
                Please note, some banks may charge{" "}
                <span className="font-semibold underline">
                  a small transaction fee
                </span>{" "}
                for international orders.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2">
                Can I pay for my order with multiple methods?
              </h4>
              <p>
                No, payment for Nike orders can't be split between multiple
                payment methods.
              </p>
            </div>
            <div className="mb-6 text-base">
              <h4 className="font-bold mb-2">
                What payment method is accepted for SNKRS orders?
              </h4>
              <p>
                You can use any accepted credit card to pay for your SNKRS
                order.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="text-base font-bold mb-2">
                Why don't I see Apple Pay as an option?
              </h4>
              <p className="text-base">
                To see Apple Pay as an option in the Nike App or on Nike.com,
                you'll need to use a compatible Apple device running the latest
                OS, be signed in to your iCloud account and have a supported
                card in your Wallet. Additionally, you'll need to use Safari to
                use Apple Pay on Nike.com.
              </p>
            </div>
            <div className="mb-6">
              <p className="mb-2">Was this answer helpful?</p>
              <div className="flex space-x-2">
                <img
                  src="icons/thumb_up.png"
                  alt="Thumbs Up"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
                <img
                  src="icons/thumb_down.png"
                  alt="Thumbs Down"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
              </div>

              <h4 className="text-lg font-bold mt-8 mb-4 text-[#757575]">
                RELATED
              </h4>
              <ul className="space-y-2 ml-6">
                <li>
                  <Link href="#" className="underline font-bold">
                    WHAT ARE NIKE'S DELIVERY OPTIONS?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="underline font-bold">
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col items-end">
          <div className="col-span-12 lg:col-span-3 pt-10 lg:pt-0 space-y-14 px-10">
            <h2 className="uppercase font-semibold text-2xl text-center">
              Contact Us
            </h2>
            {/* Phone Section */}
            <div className="flex flex-col items-center space-y-2 text-center">
              <img src="icons/phone.png" alt="Phone" width={64} height={64} />
              <p className="font-semibold text-base pt-4 ">000 800 919 0566</p>
              <p className="text-base">
                Products & Orders: 24 hours a day, 7 days a week
              </p>
              <p className="text-base">
                Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
              </p>
            </div>

            {/* Chat Section */}
            <div className="flex flex-col items-center space-y-2 text-center">
              <img src="icons/msg.png" alt="msg" width={64} height={64} />
              <p className="text-base font-semibold">24 hours a day</p>
              <p className="text-base">7 days a week</p>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center space-y-2 text-center">
              <img src="icons/mail.png" alt="emial" width={64} height={64} />
              <p className="text-base font-semibold">We’ll reply within</p>
              <p className="text-base">five business days</p>
            </div>

            {/* Store Locator Section */}
            <div className="flex flex-col items-center space-y-2 text-center">
              <img
                src="icons/location.png"
                alt="locator"
                width={64}
                height={64}
              />
              <p className="text-base font-semibold">STORE LOCATOR</p>
              <p className="text-base">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
