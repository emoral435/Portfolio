import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'

import Portfolio from './views/Home.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
	<Portfolio />
  </React.StrictMode>,
);
