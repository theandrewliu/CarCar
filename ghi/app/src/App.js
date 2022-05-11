import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './Inventory/ManufacturerList';
import ManufacturerForm from './Inventory/ManufacturerForm';
import ServiceAppointmentList from './Service/ServiceAppointmentList'
import ServiceAppointmentForm from './Service/ServiceAppointmentForm'

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
          <Route path="service">
            <Route index element={<ServiceAppointmentList appointments={props.appointments} />} />
            <Route path="new" element={<ServiceAppointmentForm />}/>
          </Route>
          <Route path="customer">
            <Route index element={<CustomerDetail customer={props.customer} />} />
            <Route path="new" element={<CustomerForm/>}/>
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
