import { NavLink } from 'react-router-dom'

function VehicleModelList(props) {
    return (
        <div className="container">
            <h2 className="display-5 fw-bold">Vehicle Models</h2>
            <button type="button" className="btn btn-outline-primary"><NavLink className="nav-link" aria-current="page" to="/models/new">Add a Vehicle Model</NavLink></button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {props.models.map(model => {
                        return(
                            <tr key={model.id}>
                                <td>{ model.name }</td>
                                <td>{ model.manufacturer.name }</td>
                                <td><img src={ model.picture_url } alt="null" width="20%" height="20%"/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
  }
  
  export default VehicleModelList