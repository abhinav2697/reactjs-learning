import React, { useState } from "react";
const ControlledForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '',password:'',confirmPassword:'' });
    const [errors, setErrors] = useState({ name: '', email: '',password:'',confirmPassword:'' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
   

    const validateForm = () => {
        let valid = true;
        const newErrors = { name: '', email: '',password:'',confirmPassword:'' };
        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
            valid = false;
        }
        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is not valid';
            valid = false;
        }
        if (formData.password.trim() === '') {
            newErrors.password = 'Password is required';
            valid = false;
        }
        if (formData.confirmPassword.trim() === '') {
            newErrors.confirmPassword = 'Confirm Password is required';
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
        console.log('Form submitted', formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </label>
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </label>
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <div>
                <label>
                    Confirm Password:
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
                </label>
                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ControlledForm;