import React from "react";

const Navbar = ({ role, setRole }) => {
  return (
    <div className="relative flex items-center bg-white px-6 py-4 rounded-xl shadow-md">
  
  
  <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-semibold text-blue-600">
     Finance Dashboard
  </h1>

  
  <div className="ml-auto flex items-center gap-2">
    <span className="text-gray-500 text-sm">Role:</span>

    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="border p-2 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  </div>

</div>
  );
};

export default Navbar;