export function Show({ color, setDeleteData, setEditdata }) {
  return (
    <div className="showline">
      <div
        style={{
          color: color.color,
          backgroundColor: color.color,
          width: color.size / 2 + "px",
          height: color.size / 2 + "px",
        }}
      ></div>
      <div>{color.name}</div>
      <div>
        <button
          style={{ margin: "10px" }}
          onClick={(_) => setDeleteData(color)}
        >
          Delete
        </button>
        <button style={{ margin: "10px" }} onClick={(_) => setEditdata(color)}>
          Edit
        </button>
      </div>
    </div>
  );
}
