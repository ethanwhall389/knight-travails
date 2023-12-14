export default class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    
    addNode(key) {
      if (!this.adjacencyList[key]) {
        this.adjacencyList[key] = [];
      }
    }
    
    addEdge(node1, node2) {
      //If node doesn't exist, add node
      if (!this.adjacencyList[node1]) {
        this.addNode(node1);
      }
      if (!this.adjacencyList[node2]) {
        this.addNode(node2);
      }

      //If edge doesn't already exist, add edge
      if (this.adjacencyList[node1].includes(node2) == false && this.adjacencyList[node2].includes(node1) == false) {
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
      }
    }
    
    findShortestPath(fromKey, toKey) {

      let queue = [fromKey];
      let visited = [];
      let prev = [];

      //While the queue still has content
      while (queue.length !== 0) {
        const node = queue.shift();
        const siblings = this.adjacencyList[node];

        for (let i = 0; i < siblings.length; i++) {
          if (!visited.includes(siblings[i])) {
            queue.push(siblings[i]);
            visited.push(siblings[i]);
            prev[siblings[i]] = node;
          }
        }
      }
      // console.log('Prev array:');
      // console.log(prev);

      //Get path
      let path = [];
      let node = toKey;
      path.push(node);
      while (node !== fromKey) {
        const previous = prev[node];
        path.push(previous);
        node = previous;
      }

      // console.log('\nPath:')
      // console.log(path);

      //Reverse path
      let finalPath = path.reverse();
      // console.log(finalPath);

      return finalPath;
    }
    
    display() {
      Object.keys(this.adjacencyList).forEach( (key) => {
        console.log(`${key} -> ${this.adjacencyList[key]}`);
      })
    }
  }