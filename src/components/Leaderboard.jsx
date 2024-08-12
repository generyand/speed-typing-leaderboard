import React from "react";
import data from "../utils/data";
import { FaMedal } from "react-icons/fa6";

function Leaderboard() {
  return (
    <div className="mx-auto mt-12 text-white max-w-[1024px] max-h-[768px] overflow-y-auto px-12">
      <h1 className="text-3xl font-bold text-center ">Leaderboard</h1>

      <table className="w-full mx-auto mt-6">
        <thead className="text-xl bg-cyan-600 sticky top-0 bg-opacity-70 backdrop-blur">
          <tr>
            <th className="text-center py-4">Rank</th>
            <th className="text-left py-4">Name</th>
            {/* <th className="text-left py-4">Email</th> */}
            <th className="text-left py-4">Department </th>
            <th className="text-left py-4">Speed</th>
          </tr>
        </thead>
        <tbody className="text-lg w-full">
          {data
            .sort((a, b) => b.speed - a.speed)
            .map((user, index) => (
              <tr key={user.id} className="flex-1 border-b border-slate-700">
                <td className="text-center py-4">{index + 1}</td>

                <td className="flex items-center py-4 font-bold">
                  {index + 1 === 1 ? (
                    <FaMedal className="text-yellow-400" />
                  ) : index + 1 === 2 ? (
                    <FaMedal className="text-gray-400" />
                  ) : index + 1 === 3 ? (
                    <FaMedal className="text-yellow-800" />
                  ) : null}

                  <span className="ml-2">{user.name}</span>
                </td>
                {/* <td>{user.email}</td> */}
                <td className="flex-1 py-4">{user.department}</td>
                <td className="flex-1 py-4">{user.speed} WPM</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
