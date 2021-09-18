import './App.css';
import EmployeeDetails from './EmployeeDetails';
import EditEmployee from './EditEmployee';
import { BrowserRouter as Router, Route,Switch,withRouter} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

function App(props) {
  return (
 
     <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={EmployeeDetails} />
          <Route exact path="/EditEmployee/editID/:id" component={EditEmployee} />
        </Switch>
      </div>
    </Router>
 
  );
}
 
export default App;