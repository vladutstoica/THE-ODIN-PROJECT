import './App.css';
import Board from "./components/Board";
import ScoreWrapper from "./components/ScoreWrapper";
import IntroWrapper from "./components/IntroWrapper";

function App() {
    return (
        <div className={"flex flex-col my-auto gap-8 select-none"}>
            <header>
                <IntroWrapper/>
            </header>

            <main>
                <Board/>
            </main>

            <footer>
                <ScoreWrapper/>
            </footer>
        </div>
    );
}

export default App;