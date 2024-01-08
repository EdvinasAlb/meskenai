import { useState } from "react";

export default function Create({ setCreateData }) {
  const [billName, setBillName] = useState("");
  const [billSurname, setBillSurname] = useState("");

  const handleSubmit = (_) => {
    setCreateData({ billName, billSurname });
    setBillName("");
    setBillSurname("");
  };

  return (
    <div className="create-form">
      <div className="create-form__container">
        <input
          type="text"
          placeholder="Name"
          value={billName}
          onChange={(e) => setBillName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          value={billSurname}
          onChange={(e) => setBillSurname(e.target.value)}
        />
        <button onClick={handleSubmit}>Create</button>
      </div>
    </div>
  );
}
