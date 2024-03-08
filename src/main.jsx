import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/layout/Main.jsx'
import Home from './components/Home/Home.jsx'
import Courses from './components/Courses/Courses.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import Contact from './components/Contact/Contact.jsx'
import Error from './components/Error/Error.jsx'
import Teachers from './components/Teachers/Teachers.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/courses/',
        element: <Courses />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: 'teachers',
        element: <Teachers />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
