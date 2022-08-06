import {Route, Routes} from "react-router-dom";
import Logo from "./Logo";
import TurnInfo from "./TurnInfo";
import RestartButton from "./RestartButton";


export default function IntroWrapper() {
    return (
        <div className={"max-w-xs mx-auto grid grid-cols-3 gap-3"}>
            <Routes>
                <Route path="/" element={<Logo/>} />
                <Route path="game" element={<Logo/>} />
                <Route path="game" element={<TurnInfo/>} />
                <Route path="game" element={<RestartButton/>} />
            </Routes>
        </div>
    );
}