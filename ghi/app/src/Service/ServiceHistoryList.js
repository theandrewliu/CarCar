function Search(props){

    // const [searchTerm, setSearchTerm] = useState('')

    return(
        <div>
            <div className = "input-group mb-3">
                {/* <input type="text" className="form-control" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/> */}
            </div>
                <h2 className="display-5 fw-bold">Service History</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                        </tr>
                    </thead>
                    <tbody>
                {props.appointments.map(appointment => {
                    return(
                    <tr className="vin" key={appointment.id}>
                        <td>{appointment.vin}</td>
                    </tr>
                    )
                })}
                </tbody>
                </table>
        </div>
    )
}

export default Search