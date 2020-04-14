import React from 'react';

const Test1 = () => {
  
  const mapRef = React.useRef();
  const destinationRef = React.useRef();

  const mapExample = [
        "AB1", 
        "AC4", 
        "AD10", 
        "BE3", 
        "CD4", 
        "CF2", 
        "DE1", 
        "EB3", 
        "EA2", 
        "FD1",
  ];

  const destinExampl = ["A", "B", "E"];

  const handleSubmit = () => {
    
  };

  return (
    <>
      <label>
        Full map
        <input 
        ref={mapRef}
        defaultValue= {mapExample} />
      </label>
      <br />
      <label>
        Destination
        <input ref={destinationRef} 
        defaultValue= {destinExampl} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Test1;



