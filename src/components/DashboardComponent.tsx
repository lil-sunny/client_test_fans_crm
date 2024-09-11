import React from "react";
import useUsers from "../hooks/useUsers";

const DashboardComponent: React.FC = () => {
  const { users, loading, error } = useUsers();

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-scroll">
      <div className="grid grid-cols-2 gap-6">
        {/* Chart 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Chart 1</h2>
          <div className="h-64 bg-gray-200 flex justify-center items-center">
            Placeholder for Chart 1
          </div>
        </div>

        {/* Chart 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Chart 2</h2>
          <div className="h-64 bg-gray-200 flex justify-center items-center">
            Placeholder for Chart 2
          </div>
        </div>

        <div className="p-6">
          <div className="max-w-lg mx-auto">
            {users.map((user) => (
              <div className="bg-white shadow-lg rounded-lg p-6 mb-4 flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">
                    {user.name} {user.last_name}
                  </h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
