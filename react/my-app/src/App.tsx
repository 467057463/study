import React from 'react';
import Home from './views/Home'
import { StoreProvider } from './hook/useStore'

function App() {
  return (
    <StoreProvider>
      <Home/>
    </StoreProvider>
  );
}

export default App;
