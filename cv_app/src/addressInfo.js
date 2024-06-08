import React from 'react';
export default function Address({ 
  setAreaCode,address,setAdress,  setProvince, setCity, setStreetAddress,
  areaCode, province, city, streetAddress 
  
}) {

  // Event handlers (no changes needed here)
  const handleAreaCodeChange = (event) => setAreaCode(event.target.value);
  const handleProvinceChange = (event) => setProvince(event.target.value);
  const handleCityChange = (event) => setCity(event.target.value);
  const handleStreetAddressChange = (event) => setStreetAddress(event.target.value);

  return (
    <div>
    <h1>Address Info</h1>
    <form>
        {/* Input fields with corrected props */}
        <label htmlFor="areaCode">Area Code:</label>
        <input id="areaCode" type="number" value={areaCode} onChange={handleAreaCodeChange} />

        <label htmlFor="province">Province:</label>
        <input id="province" type="text" value={province} onChange={handleProvinceChange} />

        <label htmlFor="city">City:</label>
        <input id="city" type="text" value={city} onChange={handleCityChange} />

        <label htmlFor="streetAddress">Street Address:</label>
        <input id="streetAddress" type="text" value={streetAddress} onChange={handleStreetAddressChange} />
     
    </form>
    </div>
   
  );
}