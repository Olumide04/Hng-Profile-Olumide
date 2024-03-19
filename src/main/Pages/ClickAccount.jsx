import customize from "../../assets/customize.png";
// eslint-disable-next-line react/prop-types
function ClickAccount({ toggleDashboardVisibility }) {
  return (
    <section className="text-[#F9FBFA] w-[95%] max-sm:w-full">
      <div className="flex items-center pl-3 gap-5 py-3 pr-5 justify-between max-lg:pr-5">
        <div className="flex gap-3">
          <span className="text-3xl lg:hidden" onClick={toggleDashboardVisibility}>
            <ion-icon name="reorder-three-outline"></ion-icon>
          </span>
          <p className="text-3xl">Accounts</p>
        </div>
        <div className="">
          <button className="max-sm:hidden rounded-md text-center hover:scale-105 bg-[#F9FBFA] items-center p-1 flex gap-3">
            <span className="font-white">
              <img className="w-4 h-4" src={customize} alt="customize" />
            </span>
            <p className=" text-2xl text-black">Customize</p>
          </button>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white opacity-10"></div>
      <div className="flex">
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default ClickAccount;
