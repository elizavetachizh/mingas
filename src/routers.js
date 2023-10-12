import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { routers } from './const/routers';

export default function Routers() {
  return (
    <Routes>
      {routers.map((el, index) => (
        <Route key={index} path={el.path} element={el.element} />
      ))}
    </Routes>
  );
}
