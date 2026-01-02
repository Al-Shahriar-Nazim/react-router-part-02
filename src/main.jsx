import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import User from "./components/User/User.jsx";
import Post from "./components/Post/Post.jsx";
import User2 from "./components/User2/User2.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import Albums from "./components/Albums/Albums.jsx";
import AlbumsDetails from "./components/AlbumsDetails/AlbumsDetails.jsx";

const userPromised = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "user",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User,
      },
      {
        path: "post",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Post,
      },
      {
        path: "user2",
        element: (
          <Suspense fallback={<p>Loading......</p>}>
            <User2 userPromised={userPromised}></User2>
          </Suspense>
        ),
        // Component:User2
      },
      {
        path: "users/:userId",
        loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path:"albums",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/albums'),
        Component:Albums
      },
      {
        path:'albums/:albumsId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumsId}`),
        Component:AlbumsDetails
      }
    ],
  },
   {
        path:"*",
        element:<h3>Not found : 404 status</h3>
      }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
