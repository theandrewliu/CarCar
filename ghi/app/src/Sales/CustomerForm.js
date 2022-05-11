// import React from 'react';

// class CustomerForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             name: '',
//             address: '',
//             phone: '',
//         };

//         this.handleNameChange = this.handleNameChange.bind(this);
//         this.handleAddressChange = this.handleAddressChange.bind(this);
//         this.handlePhoneChange = this.handlePhoneChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     async handleSubmit(event){
//         event.preventDefault();
//         const data = {...this.state};


//         const customerformurl = "http://localhost:8090/api/sales/";
//         const fetchConfig = {
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };
//     const response = await fetch(customerformurl, fetchConfig);
//     if(response.ok){
//         const newHat = await response.json();

//         const cleared{
//             name: '',
//             address: '',
//             phone: '',
//         };
//         this.setState(cleared)
//     }
// }

//     handleNameChange(event) {
//         const value = event.target.value;
//         this.setState({ name: value });
//     }
//     handleAddressChange(event) {
//         const value = event.target.value;
//         this.setState({ address: value });
//     }
//     handlePhoneChange(event) {
//         const value = event.target.value;
//         this.setState({ phone: value });
//     }

// }


// export default CustomerForm