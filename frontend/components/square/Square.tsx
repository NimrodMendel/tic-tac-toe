import React from "react";

export const Square = (prop: {
  value: String;
  makeMove: Function;
  idx: Number;
}) => {
  const { value, makeMove, idx } = prop;
  const onClick = () => {
    makeMove(idx);
  };

  return (
    <div>
      <button
        name={String(idx)}
        onClick={onClick}
        className="border border-black w-full h-full text-3xl hover:bg-green-200"
      >
        {value}
      </button>
    </div>
  );
};
