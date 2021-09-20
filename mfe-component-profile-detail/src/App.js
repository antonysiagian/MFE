import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Customer from './Customer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" children={<Customer />} />
      </Switch>
    </Router>
  );
}

export default App;
