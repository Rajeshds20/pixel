import { } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';
import RegisterPage from './pages/RegisterPage';
import FAQPage from './pages/FAQPage';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
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
