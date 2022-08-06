import Logo from "./Logo";
import TurnInfo from "./TurnInfo";


export default function IntroWrapper() {
    return (
        <div className={"max-w-xs mx-auto grid grid-cols-3 gap-3"}>
            <Logo/>
            <TurnInfo/>

            <button
                className={"flex justify-center items-center justify-self-end bg-custom-3 text-custom-button shadow-[0_8px_rgba(255,255,255,0.5)] rounded-lg aspect-square active:translate-y-2 active:shadow-none"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path
                        d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
            </button>
        </div>
    );
}