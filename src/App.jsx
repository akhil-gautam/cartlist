import { h } from 'preact';
import Router from 'preact-router';
import Cartlist from './Components/CartList';
import './assets/main.css'

function App() {
  return(
    <Router>
      <Cartlist path="/"/>
    </Router>
  )
}

export default App;
