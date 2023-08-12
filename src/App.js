
import './App.css';
import Three from "./Three"
import { Routes ,Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" component={Three} />
      </Routes>
    </div>
  );
}

export default App;

