
import './App.css';
import Hero from './pages/hero/hero';
import Root from './pages/root';
import { Route } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Aboutus from './pages/service/About';
import Service from './pages/service/service';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Hero />}/>
      <Route path="/about-us" exact element={<Aboutus />}/>
      <Route path="/Service" element={<Service />}/>
      

      

    </Route>
  )
);
function App() {
  return (
    
    <RouterProvider router={router} />
  
  );
}

export default App;
