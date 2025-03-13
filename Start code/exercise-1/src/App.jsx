import Header from "./components/Header";
import Scores from "./components/Score";
import {JAVA_RESULTS, PYTHON_RESULTS, ENGLISH_RESULTS,HTML_RESULTS} from "./data.js";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>  

      <main className="scores-container">
        <Scores courseName="JAVA" courseResults={JAVA_RESULTS} />
        <Scores courseName="HTML" courseResults={HTML_RESULTS} />
        <Scores courseName="PYTHON" courseResults={PYTHON_RESULTS} />
        <Scores courseName="ENGLISH" courseResults={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;
