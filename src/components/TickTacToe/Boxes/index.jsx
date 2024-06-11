
import React, { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";

const Boxes = () => {
  const [boxes, setBoxes] = useState([]);
  const [turnofPlayer, setTurnOfPlayer] = useState(true);

  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const handleGame = (index) => {
    if (boxes[index] === null) {
      const newBoxes = [...boxes];
      newBoxes[index] = turnofPlayer ? 'O' : 'X';
      setBoxes(newBoxes);
      checkWinner(newBoxes); 
      setTurnOfPlayer(!turnofPlayer);
     
    }
  };
 
  const checkWinner = (newBoxes) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        newBoxes[a] &&
        newBoxes[a] === newBoxes[b] &&
        newBoxes[a] === newBoxes[c]
      ) {
        console.log(`Winner: ${newBoxes[a]}`);
        return;
      }
    }
  };

  useEffect(() => {
    const newBoxes = Array(9).fill(null);
    setBoxes(newBoxes);
  }, []);

  return (
    <>
     {boxes.map((value , index) => (
        <div
          key={index}
          className="w-[24.5%] flex justify-center"
          onClick={() => handleGame(index)}
        >
          <div className="flex justify-center items-center border rounded-lg p-1 bg-yellow-400 w-[100px] h-[100px] shadow-md shadow-black hover:scale-105 transition-transform">
            <p className="text-black text-2xl font-medium">{value === 'O' ? <FaRegCircle /> : value === 'X' ? <RiCloseLargeLine /> : null}</p>
          </div>
        </div>
      ))}
    </>
     

  );
};

export default Boxes;