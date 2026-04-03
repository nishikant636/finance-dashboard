import React from "react";

const TransactionControls = ({
  search,
  setSearch,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="flex gap-2 mb-4">
  <input
    type="text"
    placeholder="Search transactions..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full px-4 py-2 rounded-lg border border-gray-300 
               focus:outline-none focus:ring-2 focus:ring-blue-500 
               focus:border-blue-500 transition duration-200 
               shadow-sm"
  />


      <button
        onClick={() =>
          setSortOrder(sortOrder === "asc" ? "desc" : "asc")
        }
        className="bg-blue-500 text-white px-3 py-2 rounded"
      >
        ₹ {sortOrder === "asc" ? " ↑ " : " ↓ "}
      </button>
    </div>
  );
};

export default TransactionControls;