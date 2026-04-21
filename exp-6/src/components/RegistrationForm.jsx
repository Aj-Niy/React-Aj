import React from 'react'
import { useState , useEffect } from 'react'

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [apiData, setApiData] = useState(null);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error fetching data:', error));
        }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()){

        }
    }

    const validate = ()=> {
        let tempErrors={};
        if(!formData.name) tempErrors.name = "Name is required";
        if(!formData.email) tempErrors.email = "Email is required";
        if(!formData.password) tempErrors.password = "Password is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }
  return (
    <div className='registration-form'>
        <h2>Registration Form</h2>
        <p style={{fontSize:'20px'}}>
            API Title: {apiData ? apiData : 'Loading...'}
        </p>
        <form onSubmit={handleSubmit}>
            <input name='name' placeholder='Name' onChange={handleChange} />
            {errors.name && <span></span>}
            <input name='email' placeholder='Email' onChange={handleChange} />
            {errors.email && <span></span>}
            <input name='password' type='password' placeholder='Password' onChange={handleChange} />
            {errors.password && <span></span>}
            <button type='submit'>Register</button>
        </form>
      
    </div>
  )
}

export default RegistrationForm
