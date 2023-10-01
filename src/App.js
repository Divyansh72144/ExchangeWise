import "./App.css";
import Header from "./components/header";
import Content from "./components/main-text-pic";
import Intro from "./components/intro";
import Currencies from "./components/currencies";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Intro />
      <Currencies />
    </div>
  );
}

export default App;
