import React from 'react'
import MainBox from '../components/MainBox'
import { Navigate } from 'react-router-dom'
import Translation from '../pages/Translation'
import CreateAndUpdate from "../pages/Translation/CreateAndUpdate";

export default [
  {
    path: '/',
    element: <MainBox />,
    children: [
      {
        path: '/',
        element: <Navigate to="/translation" replace />,
      },
      {
        path: '/translation',
        element: <Translation />,
      },
      {
        path: '/translation/:id',
        element: <CreateAndUpdate />,
      }
    ],
  },
]
