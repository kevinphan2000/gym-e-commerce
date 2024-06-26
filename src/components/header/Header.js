"use client";
import React, { useState, useEffect } from "react";
import { mainStyle } from "../headerSection/HeaderSection";
export default function Header() {
  const headings = [
    "Free Shipping on Apparel & Gear orders over $75",
    "Shop online or work with sales to design your gym",
    "Contact sales team for commercial quotes",
  ];
  const [i, setI] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setI((prevI) => (prevI + 1) % headings.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={mainStyle}
      className="relative z-50 h-12 flex items-center w-full overflow-hidden"
    >
      <div className="hidden h-full md:flex">
        <div className="relative w-full flex px-6 md:px-14 lg:px-20 flex-col flex-1">
          <div className="flex justify-end flex-1">
            <div className="z-20 flex">
              <div className="w-10 bg-gradient-to-l from-primary-dark" />
              <div className="flex items-center bg-primary-dark">
                <a className="flex self-center space-x-2 text-sm font-bold tracking-wide text-white hover:underline no-underline ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                  </svg>
                  <div className="space-x-60">
                    <span>Contact Us</span>
                    <span className="font-sans align-middle">
                      {headings[i]}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-0 w-full h-full embla top-navigation embla--is-ready">
        <div className="h-full">
          <div
            className="embla__container flex w-full h-full"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            <div
              className="top-0 left-0 right-0 h-full opacity-0 transition-opacity duration-1000 embla__slide flex-shrink-0 w-full text-white font-medium text-sm flex flex-col items-center justify-center text-center embla-slide-fade-selected"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <div className="relative w-full flex px-6 md:px-14 lg:px-20 flex-col">
                <div>
                  <p>Free Shipping on Apparel & Gear over 75 USD</p>
                </div>
              </div>
            </div> */}

      {/* <div className="top-0 left-0 right-0 h-full opacity-0 transition-opacity duration-1000 embla__slide flex-shrink-0 w-full text-white font-medium text-sm flex flex-col items-center justify-center text-center"> */}
      {/* <a href="/en-ca/design-your-gym">
                <div className="relative w-full flex px-6 md:px-14 lg:px-20 flex-col">
                  <div>
                    <p>Shop online or work with sales to design your gym.</p>
                  </div>
                </div>
              </a> */}
      {/* </div> */}
      {/* </div>
        </div>
      </div> */}
    </div>
  );
}
