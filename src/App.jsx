import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AttractionsPage from './pages/AttractionsPage';
import AddAttractionPage from './pages/AddAttractionPage';
import AttractionPage, { attractionLoader } from './pages/AttractionPage';

const App = () => {

  const addNewAttraction = async (newAttraction) => {
    const res = await fetch('/api/attractions', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(newAttraction),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage/>} />
        <Route path='/attractions' element={<AttractionsPage/>} />
        <Route path='/add-attraction' element={<AddAttractionPage addAttraction={addNewAttraction}/>} />
        <Route path='/attractions/:id' element={<AttractionPage/>} loader={attractionLoader} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App