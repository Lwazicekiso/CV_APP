import React from 'react';

export default function PersonalInfo({ 
  name, surname, email, phone, address, 
  setName, setSurname, setEmail, setPhone, setAddress 
}) {

  // Event handlers for all input fields
  const handleNameChange = (event) => setName(event.target.value); 
  const handleSurnameChange = (event) => setSurname(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);

  return (
    <div>
    <h1>Personal Information</h1>
    <form id='PersonaInfoForm'>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={name} onChange={handleNameChange} />

        <label htmlFor="surname">Surname:</label>
        <input id="surname" type="text" value={surname} onChange={handleSurnameChange} />

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={email} onChange={handleEmailChange} />

        <label htmlFor="phone">Phone:</label>
        <input id="phone" type="tel" value={phone} onChange={handlePhoneChange} />
      </div>
    </form>
    </div>
    
  );
}



