


function SalesRecordList(props) {
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
        {props.salesrecords.map(salesrecord => {
          return (
            <tr key={salesrecord.id}>
              <td>{ salesrecord.salesperson}</td>
              <td>{ salesrecord.salesperson}</td>
              <td>{ salesrecord.customer}</td>
              <td>{ salesrecord.automobiles}</td>
              <td>{ salesrecord.salesprice}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SalesRecordList