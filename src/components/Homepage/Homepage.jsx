import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FaGithub, FaCoffee } from 'react-icons/fa'


function HomePage() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleRoomIdGenerate = () => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const timestamp = Date.now().toString().substring(-4);
    setRoomId(randomId + timestamp);
  };

  const handleOneAndOneCall = () => {
    if (!roomId) {
      alert("Please Generate Room Id First");
      return;
    }
    navigate(`room/${roomId}?type=one-on-one`);
  };

  const handleGroupCall = () => {
    if (!roomId) {
      alert("Please Generate Room Id First");
      return;
    }
    navigate(`room/${roomId}?type=group-call`);
  };

  return (
    <div className="flex items-center justify-center min-h-64 bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faVideo} size="3x" className="text-green-500 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Welcome to Meetup</h1>
          <p className="text-gray-600 text-center mb-6">
            Start a video call with a randomly generated Room ID
          </p>

          <div className="flex w-full mb-4 flex-col">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-l-lg text-gray-700 text-center"
              placeholder="Generated Room ID"
              value={roomId}
              readOnly
            />
            <button
              className="px-5 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600    "
              onClick={handleRoomIdGenerate}
            >
              Generate
            </button>
          </div>

          <div className="flex flex-col gap-3 w-full sm:flex-row">
            <button
              className="flex-1 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={handleOneAndOneCall}
              disabled={!roomId}
            >
              One-on-One Call
            </button>
            <button
              className="flex-1 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={handleGroupCall}
              disabled={!roomId}
            >
              Group Call
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 text-center">
          <p className="text-gray-600 mb-4">
            Video conferencing and calling App Generate ID to get started 
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/swappy-2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-500 transition-colors duration-300"
            >
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.buymeacoffee.com/swapnil2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-500 transition-colors duration-300 flex items-center"
            >
              <FaCoffee size={24} className="mr-2" />
              <span>Buy me a coffee</span>
            </a>
          </div>
        </div>
    </div>

  );
}

export default HomePage;
