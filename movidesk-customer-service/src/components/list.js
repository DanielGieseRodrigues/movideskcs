import React from "react";
import SquareIconButton from "../components/square-icon-button";
import "./list.css";

const dataFake = {
  headers: {
    name: "Nome",
    industria: "Industria"
  },
  items: [
    {
      name: "cliente 1",
      industria: "petroleira"
    },
    {
      name: "cliente 2",
      industria: "cimento"
    }
  ]
};

function List(props) {
  return (
    <div className="list-container" style={{ display: props.displayed }}>
      <div>
        <SquareIconButton
          classType={"success"}
          icon={"add"}
          fnClick={param => {
            props.activateForm(param);
          }}
        />
      </div>
      <ul className="list-component">
        <li className="default-style-list-item list-head">
          {Object.keys(dataFake.headers).map((item, index) => (
            <div key={index} className="item">
              {dataFake.headers[item]}
            </div>
          ))}
        </li>
        {dataFake.items.map((dataItem, index) => {
          return (
            <li key={index} className="default-style-list-item">
              {Object.keys(dataItem).map((item, index) => (
                <div className="item">{dataItem[item]}</div>
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
