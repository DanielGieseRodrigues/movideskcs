import React from "react";
import SquareIconButton from "../components/square-icon-button";
import "./list.css";


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
          {Object.keys(props.dataSource.headers).map((item, index) => {
            debugger
            return(
            <div key={index} className="item">
              {props.dataSource.headers[item]}
            </div>
          )})}
        </li>
        {props.dataSource.items.map((dataItem, index) => {
          debugger
          return (
            <li key={index} className="default-style-list-item">
              {Object.keys(dataItem).map((item, nindex) => {
                debugger ;
                return(
                <div className="item">{dataItem[nindex]}</div>
              )})}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
