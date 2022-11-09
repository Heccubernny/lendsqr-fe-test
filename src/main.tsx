import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.scss';




// [ ANLP_Bold, ANLP_Regular, ANLP_Italic ].forEach(font =>
// {
//   const fontFace = new FontFace(font.name, `url(${font})`);
//   fontFace.load().then(loadedFontFace =>
//   {
//     document.fonts.add(loadedFontFace);
//   });
// });



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },

//   {
//     path: "login",
//     element: <Login />,
//   },

//   {
//     path: "dashboard/users/",
//     element: <Dashboard />,
//   },

//   {
//     path: "dashboard/users/?page=:page",
//     element: <Dashboard />,
//   },

//   {
//     path: "dashboard/users/:id",
//     element: <UserDetail />,
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <RouterProvider router={router} /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>

)
// const container = document.getElementById('root')

// const root = createRoot(container!);
// root.render(
//   <React.StrictMode>
//     {/* <BrowserRouter> */}
//     <RouterProvider router={router} />
//     {/* </BrowserRouter> */}
//   </React.StrictMode>
// )
// root.unmount();
