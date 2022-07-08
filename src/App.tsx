import "./styles.css";
import HexColorToRgb from "./HexColorToRgb";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <HexColorToRgb hexValue="#ffa1b5">
        {({ red, green, blue }) => <p>{`rgb(${red},${green},${blue})`}</p>}
      </HexColorToRgb>
    </div>
  );
}
