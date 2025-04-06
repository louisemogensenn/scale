import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Forside from './views/Forside';
import Kontakt from './views/Kontakt';
import Cases from '.view/Cases';
import Kompetencer from '.views/Kompetencer';

  const router = createBrowserRouter ([ // Laver en router med HTML5's history-API – dvs. "rigtige URL'er" som /kontakt
    {
      path: "/",
      element: <Layout />, // Når brugeren går ind på /, vises hele appen med <Layout /> som overordnet ramme. Her ligger Navbar, Outlet, og Footer.
      children: [ // Disse er underruter (nogle kalder det også "nested routes"). De bliver vist inde i <Outlet />, der skal placeres et som du skal sted i Layout-komponenten.

        {
          index: true, // Det betyder: "Hvis brugeren bare går ind på /, vis da <Forside />". Dette er altså hjemmesiden.
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
    <RouterProvider router={router}/> /* Brug denne router til at håndtere navigationen i min app */
  )
}

