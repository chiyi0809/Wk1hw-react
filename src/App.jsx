import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/reset.css'
import './App.css'
import Home from'./pages/Home'
import { QueryClient,QueryClientProvider  } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
    <Home/>
    </QueryClientProvider>
  );
}

export default App