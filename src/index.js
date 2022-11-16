import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import reportWebVitals from './reportWebVitals';
import { Root } from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import { RouterProvider } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import GroupsManage from './components/GroupsManage';
import { QueryClient, QueryClientProvider } from 'react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App authen={'sigin'} />
  },
  {
    path: '/signup',
    element: <App authen={'signup'} />
  },
  {
    path: '/dashboard',
    element: <DashBoard />
  },
  {
    path: '/groupmanage',
    element: <GroupsManage />
  }
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
