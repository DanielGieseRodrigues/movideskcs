import React from "react";
import SquareIconButton from "../components/square-icon-button";
import "./list.css";
import { object } from "prop-types";


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
            return(
            <div key={index} className="item">
              {props.dataSource.headers[item]}
            </div>
          )})}
        </li>
        {props.dataSource.items.map((dataItem, index) => {
          return (
            <li key={index} className="default-style-list-item">
              {Object.values(dataItem).map((item, nindex) => Object.values(item).map((objectItem,objectIndex) =>{
                return(
                <div className="item">{objectItem}</div>
              )}))}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
