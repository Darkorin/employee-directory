import './App.css';
import React from 'react';
import PageHeader from './components/PageHeader';
import EmployeeContainer from './components/EmployeeContainer';

function App() {
  return (
    <div className="container">
      <PageHeader />
      <EmployeeContainer />
    </div>
  );
}

export default App;
