import './App.css';
import Board from "./components/Board";
import ScoreWrapper from "./components/ScoreWrapper";
import IntroWrapper from "./components/IntroWrapper";
import {Route, Routes} from "react-router-dom";
import ActionsWrapper from "./components/ActionsWrapper";
import PickPlayerBoard from "./components/PickPlayerBoard";

function App() {
    return (
        <div className={"flex flex-col my-auto gap-8 select-none"}>
            <header>
                <IntroWrapper/>
            </header>

            <main>
                <Routes>
                    <Route path="/*" element={<PickPlayerBoard/>}/>
                    <Route path="game/*" element={<Board/>}/>
                </Routes>
            </main>

            <footer>
                <Routes>
                    <Route path="/*" element={<ActionsWrapper/>}/>
                    <Route path="game/*" element={<ScoreWrapper/>}/>
                </Routes>
            </footer>
        </div>
    );
}

export default App;