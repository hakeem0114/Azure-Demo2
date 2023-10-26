//React Imports
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//Style Imports
import './App.css'

//Component Imports
import Signin from './pages/Signin'

// //Azure Imports
// import { useMsal, useMsalAuthentication } from '@azure/msal-react';
// import { InteractionType } from '@azure/msal-browser';


// function App() {
//   const [data, setData] = useState('');

//   useEffect(() => {
//     (async function () {
//       const { text } = await( await fetch(`/api/message`)).json();
//       setData(text);
//     })();
//   });

//   return <div>{data}</div>;
// }

// export default App;

//MAIN
function App() { 
 // useMsalAuthentication(InteractionType.Redirect); //Force app to authenticate prior to DOM render

  // const [userID, setuserID] = useState("");

  // const { accounts, instance } = useMsal(); 

  // function findUser(){
  //   try {
  //     const username = accounts[0].username;
  //     setuserID(username);
  //   }
  //   catch (e) {
  //     console.log('User DNE')
  //   }
  // }
  

  return (
    <>
     <Signin/>
    </>
//     <>
//       <div
//         className="flex justify-center gap-7"
//       >
//           <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
//             <img src={viteLogo} className="logo" alt="Vite logo" />
//           </a>
//           <a href="https://react.dev" target="_blank" rel="noreferrer">
//             <img src={reactLogo} className="logo react" alt="React logo" />
//           </a>
//       </div>


//       <h1 className="text-3xl">Azure Demo2</h1>

//       <div  className="card">

//           <br />
//             <h1 className="
//             text-3xl font-bold decoration-1 overline mt-10 mb-10
//             md:text-6xl md:font-bold md:underline
//             lg:text-9xl lg:font-black lg:overline
//             ">
//               In Progress 
//             </h1>
//            {/* { findUser()} */}
// {/* 
//             {
//               userID ? (
//                 <div>
//                   <p>Username: {userID}</p>
                  
//                   <button className="mt-5 hover:bg-red-300" onClick={() => instance.logoutRedirect()}>
//                     Sign Out{''}
//                   </button>
//                 </div>
//               ) : (
//                 <div>
//                   <p>User not authorized</p>

//                   <button className="mt-5 hover:bg-sky-300" onClick={() => instance.loginRedirect()}>
//                     Sign In{''}
//                   </button>
                  
//                 </div>
//               )
//             } */}

//           <br />
          
        

//       </div>
//     </>
  )
}

export default App

// import { useState, useEffect } from 'react';
// import './App.css';

// import { useMsal, useMsalAuthentication } from '@azure/msal-react';
// import { InteractionType } from '@azure/msal-browser';

// function App() {
//   const { accounts } = useMsal();
//   const [m_strUser, setm_strUser] = useState("");

//   useMsalAuthentication(InteractionType.Redirect);

//   useEffect(() => {
//     try {
//       const username = accounts[0].username;
//       setm_strUser(username);
//     }
//     catch (e) {
//       console.log('User DNE');
//     }
//   }, [accounts]);

//   if (m_strUser !== "") {
//     return (
//       <div className="App">
//         <div>User: {m_strUser}</div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="App">
//         <div>Please wait...</div>
//       </div>
//     );
//   }
// }

// export default App;

