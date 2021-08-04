import axios from "axios";

const apiURL = "http://localhost:5000";

export const saveBoard = async (board: Array<String>, nextTurn: String) => {
  await console.log(board, nextTurn);
};

export const loadBoard = async () => {
  const { data } = await axios.get(apiURL, {
    headers: {
      "Content-type": "application/json",
    },
  });

  return data;
};
