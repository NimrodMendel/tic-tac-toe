import axios from "axios";

const apiURL = "http://localhost:5000/api";

export const saveBoard = async (
  board: Array<string>,
  nextTurn: string
): Promise<string> => {
  const { data } = await axios.post(
    apiURL,
    JSON.stringify({ board: board, nextPlayer: nextTurn }),
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  return data.message;
};

export const loadBoard = async () => {
  const { data } = await axios.get(apiURL, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return data;
};
