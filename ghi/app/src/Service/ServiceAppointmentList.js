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
            console.log(appointment)
            return (
              <tr key={appointment.id}>
                <td>{ appointment.vin }</td>
                <td>{ appointment.customer_name }</td>
                <td>{ appointment.starts }</td>
                <td>{ appointment.starts }</td>
                <td>{ appointment.technician }</td>
                <td><button onClick={() => deleteItem(appointment.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      )
  }
  
  export default AppointmentList