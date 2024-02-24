import "./App.css";
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import {router} from "./routers"

import React, { useMemo } from "react";

function App() {
  const user = useMemo(() => ({
    username: "HAYOLO"
  }), []);

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
