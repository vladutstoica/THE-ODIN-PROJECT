export default function Score({background, scoreTitle}) {
    return (
        <div className={`flex flex-col items-center py-2 ${background} rounded-xl `}>
            <span className={"text-xs"}>{scoreTitle}</span>
            <span className={"font-bold"}>0</span>
        </div>
    );
}