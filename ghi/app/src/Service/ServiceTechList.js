import { NavLink } from 'react-router-dom'

function ServiceTechList(props) {
  return (
    <div className="container">
      <h2 className="display-5 fw-bold">Technicians</h2>
      <button type="button" className="btn btn-outline-primary"><NavLink className="nav-link" aria-current="page" to="/technicians/new">Add a Technician</NavLink></button>
      <div>&nbsp;</div>
      <div className="table table-striped">
        {props.technicians.map(technician => {
          return (
            <div key={technician.id} className="col">
              <div className="card mb-3 shadow">
                <div className="card-body">
                  <h5 className="card-title">{technician.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Employee Number: {technician.employee_number}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceTechList