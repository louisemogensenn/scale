import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Forside from './views/Forside';
import Kontakt from './views/Kontakt';
import Cases from './views/Cases';
import Kompetencer from './views/Kompetencer';
import Layout from './Layout';

  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Layout />,
      children: [

        {
          index: true,
          element: <Forside />
        },

        {
          path: '/kontakt',
          element: <Kontakt />
        },

        {
          path: '/cases',
          element: <Cases />
        },

        {
          path: '/kompetencer',
          element: <Kompetencer />
        }
      ]
    }
  ])

  export default function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}

