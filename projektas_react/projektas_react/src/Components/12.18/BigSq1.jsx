import randomColor from "../../funkcijos/randomColor";

export default function BigSq1({ sq1, setSq1 }) {
  const change2 = (_) => {
    setSq1(randomColor());
  };

  return (
    <div
      className="square big"
      style={{
        backgroundColor: sq1 + "66",
        border: "1px solid" + sq1,
      }}
      onClick={change2}
    >
      <h1>This is BigSq 1</h1>
    </div>
  );
}
