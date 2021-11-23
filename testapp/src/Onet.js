import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import styled from "styled-components";

import { Link } from "react-router-dom";

function Onet({ todo, vid, vdeleteItem }) {
  // console.log(params.onetId);

  function onClick() {
    vdeleteItem(vid);
    console.log(vid);
  }

  const [checked, setCheck] = useState(false);
  function changeF() {
    if (checked === false) {
      setCheck(true);
      console.log("False");
    } else if (checked === true) {
      setCheck(false);
      console.log("True");
    }
  }
  let icon = <BiCheckbox />;
  if (checked) {
    icon = <BiCheckboxChecked />;
  } else {
    icon = <BiCheckbox />;
  }
  useEffect(() => {
    const storage = localStorage.getItem("checked");
    if (storage) {
      setCheck(JSON.parse(localStorage.getItem("checked")));
    }
  }, []);
  useEffect(() => {
    // Ausführung bei Änderung des todos-State ([todos])

    localStorage.setItem("checked", JSON.stringify(checked));
  }, [checked]);

  return (
    <ListenStyle>
      <TextStyle>
        <StyleLink
          to={"/onet/" + vid}
          style={{
            textDecoration: "none",
            color: "white",
          }}
          activeStyle={{ color: "red" }}
        >
          {todo}
        </StyleLink>

        <TextStyle2 className="ids">
          <SymbolsBoth key="symbol" onClick={changeF} className="symb">
            {icon}
          </SymbolsBoth>
          <SymbolsBoth onClick={onClick} className="symb">
            <FaTrash />
          </SymbolsBoth>
        </TextStyle2>
      </TextStyle>
    </ListenStyle>
  );
}

export default Onet;
const StyleLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;
const SymbolsBoth = styled.span`
  &:hover {
    text-shadow: 0 3px 4px 0 #dbedf3;
    opacity: 0.7;
  }
  .&:active {
    text-shadow: 0 3px 4px 0 #dbedf3;
    opacity: 0.5;
  }
`;

const TextStyle = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 2rem;
  margin-top: 20px;
`;

const TextStyle2 = styled.span`
  margin-right: 20px;
  color: white;
  position: absolute;
  right: 0%;
`;

const ListenStyle = styled.li`
  list-style: none;
`;
