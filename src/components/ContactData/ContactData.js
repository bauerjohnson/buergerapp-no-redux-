import React, { Component } from 'react'
import classes from './ContactData.css';
import Button from '../UI/Button/Button';
import axios from '../../axios-order';
import Spinner from '../UI/Spinner/Spinner';
import Input from '../UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm : {
            name : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'your name'
                },
                value: '',
                validation : {
                    required : true,
                    minLength : 2,
                    maxLength : 20,
                    
                },
                valid : false,
                touched : false
            },
            street: {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'street'
                },
                value: '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            }, 
            zipcode : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'ZIP code'
                },
                value: '',
                validation : {
                    required : true,
                    minLength : 5,
                    maxLength : 5,
                },
                valid : false,
                touched : false
            }, 
            country: {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'country'  //CAN USE third party for country
                },
                value: '',
                validation : {
                    required : true,
                    minLength : 5,
                    maxLength : 5,
                },
                valid : false,
                touched : false
        },
        email: {
            elementType : 'input',
            elementConfig : {
                type : 'email',
                placeholder : 'email'
            },
            value: '',
            validation : {
                required : true
            },
            valid : false,
            touched : false
    },
    deliverymethod : {
        elementType : 'select',
        elementConfig : {
            options : [
            { displayValue : 'payment'},
            {value : 'slow', displayValue : 'normal'} , 
            {value : 'fatest', displayValue : 'payment-10% fees'}, 
            ] 
        },
        value : '',
        valid : true
    }
            },
        loading : false,
        validation : {
            required : true
        },
        Valido : false
        
    }

    orderhandler = (event) => {
        event.preventDefault();
        alert('you continue!');
        this.setState({loading : true})
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients : this.props.ingredients,
            price : this.props.price,
           orderData : formData,
            customer : {
                name : 'jerry johnson',
                address : {
                    street : 'teststreet 1',
                    zipcode : '41351',
                    country : 'nigeria'
                },
         email : 'test@gmail.com'
        
            }, 
            deliverymethod : 'fatest'
        }
            axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading : false})
                this.props.history.push('/')
            })
                
            .catch(error => {
                this.setState({loading : false})
            })
        
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if(rules.required) {
            isValid = value.trim() !== "" && isValid
        }

     if(rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if(rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

        return isValid;
    }

    
inputchangehandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.orderForm
    };
    const updatedFormElement = {
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation )
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    updatedFormElement.touched = true;
    // console.log(updatedFormElement);
    let formisvalid = true;
    for(let inputIdentifier in updatedOrderForm) {
        formisvalid = updatedOrderForm[inputIdentifier].valid && formisvalid
    }

    this.setState({orderForm : updatedOrderForm, Valido : formisvalid});
}

    render() {
        const formElementArrays = [];
        for(let key in this.state.orderForm) {
            formElementArrays.push({
                id : key,
                config : this.state.orderForm[key]
            })
        }

        let form = (
            <form onSubmit = {this.orderhandler}>
                {/* // <Input elementType = '...' elementConfig= '...' value = '...'/> */}
                 {formElementArrays.map(formElement => (
        <Input 
        key = {formElement.id}
          elementType = {formElement.config.elementType}
          elementConfig= {formElement.config.elementConfig}
          value={formElement.config.value} 
          invalid = {!formElement.config.valid}
          touched = {formElement.config.touched}
          shouldValidate = {formElement.config.validation}
          change = {(event) => this.inputchangehandler (event, formElement.id)}/>
    ))}
                {/* <Input inputtype = 'input' type = 'email' name = 'email' placeholder = 'your email'/>
                <Input inputtype = 'input' type = 'text' name = 'street' placeholder = 'address'/>
                <Input inputtype = 'input' type = 'text' name ='postal code' placeholder = 'postal code'/> */}
                <Button btnType = 'Success'
                // clicked = {this.orderhandler}
                disabled = {!this.state.Valido}
                >ORDER</Button>
                </form>
                );
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className = {classes.Contactdata}>
            <h4>enter your contact data</h4>
           {form}
            </div>
        )
    }
}

export default ContactData
