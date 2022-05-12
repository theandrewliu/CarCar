

function CustomerList(props) {
    return(

    <table className="table table-striped">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {props.customer.map(customer => {
          return (
            <tr key={customer.id}>
              <td>{ customer.name }</td>
              <td>{ customer.address }</td>
              <td>{ customer.phone }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CustomerList