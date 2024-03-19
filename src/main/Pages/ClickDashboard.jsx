import bank from "../../assets/bank.png";
import budget2 from "../../assets/budget2.png";
import target from "../../assets/target.png";
import star from "../../assets/star.png";
import customize from "../../assets/customize.png";
import fruit from "../../assets/fruits.png";
import shopping from "../../assets/shopping.png";
import internet from "../../assets/internet.png";
import { useState } from "react";
import LazyLoadedDiv from "./LazyLoadedDiv.jsx";
import "../Dashboard.jsx";

// eslint-disable-next-line react/prop-types
function ClickDashboard({ toggleDashboardVisibility, isDarkMode }) {
  const [hover, setHover] = useState(true);
  const onHover = function () {
    setHover(true);
  };
  const offHover = function () {
    setHover(false);
  };

  return (
    <section
      className={` text-[#F9FBFA] w-[95%] max-sm:w-full custom-scrollbar overflow-y-scroll`}
    >
      <LazyLoadedDiv>
        <div
          className={`flex items-center pl-3 gap-5 py-3 pr-5 justify-between max-lg:pr-5 sticky top-0 ${
            isDarkMode ? "bg-[#2E3033]" : "bg-[#E6E7F2]"
          } ${isDarkMode ? "bg-opacity-5" : ""} z-10`}
        >
          <div className="flex gap-3 ">
            <span
              className="text-3xl lg:hidden"
              onClick={toggleDashboardVisibility}
            >
              <ion-icon name="reorder-three-outline"></ion-icon>
            </span>
            <p
              className={`text-3xl ${isDarkMode ? "text-white" : "text-black"}`}
            >
              Dashboard
            </p>
          </div>
          <div className="">
            <button
              className={`max-sm:hidden rounded-md text-center hover:scale-105 ${
                isDarkMode ? "bg-[#F9FBFA]" : "bg-[#23479F]"
              } items-center p-1 flex gap-3`}
            >
              <span className="font-white">
                <img className="w-4 h-4" src={customize} alt="customize" />
              </span>
              <p
                className={`text-2xl ${
                  isDarkMode ? "text-black" : "text-white"
                }`}
              >
                Customize
              </p>
            </button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white opacity-10"></div>
        <div
          className={`flex px-6 py-4 gap-14 max-[1150px]:flex-col relative max-sm:flex-grow`}
        >
          <div
            className={`${isDarkMode ? "bg-[#2E3033]" : "bg-[#F8F8FB]"}  ${
              isDarkMode ? "" : "shadow-lg"
            }  p-6 rounded-md max-[500px]:max-w-96`}
          >
            <div className="mb-4">
              <p
                className={`uppercase ${
                  isDarkMode ? "text-[#F9FBFA]" : "text-black"
                } font-montserrat text-2xl`}
              >
                Getting Started
              </p>
              <p
                className={`text-xl ${
                  isDarkMode ? "text-[#F9FBFA]" : "text-black"
                }`}
              >
                Jane, lets finish setting up your account
              </p>
            </div>
            <div className="flex gap-1 mb-6">
              <div className="rounded-s-xl bg-gray-500 w-24 h-3"></div>
              <div className="bg-gray-500 w-24 h-3"></div>
              <div className="bg-gray-500 w-24 h-3"></div>
              <div className="rounded-e-xl bg-gray-500 w-24 h-3"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-3 hover:shadow-xl h-12 rounded-sm">
                <div
                  className={`h-[1px] w-full ${
                    isDarkMode ? "bg-white" : "bg-slate-400"
                  } ${isDarkMode ? "opacity-10" : ""}`}
                ></div>
                <div className="flex gap-4 pl-4">
                  <span>
                    <img src={bank} className="w-5 h-5" alt="" />
                  </span>
                  <p
                    className={`${
                      isDarkMode ? "text-[#F9FBFA]" : "text-black"
                    }`}
                  >
                    Add an account
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 hover:shadow-xl h-12 rounded-sm">
                <div
                  className={`h-[1px] w-full ${
                    isDarkMode ? "bg-white" : "bg-slate-400"
                  } ${isDarkMode ? "opacity-10" : ""}`}
                ></div>
                <div className="flex gap-4 pl-4">
                  <span>
                    <img src={star} className="w-5 h-5" alt="" />
                  </span>

                  <p
                    className={`${
                      isDarkMode ? "text-[#F9FBFA]" : "text-black"
                    }`}
                  >
                    Customize categories
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 hover:shadow-xl h-12 rounded-sm">
                <div
                  className={`h-[1px] w-full ${
                    isDarkMode ? "bg-white" : "bg-slate-400"
                  } ${isDarkMode ? "opacity-10" : ""}`}
                ></div>
                <div className="flex gap-4 pl-4">
                  <span>
                    <img src={target} className="w-5 h-5" alt="" />
                  </span>

                  <p
                    className={`${
                      isDarkMode ? "text-[#F9FBFA]" : "text-black"
                    }`}
                  >
                    Create a goal
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 hover:shadow-xl h-12 rounded-sm">
                <div
                  className={`h-[1px] w-full ${
                    isDarkMode ? "bg-white" : "bg-slate-400"
                  } ${isDarkMode ? "opacity-10" : ""}`}
                ></div>
                <div className="flex gap-4 pl-4">
                  <span>
                    <img src={budget2} className="w-5 h-5" alt="" />
                  </span>

                  <p
                    className={`${
                      isDarkMode ? "text-[#F9FBFA]" : "text-black"
                    }`}
                  >
                    Create a budget
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className={`h-[1px] w-full ${
                    isDarkMode ? "bg-white" : "bg-slate-400"
                  } ${isDarkMode ? "opacity-10" : ""}`}
                ></div>
                <div>
                  <p className="text-blue-500 cursor-pointer hover:underline">
                    Hide this widget
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${isDarkMode ? "bg-[#2E3033]" : "bg-[#F8F8FB]"}  ${
              isDarkMode ? "" : "shadow-lg"
            } p-6 rounded-md flex flex-col`}
          >
            <div>
              <div
                className={`flex gap-14 ${
                  isDarkMode ? "text-white" : "text-black"
                } max-[1150px]:flex-col max-[500px]:max-w-96 `}
              >
                <div className="">
                  <p className="uppercase font-montserrat text-xl lg:mb-10">
                    Spending
                  </p>
                  <p className="">This Month vs. last month</p>
                </div>
                <table
                  className={`w-full ${
                    isDarkMode ? "bg-gray-900" : "bg-[#ffffff]"
                  } bg-opacity-15 rounded-lg overflow-hidden shadow-xl`}
                >
                  <thead className="bg-gray-700 text-white">
                    <tr>
                      <th className="py-3 px-6 text-left">Months</th>
                      <th className="py-3 px-6 text-left">Total Spending</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-600">
                    <tr className="transition-all hover:bg-gray-700">
                      <td className="py-4 px-6">This Month</td>
                      <td className="py-4 px-6">$5,000</td>
                    </tr>
                    <tr className="transition-all hover:bg-gray-700">
                      <td className="py-4 px-6">Last Month</td>
                      <td className="py-4 px-6">$2,600</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
              <div className="">
                <button
                  className={`mb-3 items-center ${
                    isDarkMode ? "bg-white" : "bg-black"
                  } p-2 rounded-lg ${
                    isDarkMode ? "bg-opacity-10" : ""
                  } hover:scale-105`}
                >
                  Full History
                </button>
                <div className="flex flex-col gap-2">
                  <div
                    className={`rounded-lg border-1 shadow-lg px-6 py-5 cursor-pointer hover:bg-gray-700  ${
                      isDarkMode ? "bg-gray-900" : "bg-white"
                    } ${isDarkMode ? "" : "text-black"}
                    `}
                  >
                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                  </div>
                  <div
                    className={`rounded-xl border-1 shadow-lg cursor-pointer px-6 py-5 hover:bg-gray-700 ${
                      isDarkMode ? "bg-gray-900" : "bg-white"
                    } ${isDarkMode ? "" : "text-black"}`}
                  >
                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex px-6 py-4 gap-14 max-[1150px]:flex-col max-sm:flex-grow`}
        >
          <div
            className={` ${isDarkMode ? "bg-[#2E3033]" : "bg-[#F8F8FB]"} ${
              isDarkMode ? "text-[F9FBFA]" : "text-black"
            }  p-6 rounded-md max-[500px]:max-w-96`}
          >
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <p
                  className={`uppercase ${
                    isDarkMode ? "text-[F9FBFA]" : "text-black"
                  } font-montserrat text-xl`}
                >
                  Budget
                </p>
                <span
                  className={`text-3xl ${"hover:bg-white"} hover:bg-opacity-5 hover:scale-110 pt-1 px-1 items-center`}
                >
                  <ion-icon name="add-outline"></ion-icon>
                </span>
              </div>
              <div className="mb-4 mx-8 max-sm:mx-0">
                <p className="text-xl">Checkout your budget for this month</p>
              </div>
              <div className="flex flex-col mt-4">
                <div
                  className={`flex rounded-md px-3 justify-between hover:bg-slate-500 py-5 ${
                    isDarkMode ? "" : "shadow-xl"
                  }`}
                >
                  <p className="font-montserrat">Income</p>
                  <p className="font-medium">$4557.99</p>
                </div>
                <div className="h-[1px] w-full bg-white opacity-10"></div>

                <div
                  className={`flex rounded-md px-3 justify-between hover:bg-slate-500 py-5 ${
                    isDarkMode ? "" : "shadow-xl"
                  }`}
                >
                  <p className="font-montserrat">Expense</p>
                  <p className="font-medium">$5,000</p>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <div className="flex justify-between px-7 max-sm:px-0 hover:shadow-xl hover:scale-105 py-1">
                  <span className="bg-gray-700 rounded-full p-1 border-white border-[1px] border-opacity-20">
                    <img className="w-10 h-10" src={shopping} alt="shopping" />
                  </span>
                  <div className="flex flex-col mr-20 max-sm:mr-0">
                    <p>Groceries</p>
                    <p className="text-xs font-semibold opacity-75">
                      Food & Dining
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium">$4,600</p>
                    <p className="text-sm font-semibold opacity-75">
                      Available
                    </p>
                  </div>
                </div>
                <div className="flex justify-between px-7 max-sm:px-0 hover:shadow-xl hover:scale-105 py-1">
                  <span className="bg-gray-700 rounded-full pt-0.5 px-0.5 border-white border-[1px] border-opacity-20">
                    <img className="w-11 h-11" src={fruit} alt="shopping" />
                  </span>
                  <div className="flex flex-col mr-16 max-sm:mr-0">
                    <p>Healthy Fruits</p>
                    <p className="text-xs font-semibold opacity-75">
                      Food & Dining
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium">$4,600</p>
                    <p className="text-sm font-semibold opacity-75">
                      Available
                    </p>
                  </div>
                </div>
                <div className="flex justify-between px-7 max-sm:px-0 hover:shadow-xl hover:scale-105 py-1">
                  <span className="bg-gray-700 rounded-full p-2 border-white border-[1px] border-opacity-20">
                    <img className="w-8 h-8" src={internet} alt="shopping" />
                  </span>
                  <div className="flex flex-col mr-20 max-sm:mr-0">
                    <p>Internet</p>
                    <p className="text-xs font-semibold opacity-75">
                      Bills & Utilities
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium">$4,600</p>
                    <p className="text-sm font-semibold opacity-75">
                      Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${isDarkMode ? "bg-[#2E3033]" : "bg-[#F8F8FB]"} ${
              isDarkMode ? "text-[F9FBFA]" : "text-black"
            } p-6 rounded-md max-[500px]:max-w-96`}
          >
            <div className="mb-4">
              <div className="flex justify-between py-2 items-c">
                <p
                  className={`uppercase ${
                    isDarkMode ? "text-[#F9FBFA]" : "text-black"
                  } font-montserrat text-xl`}
                >
                  Transactions
                </p>
                <span className="text-3xl hover:bg-white hover:bg-opacity-5 hover:scale-110 pt-1 px-1 items-center">
                  <ion-icon name="add-outline"></ion-icon>
                </span>
              </div>
              <div className="mb-4 mx-8 max-sm:mx-0">
                <p className="text-xl">Most recent</p>
              </div>

              <div className="mt-5 flex flex-col">
                <div className="flex justify-between py-5 items-center px-7 max-sm:px-0 hover:shadow-xl hover:scale-105">
                  <p onMouseEnter={onHover} onMouseLeave={offHover}>
                    The Cheesecake{" "}
                    <span className="">{`${hover ? "Factory" : "..."}`}</span>
                  </p>

                  <div className="flex flex-col">
                    <p className="font-medium">$4,600</p>
                  </div>
                </div>
                <div
                  className={`h-[1px] w-full ${
                    isDarkMode ? "bg-white" : "bg-slate-400"
                  } ${isDarkMode ? "opacity-10" : ""}`}
                ></div>

                <div className="flex justify-between py-5 items-center px-7 max-sm:px-0 hover:shadow-xl hover:scale-105">
                  <div className="flex flex-col mr-16 max-sm:mr-0">
                    <p>Walmart</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium">$4,600</p>
                  </div>
                </div>
                <div
                  className={`h-[1px] w-full ${
                    isDarkMode ? "bg-white" : "bg-slate-400"
                  } ${isDarkMode ? "opacity-10" : ""}`}
                ></div>

                <div className="flex justify-between py-5 items-center px-7 max-sm:px-0 hover:shadow-xl hover:scale-105">
                  <div className="flex flex-col mr-20 max-sm:mr-0">
                    <p>Spotify</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium">$4,600</p>
                  </div>
                </div>
                <div
                  className={`h-[1px] w-full ${
                    isDarkMode ? "bg-white" : "bg-slate-400"
                  } ${isDarkMode ? "opacity-10" : ""}`}
                ></div>
                <div className="flex justify-between py-5 items-center px-7 max-sm:px-0 hover:shadow-xl hover:scale-105">
                  <div className="flex flex-col mr-20 max-sm:mr-0">
                    <p>Olumide Ayeromara</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium">$4,600</p>
                  </div>
                </div>
                <div
                  className={`h-[1px] w-full ${
                    isDarkMode ? "bg-white" : "bg-slate-400"
                  } ${isDarkMode ? "opacity-10" : ""}`}
                ></div>
                <div className="flex justify-between py-5 items-center px-7 max-sm:px-0 hover:shadow-xl hover:scale-105">
                  <div className="flex flex-col mr-20 max-sm:mr-0">
                    <p>Starbucks</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium">$4,600</p>
                  </div>
                </div>
                <div
                  className={`h-[1px] w-full ${
                    isDarkMode ? "bg-white" : "bg-slate-400"
                  } ${isDarkMode ? "opacity-10" : ""}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </LazyLoadedDiv>
    </section>
  );
}

export default ClickDashboard;
