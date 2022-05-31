//import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <form class="gradient col-lg-5 mt-5" style={{borderRadius:"25px",boxShadow:"1px 1px 15px #033450"}}>
            <h4 class="color1">Mint Portal</h4>
            <h5 class="color1">Connect your wallet</h5>
            <Button style={{marginButton:"5px"}}>Connect</Button>
            
            <div class="card" id='wallet-address' style={{marginTop:"3px", boxShadow:"1px 1px 4px #000000"}}>
              <label for="floatingInput">Wallet Address</label>
              <input type="number" name="amount" defaultValue="1" min="1" max="1"/>
              <label >enter amount</label>
              <Button>Mint</Button>
            </div>
            
            <label class="color1">0.5 ETH</label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
