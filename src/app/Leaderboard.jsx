import React from "react";

const Leaderboard = () => {
  const leaderboardData = [
    {
      rank: 1,
      name: "Alice",
      score: 950,
      image: "https://i.pravatar.cc/50?img=1",
    },
    {
      rank: 2,
      name: "Bob",
      score: 900,
      image: "https://i.pravatar.cc/50?img=2",
    },
    {
      rank: 3,
      name: "Charlie",
      score: 870,
      image: "https://i.pravatar.cc/50?img=3",
    },
    {
      rank: 4,
      name: "David",
      score: 830,
      image: "https://i.pravatar.cc/50?img=4",
    },
    {
      rank: 5,
      name: "Eve",
      score: 800,
      image: "https://i.pravatar.cc/50?img=5",
    },
  ];
  return (
    <div>
      <div className="w-10/12 my-10 mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-bold text-center mb-4">🏆 Leaderboard</h2>
        <ul>
          {leaderboardData.map((player) => (
            <li
              key={player.rank}
              className={`flex items-center justify-between px-4 py-3 rounded-md mb-2 text-lg font-medium shadow-md 
              ${
                player.rank === 1
                  ? "bg-yellow-300"
                  : player.rank === 2
                  ? "bg-gray-300"
                  : player.rank === 3
                  ? "bg-orange-300"
                  : "bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <span className="text-gray-900 font-semibold">
                  {player.name}
                </span>
              </div>
              <span className="text-blue-600 font-bold">{player.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
