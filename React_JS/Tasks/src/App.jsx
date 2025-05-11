import React from "react";
import Task_1 from "./components/Task1/Task_1";
import Task_2 from "./components/Task2/Task_2";
import Task_3 from "./components/Task3/Task_3";
import Task_4 from "./components/Task4/Task_4";
import Task_5 from "./components/Task5/Task_5";
import Task_6 from "./components/Task6/Task_6";
import store from "./components/Task6/Store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      {/* <Task_1 /> */}

      {/* <Task_2 /> */}

      {/* <Task_3 /> */}

      {/* <Task_4 /> */}

      {/* <Task_5 /> */}

      <Provider store={store}>
        <Task_6 />
      </Provider>

      {/* <Task_6 /> */}
    </>
  );
};

export default App;

// // src/main.jsx or src/index.jsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./components/Task6/Store"; // Make sure this path is correct
// import Task_6 from "./components/Task6/Task_6";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     {/* <App /> */}
//     <Task_6 />

//   </Provider>
// );
