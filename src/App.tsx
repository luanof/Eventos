import './App.css';
import {BrowserRouter } from "react-router-dom"
import RouterApp from './Router/Router';

function App() {
  return (
    <BrowserRouter>
      <RouterApp/>
    </BrowserRouter>
  );
}

export default App;
