import React from "react";
import { useStateValue } from "../state-mgr";
import ClientForm from "./client-form";
import MiniLogo from "../static/logo-only.png";

function MainMenu() {
  const menuItens = [
    { label: "ABC", target: ClientForm, icon: "icon-mv-users" }
  ];
  const [{ page }, dispatch] = useStateValue();

  return (
    <nav className="aside-menu">
      <div className="aside-menu-head" />
      {menuItens.map((item, index) => {
        return (
          <div
            className="aside-menu-item"
            key={index}
            onClick={() => {
              dispatch({
                type: "changePage",
                newPage: { component: item.target }
              });
            }}
          >
            <i className={item.icon} />
          </div>
        );
      })}
    </nav>
  );
}

export default MainMenu;
