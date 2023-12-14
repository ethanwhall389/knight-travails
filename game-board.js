import Graph from "./graph.js";


const board = [
    ['0,0', '0,1', '0,2', '0,3', '0,4', '0,5', '0,6', '0,7'],
    ['1,0', '1,1', '1,2', '1,3', '1,4', '1,5', '1,6', '1,7'],
    ['2,0', '2,1', '2,2', '2,3', '2,4', '2,5', '2,6', '2,7'],
    ['3,0', '3,1', '3,2', '3,3', '3,4', '3,5', '3,6', '3,7'],
    ['4,0', '4,1', '4,2', '4,3', '4,4', '4,5', '4,6', '4,7'],
    ['5,0', '5,1', '5,2', '5,3', '5,4', '5,5', '5,6', '5,7'],
    ['6,0', '6,1', '6,2', '6,3', '6,4', '6,5', '6,6', '6,7'],
    ['7,0', '7,1', '7,2', '7,3', '7,4', '7,5', '7,6', '7,7'],
]

const possibleMoves = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
]

function buildGraph() {
    const movesGraph = new Graph();
    //initial loop loops through the outer array (the rows)
    for (let i = 0; i < board.length; i++) {
        //Second loop loops each individual square
        for (let j = 0; j < board[i].length; j++) {
            const originalSquare = [i, j];
            //Loop the possible moves and see which moves current square can make
            possibleMoves.forEach( (move) => {
                const yAxis = move[0];
                const xAxis = move[1];
                const movedTo = [originalSquare[0] + yAxis, originalSquare[1] + xAxis];
                if (movedTo[0] <= 3 && movedTo[0] >= 0 && movedTo[1] <= 3 && movedTo[1] >= 0) {
                    // console.log('Possible moves for ' + originalSquare + ':');
                    // console.log(`${originalSquare} -> ${movedTo}`);
                    movesGraph.addEdge(originalSquare.toString(), movedTo.toString());
                }
            })
        }
    }
    // movesGraph.display();
    return movesGraph;
}

const boardGraph = buildGraph();

export default boardGraph;
