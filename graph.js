class Graph{
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(name){
    this.adjacencyList[name] =[]
    return this.adjacencyList
  }

  addEdge(verx1,verx2){
    this.adjacencyList[verx1].push(verx2)
    this.adjacencyList[verx2].push(verx1)
    return this.adjacencyList
  }

  removeEdge(verx1,verx2){
   this.adjacencyList[verx1] = this.adjacencyList[verx1].filter(word => word !== verx2)
   this.adjacencyList[verx2] = this.adjacencyList[verx2].filter(word => word !== verx1)
   return this.adjacencyList
  }

  removeVertex(verx){
    if(this.adjacencyList[verx].length > 0){
     for(let i=this.adjacencyList[verx].length-1; i >= 0; i--){
      this.removeEdge(verx,this.adjacencyList[verx][i])
       }
    }
    delete this.adjacencyList[verx]
    return this.adjacencyList
  }
}

var graphy = new Graph;
graphy.addVertex("Tokyo")
graphy.addVertex("CDMX")
graphy.addVertex("Toronto")
graphy.addVertex("Cyprus")
graphy.addVertex("Milan")
graphy.addVertex("Hawai")
graphy.addVertex("Brasilia")
graphy.addVertex("Paris")
graphy.addVertex("Dubai")
graphy.addEdge("Tokyo","CDMX")
graphy.addEdge("Hawai","CDMX")
graphy.addEdge("Milan","CDMX")
graphy.addEdge("Cyprus","CDMX")
graphy.addEdge("Tokyo","Cyprus")
graphy.addEdge("Toronto","Tokyo")
graphy.addEdge("Tokyo","Milan")
graphy.removeEdge("Tokyo")
