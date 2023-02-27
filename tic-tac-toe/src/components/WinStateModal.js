import X from "./X";
import O from "./O";
import {useContext} from "react";
import {ModalContext} from "./Context";

export default function WinStateModal({winner}) {
    const {showModal, setShowModal} = useContext(ModalContext);

    return (
        <>
            <div
                className={`absolute top-0 left-0 right-0 bottom-0 bg-custom-background ${showModal ? "" : "hidden"}`}></div>

            <div
                className={`absolute flex flex-col items-center gap-5 p-10 left-0 right-0 bg-custom-button ${showModal ? "" : "hidden"}`}>
                <span className={"text-custom-3 font-black"}>{winner === null ? "" : "YOU WON!"}</span>
                <span className={"flex items-center gap-5 text-custom-2 text-4xl font-black"}>{winner === null ? "DRAW" : winner ? <X/> : <O/>} {winner != null && "TAKES THE ROUND"}</span>

                <div className={"flex gap-5"}>
                    <button
                        className={"flex justify-center items-center min-w-20 px-4 py-2 bg-custom-3 text-custom-button shadow-[0_8px_rgba(168,190,201,0.8)] rounded-lg font-bold active:translate-y-2 active:shadow-none"}
                        onClick={() => setShowModal(false)}>QUIT
                    </button>
                    <button
                        className={"flex justify-center items-center min-w-20 px-4 py-2 bg-custom-1 text-custom-button shadow-[0_8px_rgba(242,178,55,0.8)] rounded-lg font-bold whitespace-nowrap active:translate-y-2 active:shadow-none"}>NEXT
                        ROUND
                    </button>
                </div>
            </div>
        </>
    );
}