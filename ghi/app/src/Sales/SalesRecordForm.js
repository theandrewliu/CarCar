import React from 'react';

class SalesRecordForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            salesperson: '',
            customer: '',
            salesprice: '',
            automobiles: '',
        };

        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleAutomobilesChange = this.handleAutomobilesChange.bind(this);
        this.handleSalesPriceChange = this.handleSalesPriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};


        const sales_recordUrl = 'http://localhost:8090/api/salesrecord/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(sales_recordUrl, fetchConfig);
        if(response.ok){
            const new_salesrecord = await response.json();
            console.log(new_salesrecord);
            const cleared = {
                salesperson: '',
                customer: '',
                salesprice: '',
                automobiles: '',
            };
            this.setState(cleared);
        }
    }


    handleSalesPersonChange(event) {
        const value = event.target.value;
        this.setState({ salesperson: value });
    }
    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({ customer: value });
    }
    handleAutomobilesChange(event) {
        const value = event.target.value;
        this.setState({ salesprice: value });
    }
    handleSalesPriceChange(event) {
        const value = event.target.value;
        this.setState({ automobiles: value });
    }


    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a new Hat</h1>
                        <form onSubmit={this.handleSubmit} id="create-form">
                        <div className="mb-3">
                            <select onChange={this.handleSalesPersonChange} required name="salesperson" id="salesperson" className="form-select">
                            <option value="">Sales Person</option>
                            {this.state.salesperson.map(salespersons => {
                                return (
                                <option key={salespersons.id} value={salespersons.id}>{salespersons.name}</option>
                                )
                            })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleCustomerChange} required name="customer" id="customer" className="form-select">
                            <option value="">Customer</option>
                            {this.state.customer.map(customers => {
                                return (
                                <option key={customers.id} value={customers.id}>{customers.names}</option>
                                )
                            })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleAutomobilesChange} required name="automobiles" id="vin" className="form-select">
                            <option value="">Automobiles</option>
                            {this.state.automobile.map(automobiles => {
                                return (
                                <option key={automobiles.vin} value={automobiles.vin}>{automobiles.vin}</option>
                                )
                            })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleSalesPriceChange} placeholder="SalesPrice" type="number" id="salesprice" name="salesprice" className="form-control"></input>
                            <label htmlFor="salesprice">Sales Price</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}


export default SalesRecordForm