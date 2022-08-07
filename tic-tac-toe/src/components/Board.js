import Square from "./Square";
import {useState} from "react";

export default function Board() {
    const [squares, setSquares] = useState({array: Array(9).fill(null), xIsNext: true});

    function handleClick(index) {
        console.log(squares.array[index]);

        squares.array[index] = squares.xIsNext ? "X" : "O";

        setSquares({array: squares.array, xIsNext: !squares.xIsNext});
        console.log(squares.array);
    }

    return (
        <div className={"max-w-xs mx-auto grid grid-cols-3 gap-3 gap-y-5"}>
            {squares.array.map((item, index) => {
                return <Square key={index} value={item} onClick={() => handleClick(index)}/>
            })}
        </div>
    );
}