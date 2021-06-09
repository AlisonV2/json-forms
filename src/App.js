import Data from "./data/data.json";
import CustomForm from "./components/custom-form/custom-form.component";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <CustomForm {...Data} />
    </div>
  );
}

export default App;