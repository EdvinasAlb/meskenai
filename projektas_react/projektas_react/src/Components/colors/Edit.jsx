import { useEffect, useState } from "react";
export default function Edit({ editData, setEditdata, setUpdateData }) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  useEffect(
    (_) => {
      if (null === editData) {
        return;
      }
      setColor(editData.color);
      setSize(editData.size);
    },
    [editData]
  );
  if (null === editData) {
    return null;
  }

  const save = (_) => {
    setUpdateData({ ...editData, color, size: parseInt(size) });
    setEditdata(null);
    if (null === editData) {
      return null;
    }
  };
  return (
    <div className="modal">
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={(_) => setEditdata(null)}
            ></button>
          </div>
          <div className="modal-body">
            <p>Edit</p>
          </div>

          <div className="mb-3" style={{ paddingLeft: "30px" }}>
            <label className="form-label">Color code</label>
            <input
              type="color"
              className="form-control form-control-color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ padding: "30px" }}>
            <label className="form-label">Square size: {size} px</label>
            <input
              type="range"
              className="form-range"
              min="100"
              max="300"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={(_) => setEditdata(null)}
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary" onClick={save}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
