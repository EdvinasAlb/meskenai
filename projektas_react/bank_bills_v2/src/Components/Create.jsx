import { useState } from "react";

export default function Create({ setCreateData }) {
  const [billName, setBillName] = useState("");
  const [billSurname, setBillSurname] = useState("");
  const [totalMoney, setTotalMoney] = useState(0);

  const handleSubmit = (_) => {
    setCreateData({ billName, billSurname, totalMoney });
    setBillName("");
    setBillSurname("");
    setTotalMoney(0);
  };
  return (
    <div className="create-form">
      <div className="create-form__container">
        <input
          type="text"
          placeholder="First name"
          value={billName}
          onChange={(e) => setBillName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          value={billSurname}
          onChange={(e) => setBillSurname(e.target.value)}
        />
        <button onClick={handleSubmit}>CREATE</button>
      </div>
    </div>
  );
}
