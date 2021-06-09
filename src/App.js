import './App.css';
import Data from "./data.json";
import CustomForm from "./components/custom-form.component";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <CustomForm {...Data} />
    </div>
  );
}

export default App;