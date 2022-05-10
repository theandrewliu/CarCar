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
                        <h1>Add shoes!</h1>
                        <form onSubmit={this.handleSubmit} id="create-appointment-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleVinChange} value={this.state.vin} placeholder="Vin Number" required type="text" name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin">Vin Number</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleChangeModel} value={this.state.model_name} placeholder="Model" required type="text" name="model_name" id="model_name" className="form-control" />
                            <label htmlFor="model_name">Model</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleChangeColor} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleChangePicture} value={this.state.picture_url} placeholder="Picture" required type="text" name="picture_url" id="picture_url" className="form-control" />
                            <label htmlFor="picture_url">Picture URL</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleChangeBin} value={this.state.bin} required name="bin" id="bin" className="form-select">
                            <option value="">Choose a bin</option>
                            {this.state.bins.map(bin => {
                                return (
                                <option key={bin.id} value={bin.href}>{bin.closet_name.charAt(0).toUpperCase() + bin.closet_name.slice(1)} Bin:{bin.bin_number} Size:{bin.bin_size}</option>
                                )
                            })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceAppointmentForm