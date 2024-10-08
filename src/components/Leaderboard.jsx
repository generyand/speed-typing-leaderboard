import React from "react";
import data from "../utils/data";
import { FaMedal } from "react-icons/fa6";

function Leaderboard() {
  return (
    <div className="mx-auto sm:py-12 mt-6 text-white max-w-[1024px] max-h-[768px] overflow-y-auto px-2 sm:px-4 md:px-12 pb-6">
      <h1 className="sm:text-3xl text-lg font-bold text-center ">Speed Typing Leaderboard</h1>

      <table className="w-full mx-auto mt-6">
        <thead className="sm:text-xl text-base border-b sticky top-0 sm:-top-12 bg-cyan-600 backdrop-blur bg-opacity-80">
          <tr>
            <th className="text-center py-4 px-2">Rank</th>
            <th className="text-left py-4">Name</th>
            {/* <th className="text-left py-4">Email</th> */}
            {/* <th className="text-left py-4">Department </th> */}
            <th className="text-left py-4">Speed</th>
          </tr>
        </thead>
        <tbody className="text-lg w-full">
          {data
            .sort((a, b) => b.speed - a.speed)
            .map((user, index) => (
              <tr key={user.id} className="border-b border-slate-700 text-xs sm:text-base">
                <td className="text-center py-4">{index + 1}</td>

                <td className="flex items-center py-4 font-bold flex  max-w-[200px]">
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
                {/* <td className="flex-1 py-4">{user.department}</td> */}
                <td className="flex-1 py-4 ">{user.speed} WPM</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
