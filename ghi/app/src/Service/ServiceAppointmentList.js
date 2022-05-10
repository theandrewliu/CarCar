import React from "react";
import { NavLink } from "react-router-dom"

function AppointmentList(props) {
    console.log("me", props)
    const deleteItem = async (id) => {
      fetch(`http://localhost:8080/api/appointments/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'
      }
      }).then(() => {
        window.location.reload();
      })
    }
  
      return(
        <div className="container">
            <h2 className="display-5 fw-bold">Appointments</h2>
            <button type="button" className="btn btn-outline-primary"><NavLink className="nav-link" aria-current="page" to="/service/new">Create an Appointment</NavLink></button>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>VIN</th>
                    <th>Customer Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>VIP</th>
                </tr>
                </thead>
                <tbody>
                {props.appointments.map(appointment => {
                    let date = Date.parse(appointment.starts)
                    const d = new Date(date)
  
                    let vip_classname = ''
                    if (appointment.is_vip == true) {
                        vip_classname = 'bi bi-star-fill'
                    }
                    return (
                    <tr key={appointment.id}>
                        <td>{ appointment.vin }</td>
                        <td>{ appointment.customer_name }</td>
                        <td>{ d.toLocaleString('en-US', {month:'long', day:'numeric', year:'numeric'})}</td>
                        <td>{ d.toLocaleString('en-US', {hour:'numeric', minute:'numeric'})}</td>
                        <td>{ appointment.technician }</td>
                        <td>{ appointment.reason }</td>
                        <td><i className={vip_classname}></i></td>
                        <td><button className="btn btn-danger" onClick={() => deleteItem(appointment.id)}>Cancel</button></td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
      </div>
      )
  }
  
  export default AppointmentList