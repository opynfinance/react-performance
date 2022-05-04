import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm';
import FooterComponent from './components/FooterComponent';
import { useApp } from './context';

function App() {
  const { input } = useApp()

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world</p>
        <InputForm />
        <p>Typed input is: {input}</p>
        <FooterComponent />
      </header>
    </div>
  );
}

export default App;
