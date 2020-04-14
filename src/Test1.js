import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const Test1 = () => {
  
  const mapRef = React.useRef();
  const destinationRef = React.useRef();
  const [counter, setCounter] = useState(0);

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
    const cleanMap = cleanInput(mapRef.current.value);
    const map = cleanMap.split(",");
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

  const cleanInput = (input) => {
    return input.replace(/\s/g, '');
  }

  const handleSubmit = () => {
    const map = initMap();
    const cleanDest = cleanInput(destinationRef.current.value);
    const destination = cleanDest.split(",");
    const result = findRoute(destination, map) ? findRoute(destination, map) : "no souch route";
    setCounter(result);

  };

  return (
    <Fragment>
      <LabelMap>Full map</LabelMap>
      <Input 
        ref={mapRef}
        defaultValue= {mapExample} 
      />
      <br />
      <Label>Destination</Label>
      <Input 
        ref={destinationRef} 
        defaultValue={destinExampl} 
      />
      <br />
      <Button onClick={handleSubmit}>Submit</Button>
      <Result>Path weight: {counter}</Result>
    </Fragment>
  );
};

export default Test1;

const Result = styled.div`
  font-size: 14px;
  padding: 0.25em 1em;
  margin: 0 1em;
`;

const LabelMap = styled.label`
  font-size: 10px;
  padding: 0.25em 1em;
  margin: 0 1em;
`;

const Label = styled.label`
  font-size: 10px;
  padding: 0.25em 1em;
  margin: 0 1em;
`;

const Input = styled.input`
  font-size: 10px;
  padding: 0.25em 1em;
  margin: 0 1em;
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 10px;
  border-radius: 3px;
  color: blue;
  border: 2px solid blue;
  margin: 0 2em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: blue;
    color: white;
  }
`;