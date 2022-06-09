import React from "react";
import Sidebar from "../Component/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./Layout.scss";

function Layout() {
  const [close, setClose] = useState(true);

  const handleToggle = () => {
    setClose(!close);
  };

  return (
    <div className="App">
      <div className="rowLayout">
        <div
          style={{ transition: "all 0.1s" }}
          className={close ? "sidebar_close__width " : "sidebar_open__width"}
        >
          <Sidebar isClose={close} handleToggle={handleToggle} />
        </div>
        <div
          style={{ transition: "all 0.1s" }}
          className={close ? "content_close__width" : "content_open__width"}
        >
          <div className="rowLayout">
            <div className="col-lg-12 col-12">
             
            </div>
            <div className="p-3 ps-5 col-lg-12 col-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
