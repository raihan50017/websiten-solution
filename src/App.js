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
import SelectTraininng from "./components/pages/training/SelectTraining";
import LeaderShipView1 from "./components/pages/training/LeadershipView1";
import LeadershipView1 from "./components/pages/training/LeadershipView1";
import LeadershipView2 from "./components/pages/training/LeaderShipView2";
import CreateNewModule from "./components/pages/training/CreateNewModule";
import SendMessage from "./components/pages/training/SendMessage";
import RegistrationStu from "./components/pages/training/RegistrationStu";
import OverView from "./components/pages/training/OverView";
import TrainingsansichtStudent from "./components/pages/training/TrainingsansichtStudent";
import AnsichtStudent from "./components/pages/training/AnsichtStudent";
import LeadershipTraining from "./components/pages/training/LeadershipTraining";
import SalesTraining from "./components/pages/training/SalesTraining";
import CommunicationsTraining from "./components/pages/training/CommunicationsTraining";

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
        <Route exact path="/select-training">
          <SelectTraininng></SelectTraininng>
        </Route>
        <Route exact path="/leadership-view1">
          <LeadershipView1></LeadershipView1>
        </Route>
        <Route exact path="/leadership-view2">
          <LeadershipView2></LeadershipView2>
        </Route>
        <Route exact path="/create-module">
          <CreateNewModule></CreateNewModule>
        </Route>
        <Route exact path="/send-message">
          <SendMessage></SendMessage>
        </Route>
        <Route exact path="/registration-student">
          <RegistrationStu></RegistrationStu>
        </Route>
        <Route exact path="/overview-training">
          <OverView></OverView>
        </Route>
        <Route exact path="/trainingsansicht">
          <TrainingsansichtStudent></TrainingsansichtStudent>
        </Route>
        <Route exact path="/ansicht-student">
          <AnsichtStudent></AnsichtStudent>
        </Route>
        <Route exact path="/leadership-training">
          <LeadershipTraining></LeadershipTraining>
        </Route>
        <Route exact path="/sales-training">
          <SalesTraining></SalesTraining>
        </Route>
        <Route exact path="/communications-training">
          <CommunicationsTraining></CommunicationsTraining>
        </Route>
      </Router>
    </div>
  );
}

export default App;
