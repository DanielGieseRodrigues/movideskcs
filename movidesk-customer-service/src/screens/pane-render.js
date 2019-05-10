import React from "react";
import { useStateValue } from "../state-mgr";
import { stylex } from "../utils/flex-inline-style";

function PaneRender() {
  const [{ page }] = useStateValue();
  return (
    <div style={stylex}>{page && page.component && <page.component />}</div>
  );
}

export default PaneRender;
