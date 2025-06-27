import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AttractionsPage from './pages/AttractionsPage';
import AddAttractionPage from './pages/AddAttractionPage';

const App = () => {

  const addNewAttraction = () => {
    
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage/>} />
        <Route path='/attractions' element={<AttractionsPage addAttraction={addNewAttraction}/>} />
        <Route path='/add-attraction' element={<AddAttractionPage/>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App