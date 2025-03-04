import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from ".//components/Footer";
import Homesql from "./pages/Home";
import Heba from "./pages/projects";
import ProjectSingle from "./pages/projectsDetails";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import ProjectForm from "./components/ProjectSubmissionForm";
import About from "./pages/AboutUs";
import Contact from "./pages/contactus";
import Story from "./pages/Story";
import PaymentDone from './pages/PaymentDone'

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homesql />} />
          <Route path="/projects" element={<Heba />} />
          <Route path="/ProjectSingle" element={<ProjectSingle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/ali" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/ProjectSubmissionForm" element={<ProjectForm />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/story" element={<Story />} />
          <Route path="/payment" element={<PaymentDone />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
