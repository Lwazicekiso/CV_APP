//app.js
import React, { useState } from 'react';
import PersonalInfo from './personalnfo';
import Address from './addressInfo';
import { useEffect } from 'react';
import ExperienceInfo from'./experience';


function App() {

  // Personal Information State
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Address State (Individual Fields)
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [province, setProvince] = useState('');

  // Experience State
  const [jobExperiences, setJobExperiences] = useState([]); 


  // OBJECTS TO STORE USER DATA IN JSON
  const [address, setAddress] = useState({
    streetAddress: streetAddress,
    city: city,
    AreaCode: areaCode,
    Province: province,
  });

  const [person,setPerson]=useState({
    name:name,
    surname:surname,
    email:email,
    phone:phone,
    address:address,
});

useEffect(() => {
  // Update the 'person' object whenever its dependencies change
  setPerson({
    name,
    surname,
    email,
    phone,
    address,
  });
}, [name, surname, email, phone, address]);



  return (
    <div>
      <h1>Personal Information</h1>
      <ExperienceInfo 

        jobExperiences = {jobExperiences}
        setJobExperiences={setJobExperiences}
      />
      <PersonalInfo 
        name={name}
        setName={setName}
        surname={surname}
        setSurname={setSurname}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
      />
      
      <Address
        areaCode={areaCode}
        province={province}
        city={city}
        streetAddress={streetAddress}
        setAreaCode={setAreaCode}
        setProvince={setProvince}
        setCity={setCity}
        setStreetAddress={setStreetAddress}
        address={address} 
        setAddress = {setAddress}
      />

      {/* Display entered data */}
      <h2>Personal Information:</h2>
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>

      <h2>Address:</h2>
      <p>Street Address: {streetAddress}</p>
      <p>City: {city}</p>
      <p>Area Code: {areaCode}</p>
      <p>Province: {province}</p>
    </div>
  );
}


export default App;