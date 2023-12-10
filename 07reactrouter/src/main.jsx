import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import GitHub, { githubAccInfo } from './components/GitHub/GitHub'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         path:"/contact",
//         element: <Contact/>
//       },
//       {
//         path:"/github",
//         element: <GitHub/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route loader={githubAccInfo} path="/github" element={<GitHub/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
