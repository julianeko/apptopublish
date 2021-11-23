import React, { useContext } from "react";
import styled from "styled-components";
import "./App.css";
import { Context } from "./App";
import Input from "./Input.js";
import Onet from "./Onet";

// var todos = [
//   { id: 1, name: "abc" },
//   { id: 2, name: "bnm" },
// ];
// export const Context = createContext();

function Todo() {
  const value = useContext(Context);
  // const [todos, setTodos] = useState([]);
  let arr = value.todos.map((element) => (
    <Onet
      todo={element.name}
      vid={element.id}
      vdeleteItem={deleteItem}
      key={element.id}
    />
  ));
  console.log(arr);

  // useEffect(() => {
  //   const storage = localStorage.getItem("todos");
  //   if (storage) {
  //     setTodos(JSON.parse(localStorage.getItem("todos")));
  //   }
  // }, []);
  // useEffect(() => {
  //   // Ausführung bei Änderung des todos-State ([todos])

  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  function deleteItem(idtobedeleted) {
    var filtered = value.todos.filter(
      (element) => element.id !== idtobedeleted
    );
    // localStorage.setItem("todos", JSON.stringify(filtered));

    console.log(filtered);
    value.setTodos(filtered);
  }

  // function findName() {
  //   var hopeName = todos.find((name) => name.name == name.id);
  // }
  // console.log(hopeName);

  return (
    <div>
      {/* <Context.Provider value={{ todos, setTodos }}> */}
      <AeussereListe>{arr}</AeussereListe>
      <Input />

      {/* Hier uebergibt man die setState Funtkion mit parameter={} und das Input/Die Input Funktion wird hier aufgerufen*/}
      {/* </Context.Provider> */}
    </div>
  );
}

export default Todo;

const AeussereListe = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
