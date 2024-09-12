import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, UserButton } from "@clerk/clerk-react";
// import { dark } from "@clerk/themes";
// import LandingPage from "./pages/dashboard/landing";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          {/* <Link to="/"> Dashboard</Link> */}
          <SignedIn>
            {/* <UserButton  appearance={{baseTheme: dark}}/> */}
            <UserButton />
          </SignedIn>
        </div>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}

          <Route path="/" element={<Auth />} />
          <Route
            path="/main"
            element={
              <FinancialRecordsProvider>
                <Dashboard />
              </FinancialRecordsProvider>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
