import Graph from "./graph.js";


const board = [
    ['0,0', '0,1', '0,2', '0,3'],
    ['1,0', '1,1', '1,2', '1,3'],
    ['2,0', '2,1', '2,2', '2,3'],
    ['3,0', '3,1', '3,2', '3,3']
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
    movesGraph.display();
    return movesGraph;
}

function knightMoves(startSquare, endSquare) {
    
}


buildGraph();
