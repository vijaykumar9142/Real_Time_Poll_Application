import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Polls from "./pages/Polls";
import CreatePoll from "./pages/CreatePoll";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/poll/:id" element={<Polls />} />
        <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;