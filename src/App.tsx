
import Navbar from "./Navbar";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Services from "./Services"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router=createBrowserRouter([
    {path:"/",element:<Home/>},
    {path:"/services",element:<Services/>},
    {path:"/about",element:<About/>},
    {path:"/contact",element:<Contact/>}

  ])

  return (
    <>
  
      <RouterProvider router={router} />

    </>
  )
}

export default App
