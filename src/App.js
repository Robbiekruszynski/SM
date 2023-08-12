
import './App.css';
import Three from "./Three"
import { Switch, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Three} />
      </Switch>
    </div>
  );
}

export default App;

