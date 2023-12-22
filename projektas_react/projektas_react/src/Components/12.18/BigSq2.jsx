import randomColor from "../../funkcijos/randomColor";

export default function BigSq2({ sq2, setSq2 }) {
  const change2 = (_) => {
    setSq2(randomColor());
  };
  return (
    <div
      className="square big"
      style={{
        backgroundColor: sq2 + "66",
        border: "1px solid" + sq2,
      }}
      onClick={change2}
    >
      <h1>This is BigSq 2</h1>
    </div>
  );
}
