import Square from "./Square";
import {useState} from "react";

function checkWinner(gameStatus) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const line of lines) {
        const [a, b, c] = line;

        if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
            return gameStatus[a];
        }
    }

    return null;
}

export default function Board() {
    const [squares, setSquares] = useState({array: Array(9).fill(null), xIsNext: true});

    function handleClick(index) {
        if (checkWinner(squares.array) || squares.array[index]) return;

        squares.array[index] = squares.xIsNext ? "X" : "O";

        setSquares({array: squares.array, xIsNext: !squares.xIsNext});
    }

    return (
        <div className={"max-w-xs mx-auto grid grid-cols-3 gap-3 gap-y-5"}>
            {squares.array.map((item, index) => {
                return <Square key={index} value={item} onClick={() => handleClick(index)}/>
            })}
        </div>
    );
}