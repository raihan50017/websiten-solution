import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Platform from "./components/pages/platform/Platform";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import Registration from "./components/pages/registration/Registration";
import RegisterNewCustomer from "./components/pages/registration/RegisterNewCustomer";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/platform">
          <Platform></Platform>
        </Route>
        <Route exact path="/about-us">
          <AboutUs></AboutUs>
        </Route>
        <Route exact path="/registration">
          <Registration></Registration>
        </Route>
        <Route exact path="/new-registration">
          <RegisterNewCustomer></RegisterNewCustomer>
        </Route>
      </Router>
    </div>
  );
}

export default App;
