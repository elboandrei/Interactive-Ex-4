import React from 'react';
import './App.css';
import './simple_form.css'
//
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//
const FunctNamingFormApp = () => {
    //initialize the stateful value and a function to return it
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [programName, setProgramName] = React.useState('');

    // handle onChange event for first name
    const handleChange1 = event => {
        //update name with what's coming from input field
        setFirstName(event.target.value);

    };
    // handle onChange event for last name
    const handleChange2 = event => {
      //update name with what's coming from input field
      setLastName(event.target.value);

  };

  //handle onChange eventf or program name
  const handleChange3 = event => {
    //update program name with what's coming from input field
    setProgramName(event.target.value);
  };

   //handle onSubmit event
    const handleSubmit = event => {
      if (firstName) {
        //display the current value
        alert('A name was submitted from functional form: ' + firstName + ', ' + lastName + '\n Program name: ' + programName);
      }
      //initialize the stateful value
      setFirstName('');
      setLastName('');
      //prevent a browser reload/refresh
      event.preventDefault();
    };
   
    return (
      <div className='simple_form'>
        <h1> You entered: {firstName} </h1>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label> First Name:</Form.Label>
            <Form.Control type="text"  value={firstName} onChange={handleChange1} />
          </Form.Group>
          <Form.Group>
            <Form.Label> Last Name:</Form.Label>
            <Form.Control type="text"  value={lastName} onChange={handleChange2} />
          </Form.Group>
          <Form.Group>
          <Form.Label> Program Name:</Form.Label>
          <Form.Control type="text" value={programName} onChange={handleChange3} />
        </Form.Group>
          <Button variant="primary" type="submit">
            Display Name
          </Button>

        </Form>
   
        
      </div>
    );
  };
   
  export default FunctNamingFormApp;
  