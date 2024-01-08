import { useEffect, useState } from "react";

export default function Edit({
  editData,
  setEditdata,
  setUpdateData,
  total,
  setTotal,
}) {
  const [number, setNumber] = useState(null);
  useEffect(
    (_) => {
      if (null === editData) {
        return;
      }
      setNumber(editData.number);
    },
    [editData]
  );
  if (null === editData) {
    return null;
  }

  const save = (_) => {
    setUpdateData({ ...editData, number });
    setEditdata(null);
    setTotal(number + total);
    if (null === editData) {
      return null;
    }
  };

  // function summ() {
  //   setTotal(number + total);
  //   setEditdata(null);
  // }
  // function minus() {
  //   setTotal(total - number);
  //   setEditdata(null);
  // }

  //Save button
  return (
    <div class="modal" tabindex="-1">
      <div class="modal-dialog  modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              onClick={(_) => setEditdata(null)}
            ></button>
          </div>
          <div class="modal-body">
            <p>Edit</p>
            <input
              type="number"
              placeholder="0 eu."
              value={number}
              onChange={(e) => setNumber(+e.target.value)}
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={(_) => setEditdata(null)}
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary" onClick={save}>
              Summ
            </button>
            {/* <button type="button" class="btn btn-primary" onClick={minus}>
              Minus
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
