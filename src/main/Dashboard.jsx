// import { useNavigate } from "react-router-dom";
import help from "../assets/help.png";
import goal from "../assets/goal.png";
import budget from "../assets/budget.png";
import accounts from "../assets/accounts.png";
import report from "../assets/report.png";
import transaction from "../assets/transaction.png";
import more from "../assets/more.png";
import { useState } from "react";
import ClickBudgets from "./Pages/ClickBudgets";
import logo from "../../public/logo.png";
function Dashboard() {
  // const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("budgets");
  const [isClicked, setIsClicked] = useState(false); // eslint-disable-line no-unused-vars
  const [isDashboardVisible, setIsDashboardVisible] = useState(true);
  // Inside the Dashboard component, at the beginning of the return statement

  const toggleDashboardVisibility = () => {
    setIsDashboardVisible((prev) => !prev);
    handleOpenToggle();
  };

  const handleOpenToggle = function () {
    setIsClicked(true);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <section
      className={`p-1 flex max-h-screen overflow-hidden bg-[#ffffff]
      } scroll-smooth`}
    >
      {isDashboardVisible && (
        <div
          className={`w-[250px] max-sm:w-[150px] max-h-[642px] rounded-e-lg bg-[#333333]
          } z-50 max-sm:fixed`}
        >
          <nav className="w-[165.66px] max-sm:w-[150px] py-4">
            <div className="mb-5 flex justify-center mt-1 shadow-sm">
              <div className="flex justify-center items-center">
                <span className="">
                  <img src={logo} alt="bb" className="h-20 w-28" />
                </span>
                <span
                  onClick={toggleDashboardVisibility}
                  className="sm:hidden max-sm:ml-10 cursor-pointer text-4xl text-white hover:scale-105"
                >
                  <ion-icon name="close-outline"></ion-icon>
                </span>
                <h2 className="hidden text-3xl font-semibold">BudgetBuddy</h2>
              </div>
            </div>

            <ul className="px-3 justify-center pl-6 flex gap-2.5 flex-col">
              <li
                onClick={() => handleItemClick("dashboard")}
                className={`flex w-48 pr-2 gap-2 py-2.5 pl-3 font-medium hover:bg-[#FFD700]
                 cursor-pointer text-[#F9FBFA] rounded-lg ${
                   selectedItem === "dashboard" && "bg-[#FFD700]"
                 } `}
              >
                <span>
                  <img className="w-6 h-6" src={more} alt="more" />
                </span>
                <p
                  className={`max-sm:text-sm font-light text-[#E6E6E6]
                  }`}
                >
                  Dashboard
                </p>
              </li>
              <li
                onClick={() => handleItemClick("transactions")}
                className={`flex w-48 pr-2 gap-2 py-2.5 pl-3 font-medium hover:bg-[#FFD700]
                } cursor-pointer text-[#F9FBFA] rounded-lg ${
                  selectedItem === "transactions" && "bg-[#FFD700]"
                }`}
              >
                <span>
                  <img
                    className="w-6 h-6"
                    src={transaction}
                    alt="transaction"
                  />
                </span>
                <p
                  className={`max-sm:text-sm font-light text-[#E6E6E6]
                  }`}
                >
                  Transactions
                </p>
              </li>
              <li
                onClick={() => handleItemClick("budgets")}
                className={`flex w-48 pr-2 gap-2 py-2.5 pl-3 font-medium hover:bg-[#FFD700]
                } cursor-pointer text-[#F9FBFA] rounded-lg ${
                  selectedItem === "budgets" && "bg-[#FFD700]"
                }`}
              >
                <span>
                  <img className="w-6 h-6" src={budget} alt="budget" />
                </span>
                <p
                  className={`max-sm:text-sm font-light text-[#E6E6E6]
                  }`}
                >
                  {" "}
                  Budgets
                </p>
              </li>
              <li
                onClick={() => handleItemClick("accounts")}
                className={`flex w-48 pr-2 gap-2 py-2.5 pl-3 font-medium hover:bg-[#FFD700]
                } cursor-pointer text-[#F9FBFA] rounded-lg ${
                  selectedItem === "accounts" && "bg-[#FFD700]"
                }`}
              >
                <span>
                  <img className="w-6 h-6" src={accounts} alt="accounts" />
                </span>
                <p
                  className={`max-sm:text-sm font-light text-[#E6E6E6]
                  }`}
                >
                  Accounts
                </p>
              </li>
              <li
                onClick={() => handleItemClick("goals")}
                className={`flex w-48 pr-2 gap-2 py-2.5 pl-3 font-medium hover:bg-[#FFD700]
                } cursor-pointer text-[#F9FBFA] rounded-lg ${
                  selectedItem === "goals" && "bg-[#FFD700]"
                }`}
              >
                <span>
                  <img className="w-6 h-6" src={goal} alt="goal" />
                </span>
                <p
                  className={`max-sm:text-sm font-light text-[#E6E6E6]
                  }`}
                >
                  Goals
                </p>
              </li>
              <li
                onClick={() => handleItemClick("reports")}
                className={`flex w-48 pr-2 gap-2 py-2.5 pl-3 font-medium hover:bg-[#FFD700]
                } cursor-pointer text-[#F9FBFA] rounded-lg ${
                  selectedItem === "reports" && "bg-[#FFD700]"
                }`}
              >
                <span>
                  <img className="w-6 h-6" src={report} alt="report" />
                </span>
                <p
                  className={`max-sm:text-sm font-light text-[#E6E6E6]
                  }`}
                >
                  Reports
                </p>
              </li>
            </ul>
            <div className="mt-7 ml-4 bg-[#FFFFFF] rounded-xl p-1">
              <img src={help} className="ml-9 bottom-9 relative" alt="" />
              <div className="flex-col">
                <p className="text-xs pt-[-10px]">
                  Do you have any problem making payments or other transaction?
                  Kindly contact the Help Center
                </p>
                <button className="p-1 bg-[#333333] rounded-md ml-5">
                  Help Center
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
      <div className="w-[2px] bg-[white] "></div>

      {selectedItem === "budgets" && (
        <ClickBudgets toggleDashboardVisibility={toggleDashboardVisibility} />
      )}
    </section>
  );
}
export default Dashboard;
