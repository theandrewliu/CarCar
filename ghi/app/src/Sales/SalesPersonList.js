



function SalesRecordList(props) {
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
        {props.hats.map(hat => {
          return (
            <tr key={hat.href}>
              <td>{ hat.name }</td>
              <td>{ hat.style_name }</td>
              <td>{ hat.location }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SalesRecordList