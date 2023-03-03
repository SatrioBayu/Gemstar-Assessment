import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import GridCard from "./components/GridCard";

function App() {
  return (
    <div className="App">
      <GridCard>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </GridCard>
    </div>
  );
}

export default App;
