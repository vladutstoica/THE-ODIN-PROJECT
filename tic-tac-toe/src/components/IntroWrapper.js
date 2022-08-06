import Logo from "./Logo";
import TurnInfo from "./TurnInfo";


export default function IntroWrapper() {
    return (
        <div className={"max-w-xs mx-auto grid grid-cols-3 gap-3"}>
            <Logo />
            <TurnInfo />
        </div>
    );
}