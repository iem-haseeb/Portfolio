import React from "react";

const Footer = () => {
  const date = new Date(Date.now());
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <footer className="pt-20 mx-10 lg:mx-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="flex-1 flex justify-center md:justify-start mb-10 md:mb-0">
          <span className="text-7xl font-bold">
            Med
            <br />
            Synopsis
          </span>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row flex-wrap justify-between">
          <div className="mb-5">
            <h3 className="font-bold mb-2">API</h3>
            <ul>
              <li className="mb-1">
                <a href="#" className="text-gray-700 hover:underline">
                  Dev API
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="font-bold mb-2">ABOUT</h3>
            <ul>
              <li className="mb-1">
                <a href="#" className="text-gray-700 hover:underline">
                  Med Synopsis
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-gray-700 hover:underline">
                  Devs
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="font-bold mb-2">POLICIES</h3>
            <ul>
              <li className="mb-1">
                <a href="#" className="text-gray-700 hover:underline">
                  Terms and Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-20 border-t-2 border-black" />
      <p className="py-8 text-sm font-medium text-center">
        {monthNames[date.getMonth()]} {" | "}
        {date.getFullYear()} &copy; All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
