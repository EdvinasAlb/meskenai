import C from "./C";
import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export default function B({ counter1 }) {
  const { color } = useContext(ColorContext);
  return (
    <div
      style={{
        backgroundColor: color + "55",
      }}
      className="big-bin"
    >
      <h1>B</h1>
      <C counter1={counter1} />
    </div>
  );
}
