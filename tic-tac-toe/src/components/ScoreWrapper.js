import Score from "./Score";

export default function ScoreWrapper() {
    return (
        <div className={"max-w-xs mx-auto grid grid-cols-3 gap-3"}>
            <Score background={"bg-custom-2"} scoreTitle={"X"}/>
            <Score background={"bg-custom-3"} scoreTitle={"Ties"}/>
            <Score background={"bg-custom-1"} scoreTitle={"O"}/>
        </div>
    );
}