import React from 'react'

import classes from './Input.css';

const Input = (props) => {
    let inputElement = null
    const inputClasses = [classes.InputElement];
    let validationError = null;

    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.invalid)
    }

    if (props.invalid && props.touched) {
        validationError = <p>Please enter a valid value!</p>;
    }


    switch (props.elementType) {
        case ('input'):
        inputElement = <input
        className = {inputClasses.join(' ')}
          {...props.elementConfig}
          value = {props.value}
          onChange = {props.change}/>
        break;
        case('textarea'):
        inputElement = <textarea 
        className = {inputClasses.join(' ')}
        {...props.elementConfig}
        value = {props.value}
        onChange = {props.change}/>
        break;
        case ('select'):
inputElement = ( 
         <select 
         className = {inputClasses.join(' ')}
        value={props.value}
        onChange = {props.change}>
        {props.elementConfig.options.map(option => (
            <option
             key = {option.value}
             value = {option.value}>
            {option.displayValue} 
           
            </option>
        ))}
    </select>
);
break;
 default:
         inputElement = <input 
         className = {classes.InputElement}
         {...props.elementConfig} 
         value = {props.value}
         onChange = {props.change}/>;
    }
    return (
        <div className = {classes.Input}>
           <label className = {classes.Label}>{props.label}</label>
    {inputElement} 
    {validationError}
        </div>
    )
    }

    export default Input;
