import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/ViewSingle';
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/products/:id">
          <Detail />
        </Route>
      </div>
    </BrowserRouter>
  );
}
    
export default App;

