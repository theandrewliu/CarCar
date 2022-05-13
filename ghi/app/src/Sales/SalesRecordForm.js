import React from 'react';

class SalesRecordForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            salesperson: '',
            salespersons: [],
            customer: '',
            customers: [],
            salesprice: '',
            autos: '',
            auto: [],
        };

        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleAutomobilesChange = this.handleAutomobilesChange.bind(this);
        this.handleSalesPriceChange = this.handleSalesPriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
    }

    async componentDidMount(){
        const sales_personUrl = 'http://localhost:8090/api/salesperson/'
        const customerUrl = 'http://localhost:8090/api/customer/'
        const automobile_Url = 'http://localhost:8100/api/automobiles/'

        const response = await fetch(sales_personUrl)
        const responses = await fetch(customerUrl)
        const responded = await fetch(automobile_Url)

        if(response.ok && responses.ok && responded.ok){
            const data = await response.json();
            const data_customer = await responses.json();
            const data_automobile = await responded.json();

            this.setState({salespersons: data.salesperson})
            this.setState({customers: data_customer.customer})
            this.setState({auto: data_automobile.autos})
        }
    }             


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.salespersons
        delete data.salesperson
        const data_customer = {...this.state};
        delete data_customer.customers
        delete data_customer.customer
        const data_automobile = {...this.state};
        delete data_automobile.autos
        delete data_automobile.auto


        const sales_recordUrl = 'http://localhost:8090/api/salesrecord/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data), 
            body: JSON.stringify(data_customer), 
            body: JSON.stringify(data_automobile),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(sales_recordUrl, fetchConfig);
        if(response.ok){
            const new_salesrecord = await response.json();
            console.log(new_salesrecord);
            this.setState({
                salesperson: '',
                customer: '',
                salesprice: '',
                autos: '',
            });
        };
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
        this.setState({ autos: value });
    }


    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a new Car</h1>
                        <form onSubmit={this.handleSubmit} id="create-form">
                        <div className="mb-3">
                            <select onChange={this.handleSalesPersonChange} value={this.state.salesperson} required name="salesperson" id="salesperson" className="form-select">
                            <option value="">Associate</option>
                            {this.state.salespersons.map(salesperson => {
                                return (
                                <option key={salesperson.id} value={salesperson.id}>{salesperson.name}</option>
                                );
                            })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleCustomerChange} value={this.state.customer} required name="customer" id="customer" className="form-select">
                            <option value="">Customer</option>
                            {this.state.customers.map(customer => {
                                return (
                                <option key={customer.id} value={customer.id}>{customer.name}</option>
                                )
                            })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleAutomobilesChange} value={this.state.autos} required name="automobiles" id="vin" className="form-select">
                            <option value="">Automobiles</option>
                            {this.state.auto.map(automobiles => {
                                return (
                                <option key={automobiles.vin} value={automobiles.vin}>{automobiles.model.name}</option>
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