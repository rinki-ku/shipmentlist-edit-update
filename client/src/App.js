import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Shipment from './components/pages/shipment';
import ShipmentDetails from './components/pages/shipmentDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Shipment} />
          <Route exact path="/shipmentDetails" component={ShipmentDetails} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
