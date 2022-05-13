import React from 'react';

class SalesPersonList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            salesperson: '',
            salespersons: []
        };

        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.salesperson
        delete data.salespersons

        const sales_personUrl = 'http://localhost:8090/api/salesperson/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };


        const response = await fetch(sales_personUrl, fetchConfig);
        if(response.ok){
            const new_salesperson = await response.json();
            console.log(new_salesperson);
            this.setState({
                salesperson: '',
                salespersons: data.salesperson
        });
        };
    }        



    handleSalesPersonChange(event) {
        const value = event.target.value;
        this.setState({ salesperson: value });
    }


    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>See the Leader Board!!!</h1>
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
          </form>
        </div>
      </div>
   </div>

        )
    }

}


export default SalesPersonList