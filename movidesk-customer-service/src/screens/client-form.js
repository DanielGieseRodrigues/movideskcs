import React, { useState } from "react";
import List from "../components/list";
import Form from "./form/form";
import { stylex } from "../utils/flex-inline-style";

const decideActivateForm = (active = false) => {
  return active ? "flex" : "none";
};

function ClientForm() {
  const [formActive, setFormActive] = useState(false);

  return (
    <div style={stylex} className="default-container">
      <div style={stylex}>
        <List
          displayed={decideActivateForm(!formActive)}
          activateForm={param => {
            setFormActive(param);
          }}
        />
        <div
          className="client-form"
          style={{ display: decideActivateForm(formActive) }}
        >
          <Form />
          <button className="md-btn" onClick={() => setFormActive(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientForm;
