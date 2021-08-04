import React from "react";

export const Square = (prop: {
  value: String;
  setValue: Function;
  idx: Number;
}) => {
  const onClick = (e: any) => {
    console.log(e.target.name, e.target.textContent);
    //prop.setValue(e.target.name, e.target.textContent);
  };

  return (
    <div>
      <button
        name={String(prop.idx)}
        onClick={onClick}
        className="border border-black w-full h-full text-3xl hover:bg-green-200"
      >
        {prop.value}
      </button>
    </div>
  );
};
