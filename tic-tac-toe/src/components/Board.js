import Square from "./Square";

export default function Board() {
    return (
        <div className={"max-w-xs mx-auto grid grid-cols-3 gap-3 gap-y-5"}>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
        </div>
    )
}