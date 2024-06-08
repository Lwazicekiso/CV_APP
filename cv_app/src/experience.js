import React, { useState } from 'react';

export default function ExperienceInfo({ jobExperiences, setJobExperiences }) {
  // State for a single experience entry
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const handleAddExperience = () => {
    const newExperience = { position, company, startDate, endDate };
    setJobExperiences(prevExperiences => [...prevExperiences, newExperience]);

    setPosition('');
    setCompany('');
    setStartDate('');
    setEndDate('');
  };

  const handleRemoveExperience = (indexToRemove) => {
    setJobExperiences(prevExperiences => 
      prevExperiences.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <h2>Experience:</h2>

      <form>
        <div>
          <label htmlFor="position">Position:</label>
          <input 
            type="text" 
            id="position" 
            value={position} 
            onChange={(e) => setPosition(e.target.value)} 
          />

          <label htmlFor="company">Company:</label>
          <input 
            type="text" 
            id="company" 
            value={company} 
            onChange={(e) => setCompany(e.target.value)} 
          />

          <label htmlFor="startDate">Start Date:</label>
          <input 
            type="date" 
            id="startDate" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
          />

          <label htmlFor="endDate">End Date:</label>
          <input 
            type="date" 
            id="endDate" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
          />
        </div>
        
        <button type="button" onClick={handleAddExperience}>Add Experience</button>
      </form>

      <ul>
        {jobExperiences.map((exp, index) => (
          <li key={index}>
            {exp.position} at {exp.company} ({exp.startDate} - {exp.endDate})
            <button type="button" onClick={() => handleRemoveExperience(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
