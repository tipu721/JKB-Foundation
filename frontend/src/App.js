
import './App.css';
import EmployeeAdd from './components/AddEmployee';
import EmployeeList from './components/ListEmployee';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Practice from './practice/Practice';
import Header from './components/Header';
import Footer from './components/Footer';
import ViewEmployee from './components/ViewEmployee';
import ListEmployee from './components/ListEmployee';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';



function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route exact path="/" element={<ListEmployee />} />
            <Route exact path="/add-employee" element={<AddEmployee />} />
            <Route exact path="/edit-employee/:id" element={<EditEmployee />} />
            <Route exact path="/view-employee/:id" element={<ViewEmployee />} />
          </Routes>

          <div className='' > <Footer /></div>


        </div>

      </Router>

    </div>
  );
}

export default App;
