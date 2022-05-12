import { NavLink } from 'react-router-dom'



function SalesRecordList(props) {
    return(
    <div className="container">
    <h2 className="display-5 fw-bold">Sales Records</h2>
    <NavLink className="nav-link" aria-current="page" to="/salesrecord/new">Add a Manufacturer</NavLink>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Sales Partner</th>
          <th>Employee I.D.</th>
          <th>Customer</th>
          <th>VIN</th>
          <th>Sales Price</th>
        </tr>
      </thead>
      <tbody>
        {props.salesrecord.map(salesrecords => {
          console.log("ANIME", salesrecords)
          return (
            <tr key={salesrecords.id}>
              <td>{ salesrecords.salesperson}</td>
              <td>{ salesrecords.customer}</td>
              <td>{ salesrecords.automobiles}</td>
              <td>{ salesrecords.salesprice}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
  );
}
export default SalesRecordList