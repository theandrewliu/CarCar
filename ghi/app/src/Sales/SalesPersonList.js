

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
        {props.salesperson.map(salesperson => {
          return (
            <tr key={salesperson.id}>
              <td>{ salesperson.name }</td>
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