import Head from "next/head";
import Image from "next/image";
import { Board } from "../components/board/board";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className="text-blue-800 text-5xl md:text-9xl shadow-lg">
        Hello World
      </h1>
      <Board text={"I'm a board"} />
    </>
  );
}
