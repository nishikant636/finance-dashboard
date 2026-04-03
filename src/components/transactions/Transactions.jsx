import React, { useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import TransactionControls from "./TransactionControls";

const Transactions = ({ transactions, setTransactions, role }) => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "income",
  });

  const [editId, setEditId] = useState(null);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure?")) return;
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const handleEdit = (t) => {
    setForm(t);
    setEditId(t.id);
  };

  const handleSubmit = () => {
    if (!form.date || !form.amount || !form.category) {
      alert("Fill all fields");
      return;
    }

    const amount = Number(form.amount);

    if (editId) {
      const updated = transactions.map((t) =>
        t.id === editId ? { ...t, ...form, amount } : t
      );
      setTransactions(updated);
      setEditId(null);
    } else {
      const newTransaction = {
        id: Date.now(),
        ...form,
        amount,
      };
      setTransactions([...transactions, newTransaction]);
    }

    setForm({
      date: "",
      amount: "",
      category: "",
      type: "income",
    });
  };

  const filtered = transactions.filter(
    (t) =>
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.type.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "asc"
      ? a.amount - b.amount
      : b.amount - a.amount
  );

  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Transactions ({sorted.length})
      </h2>

      <TransactionControls
        search={search}
        setSearch={setSearch}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {role === "admin" && (
        <TransactionForm
          form={form}
          setForm={setForm}
          handleSubmit={handleSubmit}
          editId={editId}
          setEditId={setEditId}
        />
      )}

      <TransactionList
        transactions={sorted}
        role={role}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Transactions;