import React, { useState,useEffect } from "react";
import List from "../components/list";
import Form from "./form/form";
import { stylex } from "../utils/flex-inline-style";
import AxiosAcess from "../services/axios-acess";
import Axios from "axios";

const decideActivateForm = (active = false) => {
  return active ? "flex" : "none";
};

function ClientForm() {
  const [formActive, setFormActive] = useState(false);
  const [data, setData] = useState([]);
  
  useEffect(async () => {
    const fetchData = async () => {
      const result = await new AxiosAcess(1).get("Client/GetAll");
      if (!data.length)
        setData(result.data)
    }

    await fetchData()
  }, [])

  var Headers = [];
  var Items = [];

  //Mapeia todos os headers do objeto recebido
    Object.keys(data[0] || {}).map((item, index) => {
      if (index < 3)
        Headers.push(item);
    });
    //Mapeia todos os itens do objeto recebido
    data.map((item, index) => {
      Items.push([
        {
          businessName: item.businessName,
          corporateName: item.corporateName,
          cpfCnpj: item.cpfCnpj
        }
      ]);
    })

  const ListClientDataBind = { headers: [], items: [] };
  ListClientDataBind.headers = Headers; 
  ListClientDataBind.items = Items;
   return (
    <div style={stylex} className="default-container">
      <div style={stylex}>
         <List dataSource={ListClientDataBind}
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
