import boardGraph from "./game-board.js";


const congratsBank = ['Congrats!', 'Woohoo!', 'Way to go!', 'Well done!', 'Bravo!', 'Fantastic!', 'Superb!'];

function getRandomExclamation() {
    const index = Math.floor(Math.random() * congratsBank.length);
    return congratsBank[index];
}

function knightMoves(startSquare, endSquare) {
    const path = boardGraph.findShortestPath(startSquare, endSquare);
    
    let display = path.shift();
    path.forEach( (move) => {
        display += ` -> ${move}`
    })

    const RandomExclamation = getRandomExclamation();
    let moves;
    path.length > 1 ? moves = 'moves' : moves = 'move';
    console.log(`${RandomExclamation} You made it in ${path.length} ${moves}:`);
    console.log(display);
}



knightMoves('2,2', '1,2');