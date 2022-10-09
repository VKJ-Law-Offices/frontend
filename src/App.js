import './App.css';
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Homepage from './components/Homepage/Homepage'
import Dashboard from './components/Dashboard/Dashboard'
import Collect from './components/Collect/Collect'
import Receipt from './components/Receipt/Receipt'
import Invoices from './components/Invoices/Invoices'
import Settings from './components/Settings/Settings'
import Profile from './components/Profile/Profile'
import EmailVerify from './components/EmailVerify/EmailVerify'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions'
import css from "./styles/styles.css"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/collect" element={<Collect />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
          <Route path="/terms_and_conditions" element={<EmailVerify />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
