import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OptionPage from './pages/OptionPage';
import DHomePage from './pages/DHomePage';
import SignUp from './pages/SignUp';

export default function DhomePage() {
  return (
    <Router>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<OptionPage />} />
        {/* Login page accessible via /login */}
        <Route path="/login" element={<LoginPage />} />
        {/* Doctor Home page accessible via /DHome */}
        <Route path="/DHome" element={<DHomePage />} />
        {/* Doctor SingUp page accessible via /DHome */}
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
