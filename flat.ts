type Node = {
  id: number;
  children?: Node[];
};

const testroot: Node = {
  id: 1,
  children: [
    { id: 2, children: [{ id: 4 }, { id: 5 }] },
    { id: 3 }
  ]
};

function flatten(root: Node): Node[] { 
    return []; // todo 
}

console.log(flatten(testroot));