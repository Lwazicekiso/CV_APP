import React, { useState } from 'react';

export default function ExperienceInfo({ jobExperiences, setJobExperiences }) {
  // State for a single experience entry
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [editingIndex,setEditingIndex] = useState('');
  const handleAddExperience = () => {
    const newExperience = { position, company, startDate, endDate };
    setJobExperiences(prevExperiences => [...prevExperiences, newExperience]);

    setPosition('');
    setCompany('');
    setStartDate('');
    setEndDate('');
  };

  //STATES FOR WHEN EDITING POSITION
  const [editingPosition, setEditingPosition] = useState('');
  const [editingCompany, setEditingCompany] = useState('');
  const [editingStartDate, setEditingStartDate] = useState('');
  const [editingEndDate, setEditingEndDate] = useState('');

  const handleEditExperience = (indexToEdit) => {
    const experienceToEdit = jobExperiences[indexToEdit];//returns the expereicnce at the index
    setEditingPosition(experienceToEdit.position);
    setEditingCompany(experienceToEdit.company);
    setEditingStartDate(experienceToEdit.startDate);
    setEditingEndDate(experienceToEdit.endDate);
    setEditingIndex(indexToEdit);
  };

  const handleCancelEdit = () => {
    setEditingPosition('');
    setEditingCompany('');
    setEditingStartDate('');
    setEditingEndDate('');
    setEditingIndex('');
  };



 const handleSaveExperience = (indexToEdit) => {
    setJobExperiences(prevExperiences => prevExperiences.map((exp, index) =>
      index === indexToEdit 
        ? { position: editingPosition, company: editingCompany, startDate: editingStartDate, endDate: editingEndDate }
        : exp
    ));
    setEditingIndex(null);
    handleCancelEdit(); // Clear editing state after saving
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
        index === editingIndex ? ( 
          <div key={index}> 
            <input value={editingPosition} onChange={(e) => setEditingPosition(e.target.value)} />
            <input value={editingCompany} onChange={(e) => setEditingCompany(e.target.value)} />
            <input type="date"  alue={editingStartDate} onChange={(e) => setEditingStartDate(e.target.value)} />
            <input type="date"  value={editingEndDate} onChange={(e) => setEditingEndDate(e.target.value)} />
            <button type="button" onClick={handleCancelEdit}>Cancel</button>
            <button type="button" onClick={() => handleSaveExperience(index)}>Save</button> 
          </div>
        ) : (
          <li key={index}>
            {exp.position} at {exp.company} ({exp.startDate} - {exp.endDate})
            <button type="button" onClick={() => handleRemoveExperience(index)}>
              Remove
            </button>
            <button type="button" onClick={() => handleEditExperience(index)}>
              Edit
            </button>
          </li>
        )
      ))}
    </ul>
  );

    </div>
  );
}
