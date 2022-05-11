import React from 'react';

class VehicleModelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            manufacturer: "",
            picture:"",
            manufacturers: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this)
        this.handlePictureChange = this.handlePictureChange.bind(this)
    }

    async componentDidMount(){
        const url = 'http://localhost:8100/api/manufacturers/'
        const response = await fetch(url);

        if(response.ok) {
            const data = await response.json();
            this.setState({manufacturers: data.manufacturers})
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.picture_url = data.picture
        data.manufacturer_id = data.manufacturer
        delete data.manufacturer
        delete data.manufacturers
        delete data.picture

        const url = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if(response.ok) {
            const newModel = await response.json();
            this.setState({
                name: "",
                manufacturer: "",
                picture:"",
            });
        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }

    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({ manufacturer: value })
    }

    handlePictureChange(event) {
        const value = event.target.value;
        this.setState({ picture: value });
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add Vehicle Model</h1>
                        <form onSubmit={this.handleSubmit} id="create-vehicle-model-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handlePictureChange} value={this.state.picture} placeholder="Picture" required type="text" name="picture" id="picture" className="form-control" />
                            <label htmlFor="name">Picture</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleManufacturerChange} value={this.state.manufacturer} required name="manufacturer" id="manufacturer" className="form-select">
                            <option value="">Choose a manufacturer</option>
                            {this.state.manufacturers.map(manufacturer => {
                                return (
                                <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
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

export default VehicleModelForm