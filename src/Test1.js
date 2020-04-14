import React, { Fragment } from 'react';

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

  const initMap = () => {
    const index = {};
    const map = mapRef.current.value.split(",");
    map.forEach((e) => {
      index[e[0]] = { ...index[e[0]], [e[1]]: +e.substr(2) };
    });

    return index;
  }

  const findRoute = (input, indexMap) => {
    let distance = 0;
    for (var i = 1; i < input.length; i++) {
      if (indexMap[input[i - 1]][input[i]] === undefined) {
        return;
      }
      distance += indexMap[input[i - 1]][input[i]];
    }
    return distance;
  };

  const handleSubmit = () => {
    const map = initMap();
    const destination = destinationRef.current.value.split(",");
    
    const result = findRoute(destination, map) ? findRoute(destination, map) : "no souch route";
  };

  return (
    <Fragment>
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
        defaultValue={destinExampl} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <div>result</div>
    </Fragment>
  );
};

export default Test1;

