

function SalesPersonList(props) {
    return(
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Sales Partner</th>
          <th>Customer</th>
          <th>VIN</th>
          <th>Sales Price</th>
        </tr>
      </thead>
      <tbody>
        {props.salesperson.map(salespersons => {
          return (
            <tr key={salespersons.id}>
              <td>{ salespersons.name }</td>
              {/* <td>{ salesperson.style_name }</td>
              <td>{ salesperson.location }</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SalesPersonList