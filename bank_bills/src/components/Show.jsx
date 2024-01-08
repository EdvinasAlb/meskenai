export function Show({ bill, setDeleteData, setEditdata, total }) {
  return (
    <div className="bill-card">
      <button className="bill-card__badge" onClick={(_) => setDeleteData(bill)}>
        X
      </button>
      <label>
        {bill.billName} {bill.billSurname}
      </label>
      <label>{total}</label>
      <div className="bill-card__btn">
        <button onClick={(_) => setEditdata(bill)}>*</button>
      </div>
    </div>
  );
}
