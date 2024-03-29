import React, { useState, useEffect } from "react";
import { loadBoard, saveBoard } from "../../lib/api";
import { Square } from "../Square/Square";

const initialBoard: Array<string> = new Array(9).fill("");

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const Board = () => {
  const [board, setBoard] = useState(initialBoard); //  Set initial board
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ player: "", gameResult: "" });

  const makeMove = (idx: number): void => {
    setBoard((board) => {
      return board.map((val, index) => {
        if (index === idx && val === "") {
          return player;
        }
        return val;
      });
    });
  };

  const determineWinner = () => {
    winningPatterns.forEach((pattern: Array<number>): void => {
      const firstPlayer: string = board[pattern[0]];

      if (!firstPlayer) {
        return;
      }

      let foundWinner = true;

      pattern.forEach((square: number) => {
        if (board[square] !== firstPlayer) {
          foundWinner = false;
        }
      });

      if (foundWinner) {
        setResult({ player: firstPlayer, gameResult: "Win" });
      }
    });
  };

  const determineTie = (): void => {
    let filled: boolean = true;

    board.forEach((square: string) => {
      if (!square) {
        filled = false;
      }
    });

    if (filled) {
      setResult({ player: "NA", gameResult: "Tie" });
    }
  };

  const getBoardData = async () => {
    const { data } = await loadBoard();
    setBoard(data.board);
  };

  const restartGame = (): void => {
    setBoard(initialBoard);
    setPlayer("O");
  };

  const saveGame = async () => {
    const data = await saveBoard(board, player);
    alert(data);
  };

  useEffect(() => {
    determineWinner();
    determineTie();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.player !== "NA" && result.gameResult === "Win") {
      alert(`Player: ${result.player} has one the game!`);
    } else if (result.player === "NA" && result.gameResult === "Tie") {
      alert("It's a tie!");
    }
    restartGame();
    setPlayer("O");
  }, [result]);

  return (
    <>
      <div className="bg-gray-300 w-80 h-80 grid grid-cols-3 mx-auto my-auto gap-x-0">
        {board.map((square, idx) => (
          <>
            <Square key={idx} value={square} makeMove={makeMove} idx={idx} />
          </>
        ))}
      </div>
      <div className="flex mx-auto justify-center mt-10">
        <button
          onClick={saveGame}
          className="py-2 px-3 mr-5 rounded-full bg-green-300 shadow-2xl duration-500 ease-in-out hover:bg-green-500 hover:text-white"
        >
          Save Board
        </button>
        <button
          onClick={restartGame}
          className="py-2 px-3 mr-5 rounded-full bg-red-300 shadow-2xl duration-500 ease-in-out hover:bg-red-500 hover:text-white"
        >
          Restart Game
        </button>
        <button
          onClick={getBoardData}
          className="py-2 px-3 rounded-full bg-yellow-300 shadow-2xl duration-500 ease-in-out hover:bg-yellow-500 hover:text-white"
        >
          Load Last Board
        </button>
      </div>
    </>
  );
};
