import React, { useState } from "react";
import { removeClass } from "../../utils/styler-function";
import "./form.css";

function Form() {
  const [state, setState] = useState(formState);
  return (
    <div className="form">
      <input type="hidden" value={state.id ? state.id : 0} name="id" />
      <h2 className="form-title">Novo/Alterar Cliente</h2>
      <div className="form-header">
        <ul
          className="form-anchor-list"
          onClick={event => {
            removeClass(
              event.target.parentElement.parentElement.getElementsByTagName(
                "li"
              ),
              "active"
            );
            event.target.parentElement.classList.add("active");
          }}
        >
          <li className="form-anchor-list-item active">
            <a href="#container-principal"> Principal </a>
          </li>
          <li className="form-anchor-list-item">
            <a href="#container-contatos"> Contatos </a>
          </li>
          <li className="form-anchor-list-item">
            <a href="#container-contratos"> Contratos </a>
          </li>
        </ul>
      </div>
      <div className="form-containers">
        <section className="form-section-container" id="container-principal" />
        <section className="form-section-container" id="container-contatos" />
        <section className="form-section-container" id="container-contratos" />
      </div>
    </div>
  );
}

export default Form;

const formState = {
  id: null,
  isActive: true,
  corporateName: "",
  businessName: "",
  cnpj: "",
  businessBranch: "",
  tags: []
};
