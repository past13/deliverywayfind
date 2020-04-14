const example = [
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
  const index = {};
  example.forEach((e) => {
    index[e[0]] = { ...index[e[0]], [e[1]]: +e.substr(2) };
  });
  
  const findRoute = (input) => {
    let distance = 0;
    for (var i = 1; i < input.length; i++) {
      if (index[input[i - 1]][input[i]] === undefined) {
        console.log(input, 'no such route')
        return
      }
      distance += index[input[i - 1]][input[i]];
    }
    console.log('node', index[input])
    return distance
  };

  // findRoute(["A", "B", "E"])
  // findRoute(["A", "D"])
  // findRoute(["E", "A", "C", "F"])
  // findRoute(["A", "D", "F"])
  // findRoute('E');

