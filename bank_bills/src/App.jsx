import { lsRead, lsStore, lsDestroy, lsUpdate } from "./components/lsManager";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import { useEffect, useState } from "react";
import Delete from "./components/Destroy";
import Edit from "./components/Edit";

export default function App() {
  const KEY = "bills";
  const [bills, setBills] = useState([]);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [destroyData, setDestroyData] = useState(null);
  const [editData, setEditdata] = useState(null);
  const [updateData, setUpdateData] = useState(null);
  const [number, setNumber] = useState(null);
  const [total, setTotal] = useState(0);
  //-----------------------------------create
  useEffect((_) => {
    setBills(lsRead(KEY));
  }, []);

  useEffect(
    (_) => {
      if (null === createData) {
        return;
      }
      const id = lsStore(KEY, createData);
      setBills((prevBills) => [...prevBills, { ...createData, id }]);
    },
    [createData]
  );
  //-----------------------------------destroy
  useEffect(
    (_) => {
      if (null === destroyData) {
        return;
      }

      lsDestroy(KEY, destroyData.id);

      setBills((prevBills) =>
        prevBills.filter((bills) => bills.id !== destroyData.id)
      );
      setDeleteData(null);
    },

    [destroyData]
  );
  //-----------------------------------update
  useEffect(
    (_) => {
      if (null === updateData) {
        return;
      }

      lsUpdate(KEY, updateData.id, updateData);

      setBills((prevBills) =>
        prevBills.map((bill) =>
          bill.id === updateData.id
            ? { ...updateData, id: updateData.id }
            : bill
        )
      );
      setEditdata(null);
    },
    [updateData]
  );

  return (
    <>
      <Create setCreateData={setCreateData} />
      <Read
        bills={bills}
        setDeleteData={setDeleteData}
        setEditdata={setEditdata}
        total={total}
      />
      <Delete
        deleteData={deleteData}
        setDeleteData={setDeleteData}
        setDestroyData={setDestroyData}
      />
      <Edit
        editData={editData}
        setEditdata={setEditdata}
        setUpdateData={setUpdateData}
        number={number}
        setNumber={setNumber}
        total={total}
        setTotal={setTotal}
      />
    </>
  );
}
