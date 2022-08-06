import {Link} from "react-router-dom";

export default function ActionsWrapper() {
    return (
        <div className={"max-w-xs mx-auto flex flex-col gap-5"}>
            <Link to={"/game"}
                  className={"flex justify-center items-center gap-2 py-2 bg-custom-1 text-custom-button shadow-[0_8px_rgba(242,178,55,0.8)] rounded-lg active:translate-y-2 active:shadow-none font-bold"}>
                NEW GAME (VS CPU)
            </Link>
            <Link to={"/game"}
                  className={"flex justify-center items-center gap-2 py-2 bg-custom-2 text-custom-button shadow-[0_8px_rgba(48,196,190,0.8)] rounded-lg active:translate-y-2 active:shadow-none font-bold"}>
                NEW GAME (VS PLAYER)
            </Link>
        </div>
    );
}