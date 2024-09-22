import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'
import Contect from './components/Contect/Contect'
import Github, { githubInfoLoader } from './components/Github/Github'
import "./App.css"

// const router = createBrowserRouter([
//   {path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },{
//         path:'/about',
//         element:<About/>
//       },{
//         path:'/contect',
//         element:<Contect/>
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contect' element={<Contect/>}/>
     
      <Route 
      Loader={githubInfoLoader}
    
      path='github' element={<Github/>}/>

      <Route path='user/:userid' element={<User/>}/>
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
