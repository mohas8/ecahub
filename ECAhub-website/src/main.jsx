import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.jsx'
import { Scholarships } from './pages/Scholarships.jsx';
import Conferences from './pages/Conferences.jsx';
import Competitions from './pages/Competitions.jsx';
import Grants from './pages/Grants.jsx';
import Felloweships from './pages/Fellowships.jsx';
import Jobs from './pages/Jobs.jsx';
import SingleOpportunity from './components/SingleOpportunity.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />

      },
      {
        path: "/scholarships",
        element: <Scholarships />
      },
      {
        path: "/conferences",
        element: <Conferences />
      },
      {
        path: "/competitions",
        element: <Competitions />
      },
      {
        path: "/grants",
        element: <Grants />
      },
      {
        path: "/fellowships",
        element: <Felloweships />
      },
      {
        path: "/jobs",
        element: <Jobs />
      },
      {
        path: "/blogs/:id",
        element: <SingleOpportunity />,
        loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
