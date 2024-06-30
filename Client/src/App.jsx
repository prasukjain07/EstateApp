import Navbar from "./components/navbar/Navbar"
import HomePage from "./routes/homePage/HomePage"
import ListPage from "./routes/listPage/ListPage"
import {
  createBrowserRouter,
  RouterProvider,
   } from "react-router-dom";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Layout from "./routes/layout/Layout";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:
        <Layout/>,
        children:[
          {
            path:"/ list",
            element:<ListPage/>
          },
          {
            path:"/:id",
            element:<SinglePage/>
          },
          {
            path:"/profile",
            element: <ProfilePage/>
          }

        ]
    },
   
  ]);


  return (
      <RouterProvider router={router}/>
  )
}

export default App