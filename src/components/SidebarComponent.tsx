import React from "react";

const SidebarComponent: React.FC = () => {
  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col">
      <h1 className="text-2xl font-bold p-4">Dashboard</h1>
      <nav className="flex-1 px-2">
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          Home
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          Analytics
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          Reports
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          Settings
        </a>
      </nav>
    </div>
  );
};

export default SidebarComponent;