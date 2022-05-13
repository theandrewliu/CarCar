
function SalesRecordList(props) {
  console.log('ANIME', props.salesrecord)
    return(
    <div className="container">
      <h2 className="display-5 fw-bold">List of Sales</h2>
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
          return (
            <tr key={salesrecords.id}>
              <td>{ salesrecords.salesperson.name}</td>
              <td>{ salesrecords.salesperson.employee_id}</td>
              <td>{ salesrecords.customer.name}</td>
              <td>{ salesrecords.automobiles.vin}</td>
              <td>{ salesrecords.salesprice}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  ); 

}
export default SalesRecordList