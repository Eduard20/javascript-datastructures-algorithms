class Graph {
  constructor() {
    this.numberOfVertices = 0;
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
    this.numberOfVertices++;
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
  }

  bfs(vertex) {
    const queue = [vertex];
    const result = [];
    const visited = new Map();
    visited[vertex] = true;

    while (queue.length) {
      const current = queue.shift();
      result.push(current);

      this.adjacencyList.get(current)?.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

module.exports = Graph;
