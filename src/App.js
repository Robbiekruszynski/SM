
import './App.css';
import Three from "./Three"
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';






function App() {
  return (
    <div>
      <p>¯\_(ツ)_/¯</p>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Three} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

