import React from "react";
import TransactionRow from "./TransactionRow";

const TransactionList = ({
  transactions,
  role,
  handleEdit,
  handleDelete,
}) => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Type</th>
          {role === "admin" && <th>Action</th>}
        </tr>
      </thead>

      <tbody>
        {transactions.map((t) => (
          <TransactionRow
            key={t.id}
            t={t}
            role={role}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}

        {transactions.length === 0 && (
          <tr>
            <td colSpan="5" className="text-center">
              No transactions 🚫
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TransactionList;