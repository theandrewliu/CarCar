function ManufacturerList(props) {
    return (
        <div className="container">
            <h2 className="display-5 fw-bold">Manufacturers</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.manufacturers.map(manufacturer => {
                        return(
                            <tr key={manufacturer.id}>
                                <td>{ manufacturer.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
  }
  
  export default ManufacturerList