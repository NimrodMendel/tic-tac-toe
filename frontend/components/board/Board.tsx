import React, { useState, useEffect } from "react";
import { loadBoard, saveBoard } from "../../pages/api/api";
import { Square } from "../Square/Square";

const initialBoard = new Array(9).fill("");

export const Board = () => {
  const [board, setBoard] = useState(initialBoard); //  Set initial board

  const setValue = (idx: Number, value: String): void => {
    //setBoard([]);
  };

  const getBoardData = async () => {
    const data = await loadBoard();
    console.log(data);
    //await setBoard(["X", "X", "O", "O", "X", "O", "O", "O", "X"]);
  };

  const save = () => {
    console.log("Board saved");
    saveBoard(board, "X");
  };

  useEffect(() => {
    getBoardData();
  }, []);

  return (
    <>
      <div className="bg-gray-300 w-80 h-80 grid grid-cols-3 mx-auto my-auto gap-x-0">
        {board.map((square, idx) => (
          <>
            <Square key={idx} value={square} setValue={setValue} idx={idx} />
          </>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={save}
          className="py-2 px-3 rounded-full bg-blue-300 shadow-2xl duration-500 ease-in-out hover:bg-green-500 hover:text-white"
        >
          Save Board
        </button>
      </div>
    </>
  );
};
