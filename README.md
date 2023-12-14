# Knight Travails

This is an exercise in finding the shortest path for a knight in chess to take from one square to any other. It utilizes an adjacency list graph data structure.

The chess board looks like this:

![01](https://github.com/ethanwhall389/knight-travails/assets/125170834/0e257221-15c4-4127-9d62-a848845f4df8)

It uses a coordinates system to plot the squares ('0,0' would be the bottom left square in this case).

The program at a high level works as follows:
1. Finds all of the possible moves for all squares on the board.

   ![image](https://github.com/ethanwhall389/knight-travails/assets/125170834/70c33e82-39dd-4a31-a3f7-a7addbd9407e)

3. Creates a graph network consisting of:
   a. squares as nodes.
   b. possible moves as edges.
   visualized, this graph network looks something like this (for a 4x4 board):

![image](https://github.com/ethanwhall389/knight-travails/assets/125170834/7c109254-c3d1-4ea4-a4e1-2e85404eb78b)

4. Uses the Breadth-First-Search algorith to find the shortest path from one node to another.
