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

}


export default CustomerForm