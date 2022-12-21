import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";

function App() {
  return (
    <main>
      <Split sizes={[30, 70]} direction="horizontal" className="split">
        <Sidebar />
        <Editor />
      </Split>
    </main>
  );
}

export default App;
