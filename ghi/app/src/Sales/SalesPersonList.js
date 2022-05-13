

function SalesPersonList(props) {
    return(
      
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
              <td>{ salesrecords.salesperson}</td>
              <td>{ salesrecords.customer}</td>
              <td>{ salesrecords.automobiles}</td>
              <td>{ salesrecords.salesprice}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default SalesPersonList