
import './App.css';
import EmployeeAdd from './components/EmployeeAdd';
import EmployeeList from './components/EmployeeList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
        <Switch> 
             <Route path = "/" exact component = {EmployeeList}></Route>
             <Route path = "/employees" component = {EmployeeList}></Route>
             <Route path = "/employee" component = {EmployeeAdd}></Route>
          
          </Switch>

        </div>

      </Router>
      
    </div>
  );
}

export default App;
