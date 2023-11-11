import { } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';
import RegisterPage from './pages/RegisterPage';
import FAQPage from './pages/FAQPage';
import EventsPage from './pages/EventsPage';
import AdminPage from './pages/AdminPage';

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
    path: '/events/:event',
    element: <EventsPage event />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
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
