import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css';
import User from "./components/getuser/User";
import Add from "./components/adduser/Add";
import Edit from "./updateUser/Edit";

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
    {
      path: "/delete",
      element: "User delete page",
    },
  ])

  return (
    <div className="App">
       <RouterProvider router={route}>

       </RouterProvider>
    </div>
  );
}

export default App;
