import React from 'react';

class ServiceAppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: "",
            customer_name: "",
            date: "",
            time: "",
            reason: "",
            technician: "",
            technicians: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
        this.handleTechnicianChange = this.handleTechnicianChange.bind(this);
    }

    async componentDidMount() {
        const url = 'http://localhost:8080/api/technicians/'
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({technicians: data.technicians});
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.starts = data.date+"T"+data.time
        delete data.time;
        delete data.date;
        delete data.technicians;

        const url = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if(response.ok) {
            const newAppointment = await response.json();
            this.setState({
                vin: "",
                customer_name: "",
                date: "",
                time: "",
                reason: "",
                technician: "",
            });
        }
    }

    handleVinChange(event) {
        const value = event.target.value;
        this.setState({ vin: value });
    }

    handleCustomerNameChange(event) {
        const value = event.target.value;
        this.setState({ customer_name: value });
    }

    handleDateChange(event) {
        const value = event.target.value;
        this.setState({ date: value });
    }

    handleTimeChange(event) {
        const value = event.target.value;
        this.setState({ time: value });
    }

    handleReasonChange(event) {
        const value = event.target.value;
        this.setState({ reason: value });
    }

    handleTechnicianChange(event) {
        const value = event.target.value;
        this.setState({ technician: value });
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a Service Appointment</h1>
                        <form onSubmit={this.handleSubmit} id="create-appointment-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleVinChange} value={this.state.vin} placeholder="Vin Number" required type="text" name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin">Vin Number</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleCustomerNameChange} value={this.state.customer_name} placeholder="Customer Name" required type="text" name="customer_name" id="customer_name" className="form-control" />
                            <label htmlFor="customer_name">Customer Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleDateChange} value={this.state.date} placeholder="Date" required type="date" name="date" id="date" className="form-control" />
                            <label htmlFor="date">Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleTimeChange} value={this.state.time} placeholder="Time" required type="time" name="time" id="time" className="form-control" />
                            <label htmlFor="time">Time</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleReasonChange} value={this.state.reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleTechnicianChange} value={this.state.technician} required name="technician" id="technician" className="form-select">
                            <option value="">Select a Technician</option>
                            {this.state.technicians.map(technician => {
                                return (
                                <option key={technician.id} value={technician.id}>{technician.name}</option>
                                )
                            })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Schedule Service</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceAppointmentForm