import React, { Component } from 'react';
import "./index.css";

class CustomerList extends Component {
  state = {
    fieldValue:"", 
    customers: [
        
    ]
 }
  render() {
    return (
      <div className="mt-75 layout-column justify-content-center align-items-center">
        <section className="layout-row align-items-center justify-content-center">
          <input type="text" onChange={ this.handleChange }  className="large" value={ this.state.fieldValue } placeholder="Name" data-testid="app-input"/>
          <button onClick={this.addCustomer} type="submit" className="ml-30" data-testid="submit-button">Add Customer</button>
        </section>
          {
            this.state.customers.length > 0 ? 
            <ul className="styled mt-50" data-testid="customer-list">
              {
                  this.state.customers.map((customer, index) => 
                  <li className="slide-up-fade-in" data-testid={"list-item"+index} key={customer} >{customer}</li>
                  ) 
              }
            </ul>
            : null
          }
      </div>
    );
  }
  

  addCustomer = () => {
    if (!!this.state.fieldValue) {
      const tempCustomers = this.state.customers;
      tempCustomers.push(this.state.fieldValue);
      this.setState({
        customers : tempCustomers,
        fieldValue: ""
      })
    }
  }
  handleChange = ({ target }) => {
    this.setState({
      fieldValue: target.value
    });
  }
}

export default CustomerList