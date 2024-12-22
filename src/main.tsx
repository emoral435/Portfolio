import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ToggleDarkMode } from './store/ColorContext/ColorContext.tsx'
import Portfolio from './views/Home.tsx'
import NotFoundPage from './views/NotFoundPage.tsx'
import Blog from './views/Blog.tsx'

const router = createBrowserRouter([
	{
		path: "/",
		element: <ToggleDarkMode><Portfolio /></ToggleDarkMode>,
		errorElement: <NotFoundPage />,
	},
	{
		path: "/blog",
        element: <ToggleDarkMode><Blog /></ToggleDarkMode>,
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
	<RouterProvider router={router} />
  </React.StrictMode>,
);
