import React from "react";

const TransactionForm = ({
  form,
  setForm,
  handleSubmit,
  editId,
  setEditId,
}) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">
        {editId ? "Edit Transaction" : "Add Transaction"}
      </h3>

      <div className="flex flex-wrap gap-2">
        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="border p-2 rounded"
        />

        <select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
          className="border p-2 rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editId ? "Update" : "Add"}
        </button>

        {editId && (
          <button
            onClick={() => {
              setEditId(null);
              setForm({
                date: "",
                amount: "",
                category: "",
                type: "income",
              });
            }}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionForm;