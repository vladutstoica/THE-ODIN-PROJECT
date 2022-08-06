export default function Square() {
    return (
        <button className={"bg-custom-button shadow-[0_8px_rgba(0,0,0,1)] rounded-xl aspect-square active:translate-y-2 active:shadow-none"}>
            <svg className={"w-12 mx-auto"} width="100" height="100" viewBox="0 0 100 100" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50 75C63.8071 75 75 63.8071 75 50C75 36.1929 63.8071 25 50 25C36.1929 25 25 36.1929 25 50C25 63.8071 36.1929 75 50 75Z"
                      fill="#F2B237"/>
            </svg>
        </button>
    )
}