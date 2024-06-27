
import './App.css';
import Root from './pages/root';
import { Route } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      

      

    </Route>
  )
);
function App() {
  return (
    
    <RouterProvider router={router} />
  
  );
}

export default App;
