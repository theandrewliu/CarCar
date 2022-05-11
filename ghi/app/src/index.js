import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadInventory() {
  // add ur data below
  let serviceData, techData, manufactureData;
  let customerData, salespersonData, salesrecordData;

  // const salesResponse = await fetch('');
  const serviceResponse = await fetch('http://localhost:8080/api/appointments/');
  const techResponse = await fetch('http://localhost:8080/api/technicians/');
  const manufactureResponse = await fetch('http://localhost:8100/api/manufacturers/');

  const customerResponse = await fetch('http://localhost:8090/api/customer/');
  const salespersonResponse = await fetch('http://localhost:8090/api/salesperson/');
  const salesrecordResponse = await fetch('http://localhost:8090/api/salesrecord/');

  if(manufactureResponse.ok) {
    manufactureData = await manufactureResponse.json();
    console.log("manufacturer data: ", manufactureData);
  } else {
    console.error("manufacturer data ", manufactureResponse)
  }

  if (serviceResponse.ok && techResponse.ok) {
    serviceData = await serviceResponse.json();
    techData = await techResponse.json();
    console.log('service data: ' , serviceData)
    console.log('tech data: ', techData)
  } else {
    console.error(serviceResponse || techResponse);
  }

  // put sales if statement below
  if(customerResponse.ok) {
    customerData = await customerResponse.json();
    console.log("customer: ", customerData);
  } else {
    console.log("customer: ", customerResponse);
  }

  if (salespersonResponse.ok && salesrecordResponse.ok){
    salespersonData = await salespersonResponse.json();
    salesrecordData = await salesrecordResponse.json();
    console.log("salesperson: ", salespersonResponse);
    console.log("salesrecord: ", salesrecordResponse);
  } else {
    console.error(salespersonResponse || salesrecordResponse);
  }

  root.render(
    <React.StrictMode>
      <App appointments={serviceData.appointments} technicians={techData.technicians} manufacturers={manufactureData.manufacturers} />
    </React.StrictMode>
  );
}
loadInventory();
