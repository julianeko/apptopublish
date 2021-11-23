import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Input from "./Input.js";
import styled from "styled-components";
import { Context } from "./App";

function Params() {
  const value = useContext(Context);
  const { onetId } = useParams();
  console.log(value.todos);

  const result = value.todos.find((element) => element.id === onetId);
  console.log(result);

  const result2 = result.name;
  console.log(result2);

  if (result2) {
    return (
      <div>
        <TextStyle className="p">{result2}</TextStyle>
        {/* <Input /> */}
      </div>
    );
  }
  return null;
}

export default Params;

const TextStyle = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 2rem;
  margin-top: 20px;
`;
