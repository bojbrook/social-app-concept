import "./App.css";
import CreatePost from "./Components/CreatePost";

function App() {
  const posts = [];
  return (
    <div className="App">
      <header className="App-header">
        <CreatePost />
      </header>
    </div>
  );
}

export default App;
