import React, { useState } from "react";
import { initialTransactions } from "./data/transactions";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Charts from "./components/Charts";
import Insights from "./components/Insights";


import Transactions from "./components/transactions/Transactions";

const App = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [role, setRole] = useState("viewer");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      
     
      <Navbar role={role} setRole={setRole} />

     
      <Dashboard transactions={transactions} />

     
      <Transactions
        transactions={transactions}
        setTransactions={setTransactions}
        role={role}
      />

      
      <div className="mt-6">
        <Charts transactions={transactions} />
      </div>

      
      <div className="mt-6">
        <Insights transactions={transactions} />
      </div>

    </div>
  );
};

export default App;