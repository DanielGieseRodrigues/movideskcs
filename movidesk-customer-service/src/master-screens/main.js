import React from "react";
import { StateProvider } from "../state-mgr";
import PaneRender from "../screens/pane-render";
import MainMenu from "../screens/main-menu";
import "./main.css";
import "../static/icon-fonts.css";

function Main() {
  const initialState = {
    page: { compoment: null }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "changePage":
        return {
          ...state,
          page: action.newPage
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="main-container">
        <aside className="main-aside-container compressed">
          <MainMenu />
        </aside>
        <section className="main-section-container">
          <div className="main-top" />
          <div className="main-pane">
            <PaneRender />
          </div>
        </section>
      </div>
    </StateProvider>
  );
}

export default Main;
