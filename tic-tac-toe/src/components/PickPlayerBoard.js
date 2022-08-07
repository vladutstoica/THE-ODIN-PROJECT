import {useState} from "react";

export default function PickPlayerBoard() {
    const [isActive, setActive] = useState(false);

    return (
        <div
            className={"max-w-xs mx-auto flex flex-col gap-5 p-5 bg-custom-button text-custom-3 rounded-lg shadow-[0_8px_rgba(0,0,0,0.2)] font-bold"}>
            <span className={"text-center"}>PICK PLAYER 1'S MARK</span>
            <div className={"grid grid-cols-2 p-2 bg-custom-background rounded-lg"}>
                <button onClick={() => setActive(true)} className={`p-2 ${isActive && "bg-custom-3 rounded-lg"}`}>
                    <svg className={"mx-auto w-8 h-auto"} width="109" height="109" viewBox="0 0 109 109" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <rect x="91.1162" width="25" height="128.048" rx="10" transform="rotate(45 91.1162 0)"
                              fill={isActive ? "#1A2A32" : "#A8BEC9"}/>
                        <rect x="0.572552" y="17.6777" width="25" height="128.048" rx="10"
                              transform="rotate(-45 0.572552 17.6777)" fill={isActive ? "#1A2A32" : "#A8BEC9"}/>
                    </svg>
                </button>
                <button onClick={() => setActive(false)} className={`p-2 ${!isActive && "bg-custom-3 rounded-lg"}`}>
                    <svg className={"mx-auto w-8 h-auto"} width="100" height="100" viewBox="0 0 100 100" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50 75C63.8071 75 75 63.8071 75 50C75 36.1929 63.8071 25 50 25C36.1929 25 25 36.1929 25 50C25 63.8071 36.1929 75 50 75Z"
                              fill={!isActive ? "#1A2A32" : "#A8BEC9"}/>
                    </svg>
                </button>
            </div>
            <span className={"text-center"}>REMEMBER: X STARTS FIRST</span>
        </div>
    );
}