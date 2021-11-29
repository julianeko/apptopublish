import React, { useRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Context } from "./App";
import styled from "styled-components";
import "./App.css";

function Input() {
  const value = useContext(Context);
  const eingabeFeld = useRef();
  console.log(value);

  function klickMich() {
    if (eingabeFeld.current.value !== "") {
      // console.log("click");

      // console.log(eingabeFeld.current.value);

      value.setTodos([
        { id: uuidv4(), name: eingabeFeld.current.value, done: false },
        ...value.todos,
      ]);

      // localStorage.setItem("todos", JSON.stringify(value.todos));

      // const test = localStorage.getItem("todos");

      eingabeFeld.current.value = "";
    }
  }
  return (
    <InputField className="eingabe">
      <input ref={eingabeFeld} type="text" placeholder="new Task" />
      <ClickButton className="click" onClick={klickMich}>
        Click
      </ClickButton>
    </InputField>
  );
}

export default Input;

const ClickButton = styled.span`
  color: white;
  margin: 5px;
  font-size: 1.4em;

  &:hover {
    text-shadow: 0 3px 4px 0 #dbedf3;
    opacity: 0.7;
  }
  &:active {
    text-shadow: 0 3px 4px 0 #dbedf3;
    opacity: 0.5;
  }
`;
const InputField = styled.div`
  margin-top: 30px;
`;
