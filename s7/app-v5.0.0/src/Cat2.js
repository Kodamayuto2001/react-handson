import React, { useState, memo } from "react";

const PureCat = memo(
  ({ name, meow = (f) => f }) => {
    console.log(`rendering ${name}`);

    //  アロー関数は、毎回関数のインスタンスを作成するので、変更されたと認識されてしまう。
    //  そのため、memo関数の第2引数、predicateを設定する
    return <p onClick={() => meow(name)}>{name}</p>;
  },
  (prevProps, nextProps) => prevProps.name === nextProps.name
);

export default function Cat2() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a Cat
      </button>
    </>
  );
}
