import O from "./O";
import X from "./X";

export default function Square({value = "", onClick}) {

    return (
        <button onClick={onClick}
                className={"bg-custom-button shadow-[0_8px_rgba(0,0,0,0.2)] rounded-lg aspect-square active:translate-y-2 active:shadow-none"}>
            {value === "X" && <X/>}
            {value === "O" && <O/>}
        </button>
    );
}