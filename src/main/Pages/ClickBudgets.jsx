// eslint-disable-next-line react/prop-types
function ClickBudgets() {
  return (
    <section className="ml-52 my-1 overflow-y-scroll w-[620px]">
      <div className="w-[] bg-transparent">
        <div className="w-[600px] mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-2xl px-6 pb-8">
            <h2 className="text-xl  font-medium mb-4">Edit Invoice</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="recipientEmail"
                  className="block text-sm font-medium mb-2"
                >
                  Recipient Email
                </label>
                <input
                  type="email"
                  name="recipientEmail"
                  id="recipientEmail"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="email@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-sm font-medium mb-2"
                >
                  Project Details
                </label>
                <textarea
                  name="projectDetails"
                  id="projectDetails"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Project Details"
                ></textarea>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="issuedDate"
                    className="block text-sm font-medium mb-2"
                  >
                    Issued Date
                  </label>
                  <input
                    type="date"
                    name="issuedDate"
                    id="issuedDate"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="dueDate"
                    className="block text-sm font-medium mb-2"
                  >
                    Due Date
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="invoiceFrom"
                    className="block text-sm font-medium mb-2"
                  >
                    Invoice From
                  </label>
                  <input
                    type="text"
                    name="invoiceFrom"
                    id="invoiceFrom"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="invoiceTo"
                    className="block text-sm font-medium mb-2"
                  >
                    Invoice To
                  </label>
                  <input
                    type="text"
                    name="invoiceTo"
                    id="invoiceTo"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-xl font-medium mb-4">Items Details</h2>
            <div className="flex-col">
              <div className="flex bg-[#333333] gap-28 p-3 rounded-t-lg">
                <div className="text-sm font-medium">Item</div>
                <div className="text-sm font-medium">Qty</div>
                <div className="text-sm font-medium">Cost</div>
                <div className="text-sm font-medium">Amount</div>
              </div>
              <div className="flex gap-10 p-3 shadow-md rounded-b-lg">
                <p>Business Flyer Design</p>
                <p>02</p>
                <p>N20,000.00</p>
                <p>N40,000</p>
              </div>
            </div>
          </div>
          <button className="mt-7 bg-[#FFD700] flex p-3 px-56">
            Send Invoice
          </button>
        </div>
      </div>
    </section>
  );
}

export default ClickBudgets;
