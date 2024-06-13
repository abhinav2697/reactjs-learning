import React, { useState } from "react";
const ControlledSelectForm = () => {
    const [formData, setFormData] = useState({ favoriteColor: '' });

    const handleChange = (e) => {
        const { name, value } = e.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>
                Favorite Color:
                <select name="favoriteColor" value={formData.favoriteColor} onChange={handleChange}>
                    <option value="">Select a color</option>
                    <option value="red">Red</option>
                    <option value="blur">Blue</option>
                    <option value="green">Green</option>
                </select>
            </label>
        </div>
            <button type="submit">Submit</button>
        </form>
    )
}
export default ControlledSelectForm;