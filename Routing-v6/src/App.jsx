import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Layout from './Layout'
import About from './About'
import Contact from './Contact'
import Post from './Post'
import Notfound from './Notfound'

//Routing-v6
// command => npm i react-router-dom

const App = () => {
     
    let routepath = createBrowserRouter([
        {
            path : "/",
            element : <Layout/>,
            children : [
                {
                    path : '/about',
                    element :  <About/>             
                }, 
                {
                    path : '/contact',
                    element : <Contact/>
                },
                {
                    path : '/post',
                    element : <Post/>
                },
                {
                    path : '*',
                    element : <Notfound/>
                }
            ]
        }
    ])


  return (
    <RouterProvider router={routepath}></RouterProvider>
  )
}

export default App