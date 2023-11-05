import { } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/register',
    element: <h1>Register Page</h1>,
  },
  {
    path: '/faq',
    element: <h1>FAQ Page</h1>,
  },
  {
    path: '/event/:eventId',
    element: <h1>Event Page {window.location.href.split('/')[window.location.href.split('/').length - 1]}</h1>,
  },
  {
    path: '/*',
    element: <h1>Page Not Found</h1>,
  }]
);


function App() {

  return (
    <>
      <NavBar />
      <RouterProvider router={route} />
    </>
  )
}

export default App
