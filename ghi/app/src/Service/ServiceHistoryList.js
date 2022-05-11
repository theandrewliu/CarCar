import React from "react"

class ServiceHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            appointments: []
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    async componentDidMount(){
        const url = 'http://localhost:8080/api/appointments/'
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({appointments: data.appointments})
        }
    }

    handleSearchChange(event) {
        const value = event.target.value;
        this.setState({ search: value })
    }

    render(){
        return (
                <div>
                    <div>&nbsp;</div>
                    <input onChange={this.handleSearchChange} value={this.state.search} type="text" className="form-control" placeholder="Search VIN"/>
                
                    <h2 className="display-5 fw-bold">Service History</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>Customer name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Technician</th>
                                <th>Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.appointments.map(appointment => {

                                let date = Date.parse(appointment.starts)
                                const d = new Date(date)
                                
                                let finished_classname = 'd-none'
                                if (appointment.is_finished == true) {
                                    finished_classname = ''
                                }
                                let active_search = 'd-none'
                                if(this.state.search == ''){
                                    active_search = ''
                                } else if (appointment.vin.includes(this.state.search)){
                                    active_search = ''
                                }

                                return(
                                <tr className={[active_search, finished_classname].join(" ")} key={appointment.id}>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.customer_name}</td>
                                    <td>{ d.toLocaleString('en-US', {month:'long', day:'numeric', year:'numeric'})}</td>
                                    <td>{ d.toLocaleString('en-US', {hour:'numeric', minute:'numeric'})}</td>
                                    <td>{ appointment.technician }</td>
                                    <td>{ appointment.reason }</td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
        )
    }
}

export default ServiceHistory