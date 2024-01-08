export function Show({ bill, setDeleteData, setEditdata }) {
  return (
    <div className="bill-card">
      <button
        className="bill-card-right__badge"
        onClick={(_) => setDeleteData(bill)}
      >
        ✖
      </button>

      <div className="bill-card__text">
        {bill.billName} {bill.billSurname}
      </div>
      <div className="bill-card__number">{bill.totalMoney}</div>
      <button className="bill-card_btn" onClick={(_) => setEditdata(bill)}>
        ➕ ➖
      </button>
    </div>
  );
}
