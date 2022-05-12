

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
        {props.customer.map(customers => {
          return (
            <tr key={customers.id}>
              <td>{ customers.name }</td>
              <td>{ customers.address }</td>
              <td>{ customers.phone }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CustomerList