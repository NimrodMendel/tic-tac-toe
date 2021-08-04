import { Board } from "../components/Board/Board";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex justify-center mt-4 mb-10">
        <h1 className="text-7xl">Tic Tac Toe</h1>
      </div>
      <Board />
    </>
  );
}
