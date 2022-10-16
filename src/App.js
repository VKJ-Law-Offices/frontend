import './App.css';
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Homepage from './components/Homepage/Homepage'
import Dashboard from './components/Dashboard/Dashboard'
import Collect from './components/Collect/Collect'
import Reports from './components/Reports/Reports'
import DebtorSummary from './components/Reports/DebtorSummary/DebtorSummary';
import SalesManagerReport from './components/Reports/SalesManagerReport/SalesManagerReport';
import ProjectedCollections from './components/Reports/ProjectedCollections/ProjectedCollections';
import Receipt from './components/Receipt/Receipt'
import Invoices from './components/Invoices/Invoices'
import ROI_Calculator from './components/ROI_Calculator/ROI_Calculator'
import InstantInvoiceLoans from './components/InstantInvoiceLoans/InstantInvoiceLoans'
import StartRecoveryProceedings from './components/StartRecoveryProceedings/StartRecoveryProceedings'
import CreditRatings from './components/CreditRatings/CreditRatings'
import ReferAFriend from './components/ReferAFriend/ReferAFriend'
import E_Invoice from './components/E_Invoice/E_Invoice'
import Settings from './components/Settings/Settings'
import Profile from './components/Profile/Profile'
import Parties from './components/Parties/Parties'
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
          <Route path="/parties" element={<Parties />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/collect" element={<Collect />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/e-invoice" element={<E_Invoice />} />
          <Route path="/debtor_summary" element={<DebtorSummary />} />
          <Route path="/sales_manager_report" element={<SalesManagerReport />} />
          <Route path="/projected_collections" element={<ProjectedCollections />} />
          <Route path="/roi-calculator" element={<ROI_Calculator />} />
          <Route path="/instant-invoice-loans" element={<InstantInvoiceLoans />} />
          <Route path="/start-recovery-proceedings" element={<StartRecoveryProceedings />} />
          <Route path="/credit-ratings" element={<CreditRatings />} />
          <Route path="/refer-a-friend" element={<ReferAFriend />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
          <Route path="/mailverification/:userid/:token" element={<EmailVerify />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
