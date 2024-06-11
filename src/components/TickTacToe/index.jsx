import React from "react";
import Boxes from "./Boxes";

const Game = () => {
  return (
    <>
      <div class="msg-container hide">
        <p id="msg">Winner</p>
        <button id="new-btn">New Game</button>
      </div>
      <div className="flex justify-center text-center">
        <h1 className="text-4xl font-medium border border-slate-900 p-2 w-[300px] mt-2 text-gray-700 ">
          {" "}
          <span className="text-red-600">T</span>IC{" "}
          <span className="text-red-600">T</span>AC{" "}
          <span className="text-red-600">T</span>OE
        </h1>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="flex flex-wrap justify-center items-center w-[35%] gap-2 ">
          <Boxes />
        </div>
      </div>
      <div className="flex justify-center text-center">
        <button
          className="text-2xl font-medium border border-slate-900 p-2 w-[120px] mt-5 text-gray-700 "
          id="reset-btn"
        >
          Reset
        </button>
      </div>
    </>
  );
};
export default Game;
