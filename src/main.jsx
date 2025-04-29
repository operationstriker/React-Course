import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)

// kickstart react app,
// StrictMode - helps us debug our code when we're building projects and it renders every component twice

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// when youre building projects make sure to keep react strict mode on as it will help you debug your code 
// with errors in the console and that sort of thing