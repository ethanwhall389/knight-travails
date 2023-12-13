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
    
    findShortest(fromKey) {
      const root = this.adjacencyList[fromKey];
      let queue = [];
      let path = [];
      let cost = [];
      root.forEach( (value) => {
        queue.push([fromKey, value, 1]);
      })
      console.log(queue);
      
      while (queue.length !== 0) {
        const node = queue.shift();
        //if there is not yet a path to this node
        
      }
    }
    
    display() {
      Object.keys(this.adjacencyList).forEach( (key) => {
        // console.log(this.adjacencyList[key][0]);
        // console.log(this.adjacencyList[key][1]);
        // console.log(this.adjacencyList[key][2]);
        console.log(`${key} -> ${this.adjacencyList[key]}`);
      })
    }
  }






  
  
  // console.clear();
  
  // const graph = new Graph();
  
  // graph.addNode(1);
  // graph.addNode(2);
  // graph.addNode(3);
  // graph.addNode(4);
  // graph.addNode(5);
  // graph.addNode(6);
  // graph.addNode(7);
  // graph.addNode(8);
  // graph.addNode(9);
  
  // graph.addEdge(2, 7);
  // graph.addEdge(2, 9);
  // graph.addEdge(9, 4);
  // graph.addEdge(4, 3);
  // graph.addEdge(3, 8);
  // graph.addEdge(6, 7);
  // graph.addEdge(6, 1);
  // graph.addEdge(1, 8);
  
  // graph.display();
  
  // graph.findShortest(6);