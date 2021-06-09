import './App.css';
import Data from "./data.json";
import CustomInput from "./components/custom-input.component";

function App() {
  return (
    <div className="App">
      <CustomInput {...Data} />
    </div>
  );
}

export default App;