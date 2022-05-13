import React from 'react';

class CustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            address: '',
            phone: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};


        const customer_formUrl = "http://localhost:8090/api/customer/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(customer_formUrl, fetchConfig);
        if(response.ok){
            const new_customerform = await response.json();
            console.log(new_customerform)
            this.setState({
                name: '',
                address: '',
                phone: '',
            });
    }
}

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }
    handleAddressChange(event) {
        const value = event.target.value;
        this.setState({ address: value });
    }
    handlePhoneChange(event) {
        const value = event.target.value;
        this.setState({ phone: value });
    }
    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Customer Sign Up Form</h1>
                        <form onSubmit={this.handleSubmit} id="create-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleAddressChange} value={this.state.address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handlePhoneChange} value={this.state.phone} placeholder="Phone" required type="text" name="phone" id="phone" className="form-control" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}


export default CustomerForm