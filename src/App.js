import "./App.css";
import data from "./data.json";
import image from "./img/netflix.png";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header>
        <img src={image} alt="fd" />
      </header>
      {data.map((elem, num) => {
        return <Section key={num} elem={elem} />;
      })}
      ;
    </div>
  );
}

export default App;
