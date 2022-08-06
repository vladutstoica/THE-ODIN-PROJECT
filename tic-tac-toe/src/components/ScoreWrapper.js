import Score from "./Score";

export default function ScoreWrapper() {
    return (
        <div className={"max-w-xs mx-auto grid grid-cols-3 gap-3"}>
            <Score background={"bg-custom-2"}/>
            <Score background={"bg-custom-3"}/>
            <Score background={"bg-custom-1"}/>
        </div>
    );
}