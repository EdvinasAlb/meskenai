import { useEffect, useState } from "react";

export default function Edit({ editData, setEditdata, setUpdateData }) {
  const [billName, setBillName] = useState("");
  const [billSurname, setBillSurname] = useState("");
  const [totalMoney, setTotalMoney] = useState(0);
  const [summ, setSumm] = useState("");

  const sum = (_) => {
    if (+summ === undefined) {
      return;
    }
    setTotalMoney(+summ + totalMoney);
  };

  const minus = (_) => {
    if (+summ === undefined) {
      return;
    }
    setTotalMoney(totalMoney - summ);
  };

  useEffect(
    (_) => {
      if (null === editData) {
        return;
      }
      setBillName(editData.billName);
      setBillSurname(editData.billSurname);
      setTotalMoney(editData.totalMoney);
    },
    [editData]
  );
  if (null === editData) {
    return null;
  }

  const save = (_) => {
    setUpdateData({ ...editData, totalMoney, billName, billSurname });
    setEditdata(null);
    if (null === editData) {
      return null;
    }
    setSumm("");
  };

  return (
    <div className="modal">
      <div className="modal-dialog  modal-dialog-centered">
        <div
          className="modal-content"
          style={{
            borderRadius: "20px",
          }}
        >
          <div
            className="modal-body"
            style={{
              overflow: "hidden",
              height: "350px",
              background: "#ebe3d5",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="edit--modol__badge"
              onClick={(_) => setEditdata(null)}
            >
              ✖
            </button>
            <div className="edit--modal__name" style={{}}>
              {billName} {billSurname}
            </div>
            <div className="edit--modal__money">{totalMoney}</div>
            <input
              type="number"
              value={summ}
              onChange={(e) => setSumm(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20px",
              }}
            >
              <button class="edit--module__btn" onClick={sum}>
                ➕
              </button>
              <button class="edit--module__btn" onClick={minus}>
                ➖
              </button>
            </div>
            <button
              class="edit--module__btn"
              style={{ position: "absolute", bottom: "10px" }}
              onClick={save}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
