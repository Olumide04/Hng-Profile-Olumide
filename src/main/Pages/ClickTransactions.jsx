import customize from "../../assets/customize.png";
import "../Dashboard.jsx";
import "../../index.css";
import CreditCard from "../../OtherPages/CreditCard.jsx";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
function ClickTransactions({ toggleDashboardVisibility, isDarkMode }) {
  const [toggleSeen, setToggleSeen] = useState(false);
  const [filter, setFilter] = useState(false);
  const [filter1, setFilter1] = useState(false);
  const handleFilter = function () {
    setFilter(!filter);
  };
  const handleFilter1 = function () {
    setFilter1(!filter1);
  };

  const handleToggleSeen = function () {
    setToggleSeen(!toggleSeen);
  };
  return (
    <section
      className={` text-[#F9FBFA] w-[95%] max-sm:w-full custom-scrollbar overflow-y-scroll`}
    >
      <div
        className={`flex items-center pl-3 gap-5 py-3 pr-5 justify-between max-lg:pr-5 sticky top-0 ${
          isDarkMode ? "bg-[#2E3033]" : "bg-[#E6E7F2]"
        } ${isDarkMode ? "bg-opacity-5" : ""} z-10`}
      >
        <div className="flex gap-3">
          <span
            className="text-3xl lg:hidden"
            onClick={toggleDashboardVisibility}
          >
            <ion-icon name="reorder-three-outline"></ion-icon>
          </span>
          <p className={`text-3xl ${isDarkMode ? "text-white" : "text-black"}`}>
            Transactions
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
            <p className=" text-2xl text-black">Customize</p>
          </button>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white opacity-10"></div>
      <div className="p-5">
        <div
          className={`flex max-[795px]:flex-col justify-between rounded-xl ${
            isDarkMode ? "balance-dark" : "balance"
          }`}
        >
          <div className="flex justify-between p-4 w-full">
            <div className="flex ">
              <div className="flex-col gap-3">
                <p className="text-gray-500 font-montserrat ">Your Balance</p>
                <p
                  className={`${
                    isDarkMode ? "text-[#FEFEFE]" : "text-black"
                  } text-3xl font-montserrat`}
                >
                  $3,000
                </p>
              </div>
            </div>
            <div className="">
              <button
                onClick={handleToggleSeen}
                className="flex py-0.5 px-1 text-slate-500 font-medium font-palanquin rounded-md items-center hover:underline"
              >
                <span className="text-xl">
                  <ion-icon
                    name={`${toggleSeen ? "eye-outline" : "eye-off-outline"}`}
                  ></ion-icon>
                </span>
                View Analytics
              </button>
            </div>
          </div>
          <div className="flex p-4 justify-between rounded-xl w-full items-center">
            <button className="border flex items-center py-0.5 px-1 rounded-md hover:scale-105 border-gray-400 text-gray-400">
              <span>
                <ion-icon name="return-up-forward-outline"></ion-icon>
              </span>
              Send Money
            </button>
            <button className="border flex items-center py-0.5 px-1 rounded-md hover:scale-105 border-gray-400 text-gray-400">
              <ion-icon name="add-outline"></ion-icon>Add Money
            </button>
            <button className="border flex items-center py-2 px-2 rounded-full hover:scale-105 border-gray-400 text-gray-400">
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
      <div className="items-center max-md:max-w-[700px] max-[1160px]:overflow-x-scroll custom-scrollbar">
        <CreditCard />
      </div>
      <div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <p>Acitivity History</p>
            <p>you have 20 activites this month</p>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1">
              <div
                onClick={handleFilter}
                className="bg-white text-slate-500 flex gap-2 font-montserrat p-3 rounded-2xl font-medium cursor-pointer"
              >
                <p>Filter</p>
                <span>v</span>
              </div>
              {filter ? (
                <div className="bg-white">
                  <div className="hover:bg-slate-500 text-black">
                    <p>Sent</p>
                  </div>
                  <div className="hover:bg-slate-500 text-black">
                    <p>Received</p>
                  </div>
                  <div className="hover:bg-slate-500 text-black">
                    <p>Loan</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div
                onClick={handleFilter1}
                className="bg-white text-slate-500 flex gap-2 font-montserrat p-3 rounded-2xl font-medium cursor-pointer"
              >
                <p>Date range</p>
                <span>v</span>
              </div>
              {filter1 ? (
                <div className="bg-white">
                  <div className="hover:bg-slate-500 text-black">
                    <p>Past 24 Hours</p>
                  </div>
                  <div className="hover:bg-slate-500 text-black">
                    <p>Past 1 week</p>
                  </div>
                  <div className="hover:bg-slate-500 text-black">
                    <p>Past ! month</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClickTransactions;
