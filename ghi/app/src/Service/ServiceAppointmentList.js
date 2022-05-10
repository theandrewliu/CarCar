import React from "react";

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
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>VIN</th>
                    <th>Customer Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                </tr>
                </thead>
                <tbody>
                {props.appointments.map(appointment => {
                    // let date = Date(appointment.starts)
                    // console.log(appointment.starts)
                    // console.log("parsed date", date)
                    return (
                    <tr key={appointment.id}>
                        <td>{ appointment.vin }</td>
                        <td>{ appointment.customer_name }</td>
                        <td>{ appointment.starts.toLocaleString('en-US', {month:'long', day:'numeric', year:'numeric'})}</td>
                        <td>{ appointment.starts.toLocaleString('en-US', {hour:'numeric', minute:'numeric'})}</td>
                        <td>{ appointment.technician }</td>
                        <td>{ appointment.reason }</td>
                        <td><button onClick={() => deleteItem(appointment.id)}>Delete</button></td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
      </div>
      )
  }
  
  export default AppointmentList