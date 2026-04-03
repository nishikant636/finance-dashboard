import React from "react";

const Dashboard = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      
     
      <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-gray-500">Total Balance</h2>
        <p className="text-2xl font-bold text-blue-600">
          ₹{balance.toLocaleString()}
        </p>
      </div>

      
      <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-gray-500">Total Income</h2>
        <p className="text-2xl font-bold text-green-600">
          ₹{income.toLocaleString()}
        </p>
      </div>

      
      <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-gray-500">Total Expense</h2>
        <p className="text-2xl font-bold text-red-600">
          ₹{expense.toLocaleString()}
        </p>
      </div>

    </div>
  );
};

export default Dashboard;