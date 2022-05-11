import React from 'react';

class SalesRecordForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            salesperson: '',
            customer: '',
            salesprice: '',
            automobile: '',
            automobile: [],
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmployee_idChange = this.handleEmployee_idChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }
    handleEmployee_idChange(event) {
        const value = event.target.value;
        this.setState({ employee_id: value });
    }

}


export default SalesRecordForm