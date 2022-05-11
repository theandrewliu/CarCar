import { NavLink } from 'react-router-dom'

function AutomobileList(props) {
    return (
        <div className="container">
            <h2 className="display-5 fw-bold">Automobiles</h2>
            <button type="button" className="btn btn-outline-primary"><NavLink className="nav-link" aria-current="page" to="/autos/new">Add an auto</NavLink></button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Vin</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Manufacturer</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody>
                    {props.autos.map(auto => {
                        return(
                            <tr key={auto.vin}>
                                <td>{ auto.vin }</td>
                                <td>{ auto.year }</td>
                                <td>{ auto.color }</td>
                                <td>{ auto.model.manufacturer.name }</td>
                                <td>{ auto.model.name }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
  }
  
  export default AutomobileList