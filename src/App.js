import "./App.css";
import Header from "./components/header";
import Content from "./components/main-text-pic";
import Intro from "./components/intro";
import Currencies from "./components/currencies";
import Contact from "./components/contact-me";
// import CurrencyConverter from "../components/currencyAPI";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Intro />
      <Currencies />
      <Contact />
      {/* <CurrencyConverter /> */}
    </div>
  );
}

export default App;
