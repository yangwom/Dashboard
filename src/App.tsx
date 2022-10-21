import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import DashBoard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <DashBoard />
    </>
  );
};

export default App
