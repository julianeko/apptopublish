import "./App.css";
import Todo from "./Todo.js";
import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Params from "./Params";
import styled from "styled-components";

// var todos = [
//   { id: 1, name: "abc" },
//   { id: 2, name: "bnm" },
// ];
export const Context = createContext();

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const storage = localStorage.getItem("todos");
    if (storage) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);
  useEffect(() => {
    // Ausführung bei Änderung des todos-State ([todos])

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <GanzeListe className="liste">
      <Ueberschrift>To-Do-Liste</Ueberschrift>
      <Context.Provider value={{ todos, setTodos }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/onet/:onetId" element={<Params />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </GanzeListe>
  );
}

export default App;

const Ueberschrift = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  border-bottom: solid;
`;
const GanzeListe = styled.div`
  text-decoration: none;
  color: white;
  background: rgba(2, 74, 240, 0.945);
  display: block;
  height: 30em;
  width: 20em;
  padding: 1em;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  transform: rotate(-3deg);
  transition: transform 0.15s linear;
  justify-content: center;

  &:hover {
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
    transform: scale(1.1);
    position: relative;
    z-index: 5;
  }
`;
