export default function Score({background}) {
    return (
        <div className={`flex flex-col items-center py-2 ${background} rounded-xl `}>
            <span className={"text-xs"}>X</span>
            <span className={"font-bold"}>14</span>
        </div>
    );
}