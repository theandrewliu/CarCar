import React from 'react';

class SalesPersonForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            employee_id: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmployee_idChange = this.handleEmployee_idChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};

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
            const cleared = {
                name: '',
                employee_id: ''
            };
            this.setState(cleared);
        }
    }


    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }

    handleEmployee_idChange(event) {
        const value = event.target.value;
        this.setState({ employee_id: value });
    }

    
    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Join Our Team</h1>
                        <form onSubmit={this.handleSubmit} id="create-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleEmployee_idChange} placeholder="Employee_id" required type="number" name="employeeid" id="employeeid" className="form-control" />
                            <label htmlFor="employeeid">Employee Id</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}


export default SalesPersonForm