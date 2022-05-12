import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './Inventory/ManufacturerList';
import ManufacturerForm from './Inventory/ManufacturerForm';
import VehicleModelList from './Inventory/VehicleModelList';
import VehicleModelForm from './Inventory/VechicleModelForm';
import AutomobileList from './Inventory/AutomobileList';
import AutomobileForm from './Inventory/AutomobileForm';
import ServiceAppointmentList from './Service/ServiceAppointmentList';
import ServiceAppointmentForm from './Service/ServiceAppointmentForm';
import ServiceHistoryList from './Service/ServiceHistoryList';
import ServiceTechList from './Service/ServiceTechList';
import ServiceTechForm from './Service/ServiceTechForm';
import SalesPersonList from './Sales/SalesPersonList';
import SalesPersonForm from './Sales/SalesPersonForm';
import SalesRecordList from './Sales/SalesRecordList';
import SalesRecordForm from './Sales/SalesRecordForm';
import CustomerForm from './Sales/CustomerForm';
import CustomerList from './Sales/CustomerList';




function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="manufacturers">
            <Route index element={<ManufacturerList manufacturers={props.manufacturers} />}/>
            <Route path="new" element={<ManufacturerForm />}/>
          </Route>
          <Route path="models">
            <Route index element={<VehicleModelList models={props.models}/>}/>
            <Route path="new" element={<VehicleModelForm />}/>
          </Route>
          <Route path="autos">
            <Route index element={<AutomobileList autos={props.autos}/>}/>
            <Route path="new" element={<AutomobileForm />}/>
          </Route>
          <Route path="service">
            <Route index element={<ServiceAppointmentList appointments={props.appointments} />} />
            <Route path="new" element={<ServiceAppointmentForm />}/>
            <Route path="history" element={<ServiceHistoryList />}/>
          </Route>
          <Route path="technicians">
            <Route index element={<ServiceTechList technicians={props.technicians}/>}/>
            <Route path="new" element={<ServiceTechForm />}/>
          </Route>
          <Route path="customer">
            <Route index element={<CustomerList customer={props.customer} />}/>
            <Route path="new" element={<CustomerForm />}/>
          </Route>
          <Route path="salesperson">
            <Route index element={<SalesPersonList salesperson={props.salesperson} />}/>
            <Route path="new" element={<SalesPersonForm />}/>
          </Route>
          <Route path="salesrecord">
            <Route index element={<SalesRecordList salesrecord={props.salesrecord} />} />
            <Route path="new" element={<SalesRecordForm />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
