import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CompanyRegistration} from "./Component-Registration/CompanyRegistration";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CompanyRegistration />
  }
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  )
  
}

export default App
