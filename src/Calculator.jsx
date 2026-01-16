import React from "react";
import { useState } from "react";
import "./calculatar.css";

function Calculater() {
  const [data, setData] = useState("");
  const getValue = (event) => {
    setData(data.concat(event.target.value));
  };

  const result = () => {
    setData(eval(data).toString());
  };

  const allClear = () => {
    setData("");
  };

  const back = () => {
    setData(data.slice(0, -1));
  };
  return (
    <>
      <div className="calculatar-container">
        <div>
          <input placeholder="0" value={data} />
        </div>

        <button onClick={getValue} value={"("}>
          (
        </button>
        <button onClick={getValue} value={")"}>
          )
        </button>
        <button onClick={getValue}  value={"%"}>
          %
        </button>
        <button onClick={allClear} value={"AC"}>
          AC
        </button>

        <button onClick={getValue} value={"7"}>
          7
        </button>
        <button onClick={getValue} value={"8"}>
          8
        </button>
        <button onClick={getValue} value={"9"}>
          9
        </button>
        <button onClick={getValue} value={"*"}>
          *
        </button>

        <button onClick={getValue} value={"4"}>
          4
        </button>
        <button onClick={getValue} value={"5"}>
          5
        </button>
        <button onClick={getValue} value={"6"}>
          6
        </button>
        <button onClick={getValue} value={"+"}>
          -
        </button>

        <button onClick={getValue} value={"1"}>
          1
        </button>
        <button onClick={getValue} value={"2"}>
          2
        </button>
        <button onClick={getValue} value={"3"}>
          3
        </button>
        <button onClick={getValue} value={"+"}>
          +
        </button>

        <button onClick={back} value={"back"}>
          back
        </button>
        <button onClick={getValue} value={"0"}>
          0
        </button>
        <button onClick={getValue} value={"/"}>
          /
        </button>
        <button onClick={result} className={"equal"}>
          =
        </button>
      </div>
    </>
  );
}

export default Calculater;
