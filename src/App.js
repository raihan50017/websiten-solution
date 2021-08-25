import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Platform from "./components/pages/platform/Platform";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import Registration from "./components/pages/registration/Registration";
import RegisterNewCustomer from "./components/pages/registration/RegisterNewCustomer";
import TutorRegistrationForm from "./components/pages/registration/TutorRegistrationForm";
import StudentRegistrationForm from "./components/pages/registration/StudentRegistrationForm";
import DashboardQuotasPerCoach from "./components/dashboard/DashboardQuotasPerCoach";
import TutorService from "./components/pages/tutorService/TutorService";
import SetupPlatform from "./components/pages/tutorService/SetupPlatform";
import EditUserAccount from "./components/pages/editing/EditUserAccount";
import ChangePaymentInfo from "./components/pages/editing/ChangePaymentInfo";
import ProfileSetting from "./components/pages/editing/ProfileSetting";
import ChangePassword from "./components/pages/editing/ChangePassword";
import DeleteAccount from "./components/pages/delete/DeleteAccount";
import ConfirmDelete from "./components/pages/delete/ConfirmDelete";
import CloseAccount from "./components/pages/delete/CloseAccount";
import ReportTraining from "./components/pages/reportTraining/ReportTraining";

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
        <Route exact path="/tutor-registration">
          <TutorRegistrationForm></TutorRegistrationForm>
        </Route>
        <Route exact path="/student-registration">
          <StudentRegistrationForm></StudentRegistrationForm>
        </Route>
        <Route exact path="/dashboard-quotas">
          <DashboardQuotasPerCoach></DashboardQuotasPerCoach>
        </Route>
        <Route exact path="/tutor-service">
          <TutorService></TutorService>
        </Route>
        <Route exact path="/setup-platform">
          <SetupPlatform></SetupPlatform>
        </Route>
        <Route exact path="/edit-user">
          <EditUserAccount></EditUserAccount>
        </Route>
        <Route exact path="/change-payment-info">
          <ChangePaymentInfo></ChangePaymentInfo>
        </Route>
        <Route exact path="/profile-setting">
          <ProfileSetting></ProfileSetting>
        </Route>
        <Route exact path="/change-password">
          <ChangePassword></ChangePassword>
        </Route>
        <Route exact path="/delete-account">
          <DeleteAccount></DeleteAccount>
        </Route>
        <Route exact path="/confirm-delete">
          <ConfirmDelete></ConfirmDelete>
        </Route>
        <Route exact path="/close-account">
          <CloseAccount></CloseAccount>
        </Route>
        <Route exact path="/report-training">
          <ReportTraining></ReportTraining>
        </Route>
      </Router>
    </div>
  );
}

export default App;
