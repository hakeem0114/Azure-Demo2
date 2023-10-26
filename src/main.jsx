import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// //React Imports
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// //Azure Imports
// import { PublicClientApplication } from '@azure/msal-browser'; //Object from Azure to perform OAuth 2.0
// import { MsalProvider } from '@azure/msal-react';
// import { msalConfig } from './auth/authConfig';


// const msalInstance = new PublicClientApplication(msalConfig); //Tells the active tenant to get user info


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <MsalProvider instance={msalInstance}>
//           <App />
//       </MsalProvider>
//   </React.StrictMode>,
// )
