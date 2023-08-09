
import './App.css';
import EmployeeAdd from './components/AddEmployee';
import EmployeeList from './components/ListEmployee';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeView from './components/ViewEmployee';
import Practice from './practice/Practice';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact component={EmployeeList}></Route>
            <Route path="/employees" component={EmployeeList}></Route>
            <Route path="/view-employee/:id" component={EmployeeView}></Route>
            <Route path="/add-employee/:id" component={EmployeeAdd}></Route>
            <Route path="/practice" component={Practice}></Route>

          </Switch>

          <div className='' > <Footer /></div>


        </div>

      </Router>

    </div>
  );
}

export default App;
