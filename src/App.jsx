import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio/Portfolio";
import Layout from "./Layout/Layout";
import NotFound from "./NotFound/NotFound";

export default function App() {

  const router = createHashRouter([
    {path:'', element: <Layout/> , children:[
      { index: true , element: <Hero/>},
      {path:"portfolio" , element:  <Portfolio/>},
      {path:"about" , element: <About/>},
      {path:"contact" , element: <Contact/>},
      {path:"*" , element: <NotFound/>},
    ]}
  ])
  return (
   <>
     
     
     <RouterProvider router={router}></RouterProvider>   
    
   
    
   </>
     
  )
}

