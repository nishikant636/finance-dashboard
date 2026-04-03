import React from "react";

const Insights = ({ transactions }) => {
  
  const expenses = transactions.filter((t) => t.type === "expense");

  
  const categoryMap = {};

  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + Number(t.amount); 
  });

  
  let highestCategory = "";
  let highestAmount = 0;

  for (let category in categoryMap) {
    if (categoryMap[category] > highestAmount) {
      highestAmount = categoryMap[category];
      highestCategory = category;
    }
  }

  
  const totalExpense = expenses.reduce(
    (sum, t) => sum + Number(t.amount),
    0
  );

  
  const avgExpense =
    expenses.length > 0
      ? totalExpense / expenses.length
      : 0;

  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Insights</h2>

      {expenses.length > 0 ? (
        <div className="space-y-3">

          
          <div>
            <p className="text-gray-600">
              Highest Spending Category:
            </p>
            <p className="text-xl font-bold text-red-600">
              {highestCategory} (₹
              {highestAmount.toLocaleString()})
            </p>
          </div>

          
          <div>
            <p className="text-gray-600">Total Expense:</p>
            <p className="text-lg font-semibold text-red-500">
              ₹{totalExpense.toLocaleString()}
            </p>
          </div>

          
          <div>
            <p className="text-gray-600">Average Expense:</p>
            <p className="text-lg font-semibold text-blue-600">
              ₹{avgExpense.toFixed(2)}
            </p>
          </div>

        </div>
      ) : (
        <p className="text-gray-500">
          No expense data available 🚫
        </p>
      )}
    </div>
  );
};

export default Insights;