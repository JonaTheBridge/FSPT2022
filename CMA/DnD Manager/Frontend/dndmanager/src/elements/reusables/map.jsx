import { useState, useRef } from "react";

const CharacterPawns = [
  {},
  {
    id: 0,
    name: "Pupo"
  },
  {
    id: 1,
    name: "Pepe"
  },
  {
    id: 2,
    name: "Pipo"
  }
]

function statusGrid(x, y) {
  let grid = [];
  for (let i = 0; i < y ; i++) {
    let row = [];
    for (let j = 0; j < x ; j++) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
}

export function GenerateBoard() {
  const grid = statusGrid(10,10);
  grid[0][4] = 2;
  grid[3][0] = 1;
  grid[5][1] = 3;

  const dragItem = useRef();
  const dragOverItem = useRef();
  const [coord, setCoord] = useState([[2,0,4],[1,3,0],[3,5,1]]);
 
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const setChar = (id, row, col) => {
    return (
      <div className="pawn" draggable position={`r${row}c${col}`}>
        {CharacterPawns[id].name}
      </div>
    )
  }

  return (
    <>
      <div className="container-shit">
        {grid.map((row, rowIndex) => {
          return (
            <div className="row" key={rowIndex} >
              {row.map((cell, cellIndex) => {
                return (
                  <div className="cell" key={cellIndex} >{cell !== 0 ? setChar(cell, rowIndex, cellIndex) : null}</div>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}