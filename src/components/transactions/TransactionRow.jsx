import React from "react";

const TransactionRow = ({ t, role, handleEdit, handleDelete }) => {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="p-2">{t.date}</td>

      <td
        className={`p-2 font-medium ${
          t.type === "income" ? "text-green-600" : "text-red-600"
        }`}
      >
        ₹{t.amount}
      </td>

      <td className="p-2">{t.category}</td>

      <td className="p-2 capitalize">{t.type}</td>

      {role === "admin" && (
        <td className="p-2 flex gap-2">

          <button
            onClick={() => handleEdit(t)}
            className="px-3 py-1 text-sm font-medium 
                       text-gray-700 border border-gray-300 
                       rounded-md bg-white 
                       hover:bg-gray-100"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(t.id)}
            className="px-3 py-1 text-sm font-medium 
                       text-red-600 border border-red-200 
                       rounded-md bg-red-50 
                       hover:bg-red-100"
          >
            Delete
          </button>

        </td>
      )}
    </tr>
  );
};

export default TransactionRow;