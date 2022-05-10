import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './Inventory/ManufacturerList';
import ManufacturerForm from './Inventory/ManufacturerForm';
import ServiceTechList from './Service/ServiceTechList';
import ServiceTechForm from './Service/ServiceTechForm';
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
          <Route path="technicians">
            <Route index element={<ServiceTechList technicians={props.technicians} />} />
            <Route path="new" element={<ServiceTechForm/>}/>
          </Route>
          <Route path="sales">

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
