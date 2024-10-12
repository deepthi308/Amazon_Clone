import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Header Component will not be visible in Login Page */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
