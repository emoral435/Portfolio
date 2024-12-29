import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ToggleDarkMode } from './store/ColorContext/ColorContext.tsx'
import Portfolio from './views/Home.tsx'
import NotFoundPage from './views/NotFoundPage.tsx'

const router = createBrowserRouter([
	{
		path: "/",
		element: <ToggleDarkMode><Portfolio /></ToggleDarkMode>,
		errorElement: <NotFoundPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
	<RouterProvider router={router} />
  </React.StrictMode>,
);
