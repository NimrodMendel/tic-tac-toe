import axios from "axios";

const apiURL = "http://localhost:5000/api";

export const saveBoard = async (board: Array<string>, nextTurn: string) => {
  const data = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify({
      board: board,
      nextPlayer: nextTurn,
    }),
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  });

  console.log(data);
  return data;
};

export const loadBoard = async () => {
  const { data } = await axios.get(apiURL, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return data;
};
