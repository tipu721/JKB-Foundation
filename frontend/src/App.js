
import './App.css';
import EmployeeAdd from './components/EmployeeAdd';
import EmployeeList from './components/EmployeeList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeView from './components/EmployeeView';
import Practice from './practice/Practice';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={EmployeeList}></Route>
            <Route path="/employees" component={EmployeeList}></Route>
            <Route path="/view-employee/:id" component={EmployeeView}></Route>
            <Route path="/add-employee/:id" component={EmployeeAdd}></Route>
            <Route path="/practice" component={Practice}></Route>

          </Switch>

        </div>

      </Router>

    </div>
  );
}

export default App;
