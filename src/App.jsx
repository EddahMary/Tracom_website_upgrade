import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
          <Route index path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registrationform" element={<RegistrationForm />}/>
          <Route path="/loginform" element={<LoginForm />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;