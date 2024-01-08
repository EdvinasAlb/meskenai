import { Show } from "./Show";

export default function Read({ bills, setDeleteData, setEditdata, total }) {
  return (
    <div className="card mt-5">
      <div className="card-header">
        <h2>Bilss</h2>
      </div>
      <div className="card-body">
        <ul
          className="list-group"
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {bills.map((bill) => (
            <li key={bill.id}>
              <Show
                bill={bill}
                setDeleteData={setDeleteData}
                setEditdata={setEditdata}
                total={total}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
