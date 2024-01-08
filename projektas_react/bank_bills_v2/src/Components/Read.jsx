import { Show } from "./Show";

export default function Read({ bills, setDeleteData, setEditdata }) {
  let sortedBills;

  sortedBills = bills
    .slice()
    .sort((a, b) => a.billSurname.localeCompare(b.billSurname));

  return (
    <div className="bill-list">
      <div className="bill-list__body">
        <ul>
          {sortedBills.map((bill) => (
            <li key={bill.id}>
              <Show
                bill={bill}
                setDeleteData={setDeleteData}
                setEditdata={setEditdata}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
