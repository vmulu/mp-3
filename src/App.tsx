import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./components/Root.tsx";


function App() {

  const router=createBrowserRouter(
    [
      {path:"*", Component:Root}
    ]
  );
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
