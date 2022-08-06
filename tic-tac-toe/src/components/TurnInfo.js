export default function TurnInfo() {
    return (
        <button className={"flex justify-center items-center gap-2 bg-custom-button shadow-[0_8px_rgba(0,0,0,0.2)] rounded-lg active:translate-y-2 active:shadow-none text-custom-3 font-bold"}>
            <svg className={"w-4 h-auto"} width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="91.1162" width="25" height="128.048" rx="10" transform="rotate(45 91.1162 0)" fill="#30C4BE"/>
                <rect x="0.572552" y="17.6777" width="25" height="128.048" rx="10" transform="rotate(-45 0.572552 17.6777)" fill="#30C4BE"/>
            </svg>
            <svg className={"w-4 h-auto"} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50 75C63.8071 75 75 63.8071 75 50C75 36.1929 63.8071 25 50 25C36.1929 25 25 36.1929 25 50C25 63.8071 36.1929 75 50 75Z" fill="#F2B237"/>
            </svg>
            <span>TURN</span>
        </button>
    );
}