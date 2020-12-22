import react from 'react'
import { Switch, Route} from "react-router-dom";
import AgePage from './Pages/AgePage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
         <h1>Holiday Gift Generator</h1>
        </div>
      </div>
      <div className="">
        <Switch>
          <Route path="/age">
            <AgePage/>

          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;
