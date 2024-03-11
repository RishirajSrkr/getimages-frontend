import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import PostDetail from './pages/PostDetail.jsx'
import Register from './pages/Register.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Login from './pages/Loign.jsx'
import Authors from './pages/Authors.jsx'
import CreatePost from './pages/CreatePost.jsx'
import CategoryPosts from './pages/CategoryPosts.jsx'
import DeletePost from './pages/DeletePost.jsx'
import AuthorPosts from './pages/AuthorPosts.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Editpost from './pages/EditPost.jsx'
import Logout from './pages/Logout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: '/posts/:id', element: <PostDetail /> },
      { path: '/register', element: <Register /> },
      { path: '/profile/:id', element: <UserProfile /> },
      { path: '/login', element: <Login /> },
      { path: '/authors', element: <Authors /> },
      { path: '/create', element: <CreatePost /> },
      { path: '/posts/categories/:category', element: <CategoryPosts /> },
      { path: '/posts/users/:id', element: <AuthorPosts /> },
      { path: '/myposts/:id', element: <Dashboard /> },
      { path: '/posts/:id/edit', element: <Editpost /> },
      { path: '/posts/:id/delete', element: <DeletePost /> },
      { path: '/logout', element: <Logout /> },
  
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
