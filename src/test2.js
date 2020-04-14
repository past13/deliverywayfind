const routes = [
  { start: "A" },
  { A: { B: 1, C: 4, D: 10 }},
  { B: { E: 3 }},
  { C: { D: 4, F: 2 }},
  { D: { E: 1 }},

  { E: { B: 3, A: 2 }},
  { F: { D: 1 }},
  { finish: "D" }
];

class Node {
  constructor(node) {
    if (node !== undefined) {
      this.node = node;
      this.children = [];
    }
  }

  addChilds(item) {
    const childs = { ...item[this.node]};
    const childKeys = Object.keys(childs);
    this.children = childKeys.map( node => {
      return new Node(node);
    })
  }
}

function createNode(data) {
  const targetNode = Object.keys(data)[0];
  return new Node(targetNode);
};

//get start element
let rootItem = routes.find(x => x.start).start;
//get finish element
let finishElement = routes.find(x => x.finish);
//list without finish and end
let routesWithoutStartFinish = routes.filter( x => !x.start && !x.finish)
//root item
let rootElement = routesWithoutStartFinish.find(() => rootItem);

const newList = routesWithoutStartFinish.filter(x => !x[rootItem])

let rootNode = createNode(rootElement);
rootNode.addChilds(rootElement);

let nodeList = [];

//create nodeList
routesWithoutStartFinish.forEach(item => {
  const newNode = createNode(item);
  newNode.addChilds(item);
  // nodeList.push(newNode);
  nodeList[newNode.node] = { ...newNode }
})

function createTree(obj) {
  

  
}

function getNestedTree(items, parent) {
  let listOut = [];
  Object.values(items[parent].children).forEach(item => { 
    if (item.node === items[item.node].node) {
      listOut.push(items[item.node]);
    }
  });

  const result = createTree(items, parent);

};

const result = getNestedTree(nodeList, "A");






