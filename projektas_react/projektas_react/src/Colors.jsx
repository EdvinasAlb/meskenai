import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import Create from "./Components/colors/Create";
import { useCallback, useEffect, useState } from "react";
import {
  lsDestroy,
  lsRead,
  lsStore,
  lsUpdate,
} from "./Components/colors/lsManager";
import Read from "./Components/colors/Read";
import Delete from "./Components/colors/Destroy";
import Edit from "./Components/colors/Edit";
import Messages from "./Components/colors/Messages";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function App() {
  const KEY = "colors";
  const [colors, setColors] = useState([]); //readData
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [destroyData, setDestroyData] = useState(null);
  const [editData, setEditdata] = useState(null);
  const [updateData, setUpdateData] = useState(null);
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((type, text) => {
    const id = uuidv4();
    setMessages((prevMessages) => [{ id, type, text }, ...prevMessages]);
    setTimeout((_) => {
      setMessages((prevMessages) => prevMessages.filter((m) => m.id !== id));
    }, 3000);
  }, []);

  useEffect((_) => {
    setColors(lsRead(KEY));
  }, []);

  useEffect(
    (_) => {
      if (null === createData) {
        return;
      }
      const id = lsStore(KEY, createData);
      setColors((prevColors) => [...prevColors, { ...createData, id }]);

      addMessage("light", "Color create succesfully");
      //get name for  color
      //remowe # from hex
      const color = createData.color.replace("#", "");
      axios.get(`https://www.thecolorapi.com/id?hex=${color}`).then((res) => {
        const name = res.data.name.value;
        const newData = { ...createData, id, name };
        lsUpdate(KEY, id, newData);
        setColors((prevColors) =>
          prevColors.map((color) => (color.id === id ? newData : color))
        );
        addMessage("dark", "Color name updated from API");
      });
    },
    [createData, setColors, addMessage]
  );

  useEffect(
    (_) => {
      if (null === destroyData) {
        return;
      }

      lsDestroy(KEY, destroyData.id);

      setColors((prevColors) =>
        prevColors.filter((colors) => colors.id !== destroyData.id)
      );
      setDeleteData(null);

      addMessage("danger", "Color deleted succesfully");
    },

    [destroyData, setColors, addMessage]
  );

  useEffect(
    (_) => {
      if (null === updateData) {
        return;
      }
      const id = updateData.id;
      lsUpdate(KEY, id, updateData);

      setColors((prevColors) =>
        prevColors.map((color) =>
          color.id === id ? { ...updateData, id } : color
        )
      );
      setEditdata(null);

      addMessage("light", "Color update successfully");

      const color = updateData.color.replace("#", "");
      axios.get(`https://www.thecolorapi.com/id?hex=${color}`).then((res) => {
        const name = res.data.name.value;
        const newData = { ...updateData, id, name };
        lsUpdate(KEY, id, newData);
        setColors((prevColors) =>
          prevColors.map((color) => (color.id === id ? newData : color))
        );
        addMessage("dark", "Color name updated from API");
      });
    },
    [updateData, setColors, addMessage]
  );

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <Create setCreateData={setCreateData} />
          </div>
          <div className="col-7">
            <Read
              colors={colors}
              setDeleteData={setDeleteData}
              setEditdata={setEditdata}
            />
          </div>
        </div>
      </div>
      <Delete
        deleteData={deleteData}
        setDeleteData={setDeleteData}
        setDestroyData={setDestroyData}
      />
      <Edit
        editData={editData}
        setEditdata={setEditdata}
        setUpdateData={setUpdateData}
      />
      <Messages messages={messages} />
    </>
  );
}
